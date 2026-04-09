const username = document.querySelector("#username-recovery");
const new_password = document.querySelector("#new-password-recovery");
const confirm_new_password = document.querySelector("#confirm-new-password-recovery");
const button = document.querySelector("#button-recovery");
const checkbox = document.querySelector("#checkbox-recovery")

button.addEventListener("click", (e) => {
    e.preventDefault()

    const usernameValue = username.value;
    const newPasswordValue = new_password.value;
    const confirmPasswordValue = confirm_new_password.value;

    if (usernameValue === "" || newPasswordValue === "" || confirmPasswordValue === "") {
        alert("Preencha todos os campos!")
        return
    }

    const usernameSession = sessionStorage.getItem('username')
    console.log(usernameSession)

    if (usernameValue !== usernameSession) {
        alert("Usuário nâo encontrado!")
        return
    }

    if (newPasswordValue !== confirmPasswordValue) {
        alert("Senhas nâo conferem");
        return
    }

    const passwordSession = sessionStorage.getItem('password')

    if (newPasswordValue === passwordSession) {
        alert("Senha indisponível.");
        return
    }

    sessionStorage.setItem('password', newPasswordValue);

    alert("senha redefinida com sucesso.");

    window.location.href = './login.html';
})

checkbox.addEventListener("change", (e) => {
    const type = new_password.getAttribute("type")

    if (type === 'password') {
        new_password.setAttribute('type', 'text')
        confirm_new_password.setAttribute('type', 'text')
        return
    }

    new_password.setAttribute('type', 'password')
    confirm_new_password.setAttribute('type', 'password')
})