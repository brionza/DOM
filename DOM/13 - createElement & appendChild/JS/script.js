function addElement(){
    let newElement;
    let paragraph;
    let addElement = document.getElementById('paragraph');

    if(addElement.children.length == 0){
        newElement = document.createElement('li');
        paragraph = document.createTextNode('Hola');
        newElement.appendChild(paragraph);
        addElement.appendChild(newElement);
        
        newElement = document.createElement('li');
        paragraph = document.createTextNode('Hola');
        newElement.appendChild(paragraph);
        addElement.appendChild(newElement);
    }

    

}