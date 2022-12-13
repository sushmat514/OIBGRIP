let todoObject = [
    {
        title:"HTML",
        Description:"Learn Html in a week",
        id:1,
    },
    {
        title: 'CSS',
        Description:'Learn CSS in the second Week',
        id:2,
    },
];
let todoCount = todoObject.length;
let userTitleInputEle = document.getElementById("userTitleInput");
let userDescriptInputEle = document.getElementById("userDescriptInput");
let saveButtonEle = document.getElementById("saveButton");
let todoItemsContainerEle = document.getElementById("todoItemsContainer");
function onAddToDo(){
    if (userTitleInputEle.value === ""){
        alert("enter title");
        return;
    }
    todoCount = todoCount +1;
    let newTodo = {
        title : userTitleInputEle.value,
        Description: userDescriptInputEle.value,
        uniqueId:todoCount
    }
    todoObject.push(newTodo);
    createToDoList(newTodo);
    userTitleInputEle.value = "";
    userDescriptInputEle.value = "";

}
saveButtonEle.onclick = function(){
    onAddToDo();
}
function onDeleteTodo(uniqueId){
    let deleteContainer = document.getElementById(uniqueId);
    todoItemsContainerEle.removeChild(deleteContainer);
}
function createToDoList(todo){
    console.log(todoItemsContainerEle);
    let uniqueId = "todo"+todo.id;

    let divElement = document.createElement('div');
    divElement.classList.add("item-container","row","mb-2");
    divElement.setAttribute("id",uniqueId);
    console.log(uniqueId);

    todoItemsContainerEle.appendChild(divElement);
    let paraEle = document.createElement("p");
    paraEle.classList.add("col-3");
    paraEle.textContent = todo.title;
    divElement.appendChild(paraEle);

    let paraEle1 = document.createElement("p");
    paraEle1.classList.add("col-7");
    paraEle1.textContent = todo.Description;
    divElement.appendChild(paraEle1);

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("col-1","align-items-sm-end");
    divElement.appendChild(buttonDiv);

    let buttonEle = document.createElement("button");
    buttonEle.classList.add("btn","btn-danger","deleteButton");
    buttonEle.textContent = "X";
    buttonEle.onclick = function(){
        onDeleteTodo(uniqueId);
        // console.log("Sushma soujanya tirumalasetti");
    }
    buttonDiv.appendChild(buttonEle);

}


for (let todo of todoObject){
    createToDoList(todo);
}
