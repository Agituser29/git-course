var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) { 
   
  var number1 = Number(input1.value); 
  var number2 = Number(input2.value); 

  if (operationCode === '+') { 

    var result = number1 + number2; 

  } else if (operationCode === '-') { 

    var result = number1 - number2; 

  } else if (operationCode === '*') { 

    var result = number1 * number2; 

  } else if (operationCode === '/') { 

    var result = number1 / number2; 

  } else {
    window.alert('operation is unkmown');
  }


  window.alert(result);
}


 
function onOperationButtonClick(eventObject) {    
      var clickedElement = eventObject.currentTarget; 
      var opertaion = clickedElement.innerHTML;
      makeOperation(opertaion);
}

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);

console.log('test2')
