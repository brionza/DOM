function chNode(){
    let firstOne = document.getElementById('firstDiv');
    alert('La cantidad de elementos del primer div es: ' + firstOne.childNodes.length);
    let secondOne = document.getElementById('secondDiv');
    alert('La cantidad de elementos del segundo div es: ' + secondOne.childNodes.length);
}

function child(){
    let firstOne = document.getElementById('firstDiv');
    alert('La cantidad de elementos del primer div es: ' + firstOne.children.length);
    let secondOne = document.getElementById('secondDiv');
    alert('La cantidad de elementos del primer div es: ' + secondOne.children.length);
}