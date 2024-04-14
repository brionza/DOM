function fRow(){
    let variable = document.getElementById('test');

    while(variable != null){
        if(variable.nodeType == Node.ELEMENT_NODE){
            alert(variable.childNodes[0].nodeValue);
        }
        variable = variable.nextSibling;
    }
}