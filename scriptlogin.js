console.log("Proyecto CESUN cargado correctamente");

// ============================================
// REFERENCIAS A ELEMENTOS DEL DOM
// ============================================
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const inputUsuario = document.getElementById("usuario");
const inputContrasenia = document.getElementById("contrasenia");
const loginErrorBox = document.getElementById("login-error");

const modalAlertaEl = document.getElementById("modalAlerta");
const modalAlertaMensaje = document.getElementById("modalAlertaMensaje");
const modalAlerta = new bootstrap.Modal(modalAlertaEl);

// Credenciales estáticas (hardcoded)
const USUARIO_VALIDO = "admin";
const CONTRASENIA_VALIDA = "12345";

// ============================================
// FUNCIÓN: Mostrar modal de alerta
// ============================================
function mostrarAlerta(mensaje) {
    modalAlertaMensaje.textContent = mensaje;
    modalAlerta.show();
}

// ============================================
// FUNCIÓN: Manejo del error en línea
// ============================================
function ocultarErrorLogin() {
    loginErrorBox.classList.add("d-none");
    loginErrorBox.textContent = "";
}

function mostrarErrorLogin(mensaje) {
    loginErrorBox.textContent = mensaje;
    loginErrorBox.classList.remove("d-none");
}

// ============================================
// PASO 2: VALIDACIÓN Y ACCESO ESTÁTICO
// ============================================
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    ocultarErrorLogin();

    const usuario = inputUsuario.value.trim();
    const contrasenia = inputContrasenia.value.trim();

    // Validación de campos vacíos
    if (usuario === "" || contrasenia === "") {
        let campoFaltante = "";
        if (usuario === "" && contrasenia === "") {
            campoFaltante = "Usuario y Contraseña";
        } else if (usuario === "") {
            campoFaltante = "Usuario / Correo electrónico";
        } else {
            campoFaltante = "Contraseña";
        }
        mostrarAlerta("Por favor completa el siguiente campo: " + campoFaltante);
        return;
    }

    // Validación de credenciales estáticas
    if (usuario === USUARIO_VALIDO && contrasenia === CONTRASENIA_VALIDA) {
        // PASO 3: Redirigir a Nesflis
        window.location.href = "Nesflis.html";
    } else {
        mostrarErrorLogin("Usuario o contraseña incorrectos. Intenta de nuevo.");
    }
});
