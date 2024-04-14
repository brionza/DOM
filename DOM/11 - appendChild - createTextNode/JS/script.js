function addText(){
    let text;
    let test;
    
    text = document.createTextNode('1');
    test = document.getElementById('firstText');
    test.appendChild(text)

    text = document.createTextNode('2');
    test = document.getElementById('secondText');
    test.appendChild(text)

    text = document.createTextNode('3');
    test = document.getElementById('thirdText');
    test.appendChild(text)
}