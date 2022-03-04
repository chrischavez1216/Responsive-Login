const form = document.querySelector(".inputs-container");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");

let usersArray;

const checkLocalStorage = () => {
  const usersFromLocalStorage = JSON.parse(localStorage.getItem("Users"));

  if (usersFromLocalStorage === null) {
    usersArray = [];
  } else {
    usersArray = usersFromLocalStorage;
  }
};

checkLocalStorage();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  capture();
  form.reset();
});

const capture = () => {
  let userval = username.value;
  let emailval = email.value;
  let passval = password.value;

  if (userval == "") {
    alert("Please, set a username.");
    username.focus();
  } else if (emailval == "") {
    alert("Please, set an Email.");
    email.focus();
  } else if (passval == "") {
    alert("Please, set a Password.");
    password.focus();
  }

  usersArray.push({
    username: userval,
    email: emailval,
    password: passval,
  });

  localStorage.setItem("Users", JSON.stringify(usersArray));
};
