const sendButton = document.getElementById("sendButton");

const ls = window.localStorage;

const $formData = document.getElementById("formData");

const cleanFields = () => {
    document.getElementById("nombreTxt").value = "";
    document.getElementById("apellidoTxt").value = "";
    document.getElementById("telefonoTxt").value = "";
    document.getElementById("direccionTxt").value = "";
    document.getElementById("observacionesTxt").value = "";
}

const onSubmitForm = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombreTxt").value;
    const apellido = document.getElementById("apellidoTxt").value;
    const telefono =- document.getElementById("telefonoTxt").value;
    const direccion = document.getElementById("direccionTxt").value;
    const observaciones = document.getElementById("observacionesTxt").value;

    const usuario = [{
        nombre,
        apellido,
        telefono,
        direccion,
        observaciones
    }];

    setLocalStorage(usuario);

    cleanFields();
}

formData.addEventListener("submit", e => {
    onSubmitForm(e);
})

const setLocalStorage = (data) => {
    let usuarioTexto = JSON.stringify(data);
    localStorage.setItem("usuario", usuarioTexto);
}


const getLocalStorage = () => {
    let usuarioParseado = JSON.parse(localStorage.getItem("usuario"));
}


document.addEventListener("DOMContentLoad", getLocalStorage());