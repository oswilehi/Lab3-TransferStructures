var key , value ;
var dictionary = new Array();
function AddToDictionary() {
    key = document.getElementById("key").value;
    if (ValueAndTypeIsCorrect())
        value = document.getElementById("value").value;
    if(key === "" || value === "" )
        alert("Fill the blanks please");
    else
        {
            dictionary.push({
                    dicKey : key, 
                    dicValue: value
               
            });
        }
   
    alert(dictionary[0].dicKey + dictionary[0].dicValue);
    
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


function ShowDataJson(){
    //var output = document.getElementById("output");
    //output.innerHTML = JSON.stringify(dictionary);

    //document.getElementById("output").value = JSON.stringify(dictionary);
    alert(JSON.stringify(dictionary));
    document.getElementById("output").value = JSON.stringify(dictionary);
    //el text area solo lo estoy usando para ver que onda

}
function SelectType(){
    if(document.getElementById("xml").checked){
        //show data type xml
    }
    else
        ShowDataJson();
}