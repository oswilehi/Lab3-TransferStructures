var key, value;
function addToDictionary() {
    key = document.getElementById("key").value;
    if (ValueAndTypeIsCorrect())
        value = document.getElementById("value").value;

    dictionary[key] = value;
}

// Verifica que el valor y el tipo seleccionado guarden concordancia
function ValueAndTypeIsCorrect() {
    if (document.getElementById("number").checked) {
        if (!isNaN(document.getElementById("value").value))
            return true;
    }
    else if (document.getElementById("string").checked)
        return true;
    else if (document.getElementById("boolean").checked) {
        if (document.getElementById("value").value.toUpperCase() === "VERDADERO")
            return true;
    }
}

// Crea un diccionario vacio
function createDictionary() {
    var dictionary = {};
}