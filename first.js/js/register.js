function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const fullname = document.getElementById("fullname").value;
    const error = document.getElementById('error');

    if ((username === "kirk" || password === "1234" || confirmPassword === "1234" || fullname === "kirk trinidad")) {
        error.innerHTML = "login successful";
        error.style.color = 'green';
        error.style.visibility = 'visibility';

    }

    else {
        error.innerHTML = "invalid username or password"
        error.style.color = 'red';
        error.style.visibility = 'visibility';
    }
}