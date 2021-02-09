function addition() {
    let firstValue = document.querySelector(".inputValueOne").value;
    let secondValue = document.querySelector("inputValueTwo").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    let additionResult = firstValue + secondValue;
    document.querySelector(".result").innerHTML = additionResult;
}

function subtraction() {
    let firstValue = document.querySelector(".inputValueOne").value;
    let secondValue = document.querySelector(".inputValueTwo").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    let subtractionResult = firstValue - secondValue;
    document.querySelector(".result").innerHTML = subtractionResult;
}

function multiplication() {
    let firstValue = document.querySelector(".inputValueOne").value;
    let secondValue = document.querySelector(".inputValueTwo").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    let multiplicationResult = firstValue * secondValue; 
    document.querySelector(".result").innerHTML = multiplicationResult;
}

function division() {
    let firstValue = document.querySelector(".inputValueOne").value;
    let secondValue = document.querySelector(".inputValueTwo").value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    let quotient = firstValue / secondValue;
    quotient = parseInt(quotient);
    let remainder = firstValue % secondValue;

    let divisionResult = `${quotient} ... ${remainder}`;
    document.querySelector(".result").innerHTML = divisionResult; 
}