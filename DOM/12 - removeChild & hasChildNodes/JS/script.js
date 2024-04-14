let counter = 1;

function add(){
    let newText = document.createTextNode(prompt('' + ' '));
    let newParagraph = document.getElementById('paragraph');
    newParagraph.appendChild(newText);
    counter++;
}

function delette(){
    let newParagraph = document.getElementById('paragraph');
    if(newParagraph.hasChildNodes()){
        newParagraph.removeChild(newParagraph.firstChild);
        counter--;
    }
}