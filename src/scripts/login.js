const username = document.querySelector("#username-login");
const password = document.querySelector("#password-login");
const button = document.querySelector("#button-login");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

     if (usernameValue === '' || passwordValue === '') {
        alert('Preencha todos os campos.');
        return;
    }

    sessionStorage.getItem('username', usernameValue);
    sessionStorage.getItem('password', passwordValue);

    if (usernameValue !== sessionStorage.getItem("username") || passwordValue !== sessionStorage.getItem("password") ) {
        alert("Nome de usário e/ou senha incorretos")
    }

    alert('Acesso permitido.');

    window.location.href = './home.html'
})



