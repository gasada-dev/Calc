const NUMBERS = document.querySelectorAll('.number');
const OPERATIONS = document.querySelectorAll('.operation');
const BUTTONS = document.querySelectorAll('.btn');

const SCREEN = document.querySelector('.calc__screen');
const CALCBODY = document.querySelector('.calc__body');
const ZEROBTN = document.querySelector('.zero');
const RESULTBTN = document.querySelector('.result');
const CLEARBTN = document.querySelector('.clear');
const CLEARENTRYBTN = document.querySelector('.clear_entry');
const DECIMALPOINT = document.querySelector('.decimal_point');

BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {

      if (button.classList.contains('number')) {
        if (SCREEN.value === '0') {
          SCREEN.value = button.textContent;
        } else {
          SCREEN.value += button.textContent;
        }}
      
      })})


    OPERATIONS.forEach((operation) => {
    operation.addEventListener('click', () => {



})})


class Calculator {
  constructor () {
    this.firstNumber = +SCREEN.value;
    this.secondNumber = 0;
    this.operator = ''

    
  } 
}