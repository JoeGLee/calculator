const displayCurrent = document.querySelector('.displayCurrent'); // selects display for current number 
const displayLast = document.querySelector('.displayLast'); // selects display for previous number

const numberButtons = document.querySelectorAll('.number'); // selects all elements of number buttons through class number on html
let currentNumber = '';// creates an variable for current number to temp. hold number from .number 
let previousNumber ='';
numberButtons.forEach(numberButton => numberButton.addEventListener('click', ()=>{
    currentNumber = currentNumber + numberButton.textContent;
    displayCurrent.textContent = currentNumber;
}
)); // gets input value of button class .number and puts value into variable currentNumber. In addition, sets displayCurrent text content to currentNumber

const operators = document.querySelectorAll('.op') // gets the input from button class .op
let ops = ''; // creates a varible to hold the operator selected

operators.forEach(operator => operator.addEventListener('click', ()=> {
    ops = operator.textContent;
    previousNumber = currentNumber;
    currentNumber = '';
    displayLast.textContent = previousNumber + ' ' + ops;
    displayCurrent.textContent = '';
}
));


const del = document.querySelector('#delete') // sets id delete to del
del.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0,-1);
    displayCurrent.textContent = currentNumber;
});

const ac = document.querySelector('#AC'); // sets id AC to ac
ac.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    ops = '';
    displayLast.textContent = previousNumber;
    displayCurrent.textContent = currentNumber;
});//sets the current number to blank to reset the number

const equal = document.querySelector('#equal');

equal.addEventListener('click', () => {
    if(ops !== ''){
        displayCurrent.textContent = calculate();
       
    }
    displayLast = previousNumber + ' ' + ops + ' ' + currentNumber;

});


function calculate(){

   let a = parseFloat(currentNumber);
   let b = parseFloat(previousNumber);

    if(ops === '+'){
            return a + b;
    }
    else if(ops === '-'){
        return a - b;
    }
    else if(ops === '/'){
         return b/a;
    }
    else if(ops === 'x'){
        return b*a;
   }
}