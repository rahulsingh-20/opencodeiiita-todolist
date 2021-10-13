{/* <script src="https://kit.fontawesome.com/6ac46c55a3.js" q="anonymous"></script> */}

let addToDoButton = document.getElementById('add-task-button');
let toDoContainer = document.getElementById('task-container');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(e){
    e.preventDefault();

    if(inputField.value != ''){
        // create a new paragraph element
        //var paragraph = document.createElement('p');

        // add styling to the new element
        //paragraph.classList.add('paragraph-styling');

        // change the text of the element to the input box content
        //paragraph.innerText = inputField.value;

        // add it to the div toDoContainer
        //toDoContainer.appendChild(paragraph);

        // reset value of input box after adding
        //inputField.value = '';

        // slash item on click
        //paragraph.addEventListener('click',function(){
            //paragraph.style.textDecoration = 'line-through';
        //})
        
        // remove item on double click
        //paragraph.addEventListener('dblclick', function(){
            //toDoContainer.removeChild(paragraph);
        //})


        var newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add('task-slot');

        var newTaskDesc = document.createElement('div');
        newTaskDesc.classList.add('task-name');
        newTaskDesc.innerText = inputField.value;

        var actionButtonDiv = document.createElement('div');
        actionButtonDiv.classList.add('action-buttons');

        var newTaskDoneButton = document.createElement('button');
        newTaskDoneButton.classList.add('task-done-button');
        // newTaskDoneButton.innerText = 'Done';

        var newTaskRemoveButton = document.createElement('button');
        newTaskRemoveButton.classList.add('task-remove-button');
        // newTaskRemoveButton.innerText = 'Remove';

        toDoContainer.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskDesc);
        newTaskContainer.appendChild(actionButtonDiv);
        actionButtonDiv.appendChild(newTaskDoneButton);
        newTaskDoneButton.innerHTML = '<span id="done"><i class="fas fa-check-circle"></i></span>';
        actionButtonDiv.appendChild(newTaskRemoveButton);
        newTaskRemoveButton.innerHTML = '<span id="remove"><i class="fas fa-minus-circle"></i></span>';

        inputField.value = '';

        newTaskDoneButton.addEventListener('click', function(){
            if(newTaskDesc.style.textDecoration==='none')newTaskDesc.style.textDecoration = 'line-through';
            else newTaskDesc.style.textDecoration='none';
        })

        newTaskRemoveButton.addEventListener('click', function(){
            toDoContainer.removeChild(newTaskContainer);
        })
    }
})