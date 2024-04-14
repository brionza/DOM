function getValue(){
    let value = document.getElementById('number');
    value.childNodes[0].nodeValue = parseInt(value.childNodes[0].nodeValue) + 1;
}