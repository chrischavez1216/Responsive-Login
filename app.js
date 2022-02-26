const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    e.preventDefault();
})

const capturar = () => {
    let userval = username.value;
    let emailval = email.value;
    let passval = password.value;

    if (userval=="") {
        alert("Please, set a username.")
        username.focus();
    }

    else if (emailval=="") {
        alert("Please, set an Email.")
        email.focus();
    }

    else if (passval=="") {
        alert("Please, set a Password.")
        password.focus();
    }

    console.log(`Username: ${userval},
Email: ${emailval},
Password: ${passval}.`);
}