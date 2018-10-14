const flipButton = document.querySelector(".autorize_button");
const authWrap = document.querySelector(".auth-wrap");
const userWrap = document.querySelector(".user-wrap");
const formFlip = document.querySelector('.form');
const formInputs = document.querySelector('.form__wrap_inputs');
const formUser = document.querySelector('.form__wrap_user');



flipButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (userWrap.classList.contains('wrap-active')){

        userWrap.classList.remove('wrap-active');
        formInputs.classList.remove('form__wrap_transparent');
        formUser.classList.add('form__wrap_transparent');
        authWrap.classList.add('wrap-active');
        formFlip.classList.add('is-flipped');
    } else {
        authWrap.classList.remove('wrap-active');
        formInputs.classList.add('form__wrap_transparent');
        formUser.classList.remove('form__wrap_transparent');
        userWrap.classList.add('wrap-active');
        formFlip.classList.remove('is-flipped');
    }
});