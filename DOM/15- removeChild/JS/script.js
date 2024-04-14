function deleteNode(){
    let paragraph = document.getElementById('paragraph')
    let selection = document.getElementById('nodeSelection').value;

    paragraph.removeChild(paragraph.children[selection]);
    
}