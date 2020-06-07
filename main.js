function valueButton(e) {

  document.querySelector('.calc-display').value += e.value;
}
function deleteNumber(e){
    document.querySelector('.calc-display').value = ''
}
function calculate(e){
    document.querySelector('.calc-display').value = eval( document.querySelector('.calc-display').value);
}