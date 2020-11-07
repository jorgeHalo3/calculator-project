// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const operation = document.querySelector('#operator');
const result = document.querySelector('#result');

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.
// using innerHTML as our variable that keeps track and displays

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}

for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

//appends the number to innerHTML
function clickNumber(event) {
  console.log(event.target.value);
  
  if(operation.innerHTML == "")
	firstNumber.innerHTML += event.target.value;
  else if(operation.innerHTML != "")
	secondNumber.innerHTML += event.target.value;
}

//only set the operator if secondNumber hasn't started
function clickOperator(event) {
  console.log(event.target.value);
  
  if(secondNumber.innerHTML != "" || firstNumber.innerHTML == "")
	return;
  operation.innerHTML = event.target.value;
}

//calculate result
function clickEqualButton() {
  
  //if all 3 are not empty, calculate
  if(firstNumber.innerHTML != "" && operation.innerHTML != "" && secondNumber.innerHTML != ""){
	
	//converts the string into numbers because operations wont work with strings
	var firstNumberLiteral = parseInt(firstNumber.innerHTML, 10);
	var secondNumberLiteral = parseInt(secondNumber.innerHTML, 10);
	
	if(operation.innerHTML == "plus")
	{
		result.innerHTML = firstNumberLiteral + secondNumberLiteral;
	}else if(operation.innerHTML == "minus")
	{
		result.innerHTML = firstNumberLiteral - secondNumberLiteral;
	}else if(operation.innerHTML == "times")
	{
		result.innerHTML = firstNumberLiteral * secondNumberLiteral;
	}else if(operation.innerHTML == "divide")
	{
		result.innerHTML = firstNumberLiteral / secondNumberLiteral;
	}else if(operation.innerHTML == "power")
	{
		result.innerHTML = Math.pow(firstNumberLiteral , secondNumberLiteral);
	}
  }
}

function clickClearButton() {
  // CODE GOES HERE
  firstNumber.innerHTML = "";
  secondNumber.innerHTML = "";
  operation.innerHTML = "";
  result.innerHTML = "";
}