function previousLast(){
    let test = document.getElementById('test');
    let ulHij = test.lastElementChild;
    
    while (ulHij != null) {
        alert(ulHij.childNodes[0].nodeValue)
        ulHij = ulHij.previousElementSibling;
    }

}