function hideBlock(){
    let test = document.getElementById('secondBlock');
    let secondTest = test.getElementsByTagName('p');

    for (let elemento of secondTest){
        elemento.style.display = 'none';
    }
}