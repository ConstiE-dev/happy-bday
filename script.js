(function () {
  const CORRECT_PASSWORD = "annika";
  const SESSION_KEY = "site-unlocked";

  const passwordScreen = document.getElementById("password-screen");
  const passwordForm = document.getElementById("password-form");
  const passwordInput = document.getElementById("password-input");
  const passwordError = document.getElementById("password-error");
  const content = document.getElementById("content");
  const video = document.getElementById("video");

  function unlock() {
    passwordScreen.hidden = true;
    content.hidden = false;
    sessionStorage.setItem(SESSION_KEY, "true");
    video.load();
  }

  if (sessionStorage.getItem(SESSION_KEY) === "true") {
    unlock();
  }

  passwordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (passwordInput.value === CORRECT_PASSWORD) {
      unlock();
    } else {
      passwordError.hidden = false;
      passwordInput.value = "";
      passwordInput.focus();
    }
  });
})();
