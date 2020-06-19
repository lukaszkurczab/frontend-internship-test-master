/* Here goes your JS code */
var invalidElement = '';


function showPopup(e) {
  e.preventDefault();
  document.getElementById("popup").style.display = "block"
}

function closePopup(e) {
  e.preventDefault();
  document.getElementById("popup").style.display = "none"
}

function formValid(e) {
  e.preventDefault();
  if (!document.getElementById('email').checkValidity()) {
    invalidElement = document.getElementById('email');
    displayWarning("Please enter a valid email address");
    warningBox.className = "email-warning";
  }
  else if (!document.getElementById('password').checkValidity()) {
    invalidElement = document.getElementById('password');
    displayWarning("Password must contain at least one number, one uppercase and lowercase letter, and at least 6 characters");
    warningBox.className = "password-warning";
  }
  else if (!document.getElementById('terms').checkValidity()) {
    invalidElement = document.getElementById('terms');
    displayWarning("You must agree to the terms first");
    warningBox.className = "terms-warning";
  } else {
    setTimeout(function () {
      document.getElementById("popup").style.animation = "disappear .1s linear 1";
      setTimeout(function () { document.getElementById("popup").style.display = "none" }, 70)
    }, 1000)
    document.querySelector('.main').innerHTML = `<h1 class="big-text">Thank you!</h1>`
  }
}

var warningTimeout;
var warningBox = document.createElement("div");

function displayWarning(msg) {
  warningBox.innerHTML = `<p><i class="fas fa-exclamation"></i> ${msg}</p>`;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    invalidElement.parentNode.insertBefore(warningBox, invalidElement.nextSibling);
  }

  warningTimeout = window.setTimeout(function () {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}