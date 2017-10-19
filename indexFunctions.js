var key = "", value = "", type, indent = "  ";
var dictionary = {};

function AddToDictionary() {
    key = document.getElementById("key").value;
    if (ValueAndTypeIsCorrect() && !KeyAlreadyExists(key))
        dictionary[key] = value;
    else if (document.getElementById("key").value === "" || document.getElementById("value").value === "")
        AlertType(2);



    ClearFields();
}

// Verifica que el valor y el tipo seleccionado guarden concordancia
function ValueAndTypeIsCorrect() {
    if (document.getElementById("number").checked) {
        type = "NÚMERO";
        if (!isNaN(document.getElementById("value").value)) {
            value = document.getElementById("value").value;
            return true;
        }
    }
    else if (document.getElementById("string").checked) {
        type = "STRING";
        value = document.getElementById("value").value;
        return true;
    }
    else if (document.getElementById("boolean").checked) {
        type = "BOOLEANO";
        if (document.getElementById("value").value.toUpperCase() === "VERDADERO") {
            value = true;
            return true;
        }
        else if (document.getElementById("value").value.toUpperCase() === "FALSO") {
            value = false;
            return true;
        }
    }
    AlertType(3);
    return false;
}

function ShowDataJson() {
    var output = document.getElementById("output");
    output.value = JSON.stringify(dictionary);
    textAreaAdjust();
    ClearSecondRadioButtons();
}
function SelectType() {
    if (document.getElementById("xml").checked) {
        var output = document.getElementById("output");
        output.value = XML().toString();
        textAreaAdjust();
        ClearSecondRadioButtons();
    }
    else
        ShowDataJson();
}

function ClearFields() {
    document.getElementById("key").value = "";
    document.getElementById("value").value = "";
    document.getElementById("number").checked = false;
    document.getElementById("string").checked = false;
    document.getElementById("boolean").checked = false;
}

function ClearSecondRadioButtons() {
    document.getElementById("json").checked = false;
    document.getElementById("xml").checked = false;
}

function XML() {
    xml = "<dictionary>"
    for (var i in dictionary)
        xml += "\n" + indent + "<key>" + i + "</key>" + "\n" + indent + "<value>" + dictionary[i] + "</value>";
    xml += "\n</dictionary>"
    return xml;
}

function textAreaAdjust(o) {
    document.getElementById("output").style.height = "1px";
    document.getElementById("output").style.height = (25 + document.getElementById("output").scrollHeight) + "px";
    document.getElementById("output").style.width = "300px"
}

function KeyAlreadyExists(key) {
    for (var i in dictionary) {
        if (i === key) {
            AlertType(1);
            return true;
        }

    }
    return false;
}

// 1 Means that KeyAlreadyExist was true
// 2 Means that the user dont write all the info
// 3 Means that the type and the value are not equal
function AlertType(typeOfAlert_) {
    switch (typeOfAlert_) {
        case 1:
            alert("Esa llave ya existía, escriba otra.");
            break;
        case 2:
            alert("Llene los espacios en blanco.");
            break;
        case 3:
            alert("El valor " + value + " no es de tipo " + type);
            break;
    }

}