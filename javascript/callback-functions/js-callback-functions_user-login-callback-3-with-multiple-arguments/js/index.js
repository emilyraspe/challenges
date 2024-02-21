console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
function showWelcomeMessage(username, userrole) {
  console.log("Welcome ${userName}! You are logged in now as ${userRole}.");
}
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Welcome ${userName}! You are logged in now as ${userRole}.");
});
