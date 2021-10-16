let addToDoButton = document.getElementById('add-task-button');
let toDoContainer = document.getElementById('task-list-container');
let inputField = document.getElementById('inputField');
let clearAllButton = document.getElementById('clear-all');

addToDoButton.addEventListener('click',function(e){
    e.preventDefault();

    if(inputField.value != ''){

        var newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add('task-slot');

        var newTaskDesc = document.createElement('div');
        newTaskDesc.classList.add('task-name');
        newTaskDesc.innerText = inputField.value;

        var actionButtonDiv = document.createElement('div');
        actionButtonDiv.classList.add('action-buttons');

        var newTaskDoneButton = document.createElement('button');
        newTaskDoneButton.classList.add('task-done-button');

        var newTaskRemoveButton = document.createElement('button');
        newTaskRemoveButton.classList.add('task-remove-button');

        toDoContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskDesc);
        newTaskContainer.appendChild(actionButtonDiv);
        actionButtonDiv.appendChild(newTaskDoneButton);
        newTaskDoneButton.innerHTML = '<span id="done"><i class="fas fa-check-circle"></i></span>';
        actionButtonDiv.appendChild(newTaskRemoveButton);
        newTaskRemoveButton.innerHTML = '<span id="remove"><i class="fas fa-minus-circle"></i></span>';

        inputField.value = '';

        newTaskDoneButton.addEventListener('click', function(){
            if(newTaskDesc.style.textDecoration!='line-through')newTaskDesc.style.textDecoration = 'line-through';
            else newTaskDesc.style.textDecoration='none';
        })

        newTaskRemoveButton.addEventListener('click', function(){
            toDoContainer.removeChild(newTaskContainer);
        })

        clearAllButton.addEventListener('click', function(){
            toDoContainer.innerHTML = '';
        })
    }
})