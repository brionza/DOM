function insert(){
    let element = document.createElement('p');
    let nodeText = document.createTextNode('Parrafo al principio.');
    element.appendChild(nodeText);

    let pointer = document.getElementById('checkpoint');
    let pointerDiv = document.getElementById('paragraph');

    pointerDiv.insertBefore(element, pointer);
}