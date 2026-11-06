(function () {
  const USERS_KEY = "jambPracticeDemoUsers";
  const ADMIN_KEY = "jambPracticeDemoAdmin";
  const CURRENT_USER_KEY = "jambPracticeDemoCurrentUser";
  const ITERATIONS = 160000;

  function readJson(key, fallback) {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    try {
      return JSON.parse(raw);
    } catch (error) {
      throw new Error(`Saved browser data for "${key}" is unreadable. Clear this site's local data to reset the demo.`);
    }
  }

  function requireCrypto() {
    if (!window.crypto || !window.crypto.subtle || !window.crypto.getRandomValues) {
      throw new Error("Secure password hashing is unavailable in this browser context. Open this site on localhost or HTTPS.");
    }
  }

  function toBase64(bytes) {
    let binary = "";
    bytes.forEach((value) => { binary += String.fromCharCode(value); });
    return window.btoa(binary);
  }

  function fromBase64(value) {
    return Uint8Array.from(window.atob(value), (character) => character.charCodeAt(0));
  }

  async function hashPassword(password, saltValue) {
    requireCrypto();
    const salt = saltValue ? fromBase64(saltValue) : window.crypto.getRandomValues(new Uint8Array(16));
    const keyMaterial = await window.crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await window.crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" }, keyMaterial, 256);
    return { salt: toBase64(salt), hash: toBase64(new Uint8Array(bits)) };
  }

  function getUsers() {
    const users = readJson(USERS_KEY, []);
    if (!Array.isArray(users)) throw new Error("Saved account data has an invalid format. Clear this site's local data to reset the demo.");
    return users;
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getAdmin() {
    return readJson(ADMIN_KEY, null);
  }

  window.PracticeAccounts = Object.freeze({
    async createUser({ username, password, paymentReference }) {
      const users = getUsers();
      const normalizedUsername = username.trim().toLowerCase();
      if (users.some((user) => user.username.toLowerCase() === normalizedUsername)) {
        throw new Error("That username is already registered in this browser.");
      }
      const credential = await hashPassword(password);
      const user = {
        id: window.crypto.randomUUID(),
        username: username.trim(),
        passwordSalt: credential.salt,
        passwordHash: credential.hash,
        paymentReference: paymentReference.trim(),
        paymentStatus: paymentReference.trim() ? "pending" : "none",
        createdAt: new Date().toISOString()
      };
      saveUsers(users.concat(user));
      localStorage.setItem(CURRENT_USER_KEY, user.id);
      return user;
    },
    async signIn(username, password) {
      const normalizedUsername = username.trim().toLowerCase();
      const user = getUsers().find((item) => item.username.toLowerCase() === normalizedUsername);
      if (!user) throw new Error("Username or password is incorrect.");
      const candidate = await hashPassword(password, user.passwordSalt);
      if (candidate.hash !== user.passwordHash) throw new Error("Username or password is incorrect.");
      localStorage.setItem(CURRENT_USER_KEY, user.id);
      return user;
    },
    getCurrentUser() {
      const currentId = localStorage.getItem(CURRENT_USER_KEY);
      return getUsers().find((user) => user.id === currentId) || null;
    },
    signOut() {
      localStorage.removeItem(CURRENT_USER_KEY);
    },
    async createAdmin(password) {
      if (getAdmin()) throw new Error("An admin demo password is already configured in this browser.");
      const credential = await hashPassword(password);
      localStorage.setItem(ADMIN_KEY, JSON.stringify(credential));
    },
    async signInAdmin(password) {
      const admin = getAdmin();
      if (!admin) throw new Error("Set up the demo admin password first.");
      const candidate = await hashPassword(password, admin.salt);
      return candidate.hash === admin.hash;
    },
    getAdminConfigured() {
      return Boolean(getAdmin());
    },
    getUsers,
    updatePaymentStatus(userId, status) {
      if (!["approved", "rejected", "pending"].includes(status)) throw new Error("Invalid payment status.");
      const users = getUsers();
      const user = users.find((item) => item.id === userId);
      if (!user) throw new Error("Account was not found in this browser.");
      user.paymentStatus = status;
      user.reviewedAt = new Date().toISOString();
      saveUsers(users);
      return users;
    }
  });
}());
