const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const copyButton = document.querySelector("#copy-button");
const suggestion = document.querySelector("#suggestion");
const placeholder = document.querySelector("#placeholder");

const matrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

function showError(message) {
    alert(message);
}

function encryptText() {
    if (inputText.value === "") {
        outputText.innerText = "Ningún mensaje fue encontrado";
        suggestion.style.display = "block";
        placeholder.style.display = "block";
        copyButton.style.display = "none";
    } else if (validateText(inputText.value)) {
        let text = inputText.value;
        for (let i = 0; i < matrix.length; i++) {
            text = text.replaceAll(matrix[i][0], matrix[i][1]);
        }
        outputText.innerText = text;
        copyButton.style.display = "block";
        suggestion.style.display = "none";
        placeholder.style.display = "none";
    } else {
        showError("No se permiten caracteres especiales, solo letras minúsculas y espacios");
        copyButton.style.display = "none";
        suggestion.style.display = "block";
        placeholder.style.display = "block";
    }
}


function decryptText() {
    if (inputText.value === "") {
        outputText.innerText = "Ningún mensaje fue encontrado";
        suggestion.style.display = "block";
        placeholder.style.display = "block";
        copyButton.style.display = "none";
    } else if (validateText(inputText.value)) {
        let text = inputText.value;
        for (let i = matrix.length - 1; i >= 0; i--) {
            text = text.replaceAll(matrix[i][1], matrix[i][0]);
        }
        outputText.innerText = text;
        copyButton.style.display = "block";
        suggestion.style.display = "none";
        placeholder.style.display = "none";
    } else {
        showError("No se permiten caracteres especiales, solo letras minúsculas y espacios");
        copyButton.style.display = "none";
        suggestion.style.display = "block";
        placeholder.style.display = "block";
    }
}

function copyText() {
    navigator.clipboard.writeText(outputText.innerText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
