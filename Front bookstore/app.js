
function showLogin() {
    document.getElementById("form-login").classList.add("active");
    document.getElementById("form-register").classList.remove("active");
}

function showRegister() {
    document.getElementById("form-login").classList.remove("active");
    document.getElementById("form-register").classList.add("active");
}


function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

 
    console.log("Login:", { email, password });
    alert("Login realizado com sucesso!");
}


function handleRegister() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (!name || !email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

   
    console.log("Register:", { name, email, password });
    alert("Registro realizado com sucesso!");
}





const API_URL = "http://localhost:3000";


function showLogin() {
    document.getElementById("form-login").classList.add("active");
    document.getElementById("form-register").classList.remove("active");
}

function showRegister() {
    document.getElementById("form-login").classList.remove("active");
    document.getElementById("form-register").classList.add("active");
}


async function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Login bem-sucedido:", data);
            alert("Login realizado com sucesso!");
           
            localStorage.setItem("token", data.token);
        } else {
            const error = await response.json();
            alert(`Erro ao fazer login: ${error.message}`);
        }
    } catch (error) {
        console.error("Erro na requisição de login:", error);
        alert("Erro ao se conectar ao servidor.");
    }
}


async function handleRegister() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (!name || !email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Registro bem-sucedido:", data);
            alert("Registro realizado com sucesso! Faça login para continuar.");
            showLogin(); 
        } else {
            const error = await response.json();
            alert(`Erro ao registrar: ${error.message}`);
        }
    } catch (error) {
        console.error("Erro na requisição de registro:", error);
        alert("Erro ao se conectar ao servidor.");
    }
}

