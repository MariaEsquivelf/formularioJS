function emailValidation() {
  const form = document.getElementById('form');
  const emailConfirmField = document.getElementById('email_confirm');
  const contentField = document.getElementsByClassName('contact_content')
  const message = document.createTextNode("El correo electrónico no coincide.");
  const alert = document.createElement('p');
  
  alert.appendChild(message);
  alert.setAttribute('id', 'alert');
  alert.classList.add("alert_color");

  emailConfirmField.addEventListener('input', e => {
    if (form.email.value !== emailConfirmField.value) {
      if (!document.getElementById('alert')) {
        emailConfirmField.classList.add("incorrectcolor")
        contentField[0].parentNode.insertBefore(alert, contentField[0]);
      }
    } else {
      emailConfirmField.classList.remove("incorrectcolor");
      const alertElement = document.getElementById('alert');
      if (alertElement) {
        alertElement.parentNode.removeChild(alertElement);
        alertElement.parentNode.removeChild(alertElement);
      }
    }
  });
}

window.onload = function() {
  emailValidation();
};