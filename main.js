let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
const signUpButton = document.querySelector("button");

confirmPassword.addEventListener("keyup", () => {
  if (confirmPassword.value === password.value && password.value !== "") {
    confirmPassword.classList.remove("cpwdrb");
    confirmPassword.classList.remove("cpwdx");
    confirmPassword.classList.remove("cpwdfi");
    confirmPassword.classList.add("cpwdc");
    confirmPassword.classList.add("cpwdgb");
    confirmPassword.classList.add("cpwdv");
  } else if (confirmPassword.value !== password.value && password.value !== "") {
    confirmPassword.classList.remove("cpwdc");
    confirmPassword.classList.remove("cpwdgb");
    confirmPassword.classList.remove("cpwdv");
    confirmPassword.classList.add("cpwdrb");
    confirmPassword.classList.add("cpwdx");
    confirmPassword.classList.add("cpwdfi");
  }
});

function checkForInvalidMatch(){
    if (confirmPassword.value !== password.value) {
        signUpButton.disabled = true;
        setTimeout(function () {
          signUpButton.disabled = false;
        }, 1);
    }
}
signUpButton.addEventListener("click", checkForPasswordMatch);
signUpButton.addEventListener("keydown", checkForPasswordMatch);