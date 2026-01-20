function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const error = document.getElementById('error');

    if ((username == "hammett") && (password == "sapnupuwas")) {
        error.innerHTML = "Login successful";
        error.style.color = 'green';
        error.style.backgroundColor = 'yellow';
        error.style.visibility = 'visible';
    }

    else {
        error.innerHTML = "Invalid username or password";
        error.style.color = 'red';
        error.style.visibility = 'visible';

    }

}