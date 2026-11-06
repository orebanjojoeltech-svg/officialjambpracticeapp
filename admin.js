const setupForm = document.querySelector("#admin-setup-form");
const loginForm = document.querySelector("#admin-login-form");
const dashboard = document.querySelector("#admin-dashboard");

function showAdminGate() {
  const configured = window.PracticeAccounts.getAdminConfigured();
  document.querySelector("#admin-auth-title").textContent = configured ? "Unlock the admin demo" : "Set a demo admin password";
  document.querySelector("#admin-auth-help").textContent = configured
    ? "Enter the password configured for this browser."
    : "This creates a local demo password only. It is not a secure site administrator account.";
  setupForm.hidden = configured;
  loginForm.hidden = !configured;
  dashboard.hidden = true;
}

function makeCell(text, className) {
  const cell = document.createElement("td");
  if (className) cell.className = className;
  cell.textContent = text;
  return cell;
}

function makeAction(label, status, userId) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `button ${status === "approved" ? "button-primary" : "button-quiet"} admin-action`;
  button.textContent = label;
  button.addEventListener("click", () => {
    try {
      window.PracticeAccounts.updatePaymentStatus(userId, status);
      renderUsers();
    } catch (error) {
      window.alert(error.message);
    }
  });
  return button;
}

function renderUsers() {
  const users = window.PracticeAccounts.getUsers().slice().sort((first, second) => second.createdAt.localeCompare(first.createdAt));
  const pendingCount = users.filter((user) => user.paymentStatus === "pending").length;
  const approvedCount = users.filter((user) => user.paymentStatus === "approved").length;
  document.querySelector("#admin-total").textContent = users.length;
  document.querySelector("#admin-pending").textContent = pendingCount;
  document.querySelector("#admin-approved").textContent = approvedCount;

  const body = document.querySelector("#admin-users");
  body.replaceChildren();
  document.querySelector("#admin-empty").hidden = users.length > 0;
  users.forEach((user) => {
    const row = document.createElement("tr");
    const date = new Date(user.createdAt);
    const submitted = Number.isNaN(date.getTime()) ? "Unknown date" : date.toLocaleString();
    const labels = { pending: "Pending", approved: "Approved (demo)", rejected: "Rejected", none: "No payment ref" };
    row.append(
      makeCell(user.username, "admin-username"),
      makeCell(user.paymentReference || "—", "admin-reference"),
      makeCell(submitted, "admin-date"),
      makeCell(labels[user.paymentStatus] || "Unknown", `admin-status status-${user.paymentStatus || "none"}`)
    );
    const actions = document.createElement("td");
    actions.className = "admin-actions-cell";
    if (user.paymentStatus === "pending") {
      actions.append(makeAction("Approve demo", "approved", user.id), makeAction("Reject", "rejected", user.id));
    } else if (user.paymentReference) {
      actions.append(makeAction("Set pending", "pending", user.id));
    } else {
      actions.textContent = "—";
    }
    row.append(actions);
    body.append(row);
  });
}

function showDashboard() {
  document.querySelector("#admin-auth-card").hidden = true;
  dashboard.hidden = false;
  renderUsers();
}

setupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = document.querySelector("#admin-setup-message");
  const password = document.querySelector("#admin-password").value;
  if (password !== document.querySelector("#admin-password-confirm").value) {
    message.textContent = "The passwords do not match.";
    return;
  }
  message.textContent = "Saving the demo password in this browser…";
  try {
    await window.PracticeAccounts.createAdmin(password);
    showAdminGate();
    message.textContent = "";
    await window.PracticeAccounts.signInAdmin(password);
    setupForm.reset();
    showDashboard();
  } catch (error) {
    message.textContent = error.message;
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = document.querySelector("#admin-login-message");
  message.textContent = "Checking password…";
  try {
    const valid = await window.PracticeAccounts.signInAdmin(document.querySelector("#admin-login-password").value);
    if (!valid) {
      message.textContent = "Password is incorrect.";
      return;
    }
    loginForm.reset();
    showDashboard();
  } catch (error) {
    message.textContent = error.message;
  }
});

document.querySelector("#admin-lock-button").addEventListener("click", () => {
  document.querySelector("#admin-auth-card").hidden = false;
  showAdminGate();
  try {
    window.PracticeAccounts.getUsers();
  } catch (error) {
    document.querySelector("#admin-login-message").textContent = error.message;
  }
});

showAdminGate();
