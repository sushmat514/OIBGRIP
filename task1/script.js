let inputCalEle = document.getElementById("inputCal");
let EqualAnswer = document.getElementById("equalAnswer");
let previousAnswer = "";
function onDelete(){
    inputCalEle.textContent = 0;

}
function KeyClicked(inputVal){
    let value = inputCalEle.textContent;
    if (value === "0"){
        inputCalEle.textContent = inputVal;
    }
    else{
        inputCalEle.textContent = value + inputVal;
    }
    
}
function onDelete(){
    let value = inputCalEle.textContent;
    let stringLength = value.length;
    if (stringLength == 1){
        inputCalEle.textContent = "0";
    }
    else{
        console.log(stringLength);
        inputCalEle.textContent = value.slice(0,stringLength-1);
    }   
}
function result(){
    let expression1 = inputCalEle.textContent;
    let answer = eval(expression1);
    EqualAnswer.textContent = answer;
    previousAnswer=answer;
}
function onClear(){
    inputCalEle.textContent = "0";
}
function onPreviousAns(){
    let value = inputCalEle.textContent;
    if (value === "0"){
        inputCalEle.textContent = previousAnswer;
    }
    else{
        inputCalEle.textContent = value + previousAnswer;
    }
}