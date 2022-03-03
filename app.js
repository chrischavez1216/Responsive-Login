const form = document.querySelector('.inputs-container');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");
const usersArray = [];
const userLS = JSON.parse(localStorage.getItem('Users'));


button.addEventListener("click", (e) => {
    e.preventDefault();
    capturar();
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

    usersArray.push({
        username: userval,
        email: emailval,
        password: passval
    })
    
    usersArray.forEach(User => {
        localStorage.setItem('Users', JSON.stringify(usersArray))
    });

    form.reset()
    }

    console.log(userLS)
