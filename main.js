let password = document.querySelector('#password');
let comfirmPassword = document.querySelector('#comfirm-password');
const signUpButton = document.querySelector('button');

comfirmPassword.addEventListener('keyup', () => {
    let comfirmPwdArray = [];
    comfirmPwdArray.push(comfirmPassword.value);
    console.log(comfirmPwdArray);
    if (password.value === comfirmPassword.value)console.log('It works: ${password.value}');
});