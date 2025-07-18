// Prompt untuk nama
showWelcomePopup();

function showWelcomePopup() {
  let userName = prompt("Please enter your name:");
  if (userName !== null && userName !== '') {
    document.getElementById('welcome-user').textContent = userName;
  }
}

// Validasi form
function validateForm() {
  const nameInput = document.getElementById('name-input');
  const output = document.getElementById('message-output');

  if (nameInput.value === '') {
    alert('Please enter your name.');
  } else {
    output.textContent = `Thank you, ${nameInput.value}, for your message!`;
    nameInput.value = '';
  }
}
