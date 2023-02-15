//Declaring all variables
const elemContainer = document.querySelector('.elements');
const modalBtn = document.getElementById('addBtn');
const doneBtn = document.getElementById('doneBtn');
const clearBtn = document.getElementById('clearBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modal = document.getElementById('modal')
const taskToAdd = document.getElementById('taskToAdd');
const addTaskBtn = document.getElementById('addTask');
const overlay = document.getElementById('overlay');
const removeBtn = document.getElementById('clearSelectedBtn');



//toggle active class on showcase tasks on click
const elemNode = document.querySelectorAll('.toDoElement');
const elemNodeArr = Array.from(elemNode);
elemNodeArr.forEach(element => {
    element.addEventListener('click', () =>{
        element.classList.toggle('active')
    })    
});


//open modal with overlay
modalBtn.addEventListener('click' , () => {
    modal.classList.add('show');
    overlay.classList.add('ovActive');
})


//close modal with overlay
overlay.addEventListener('click', () =>{
    modal.classList.remove('show');
    overlay.classList.remove('ovActive');
})


//adding task and enabling to chose them after being added
addTaskBtn.addEventListener('click', () =>{
    if (taskToAdd.value === ""){
        alert("You must type something!")
    }
    else{
        elemContainer.innerHTML += `<p class="toDoElement">${taskToAdd.value}</p>`;
        const elemNode = document.querySelectorAll('.toDoElement');
        const elemNodeArr = Array.from(elemNode);
        elemNodeArr.forEach(element => {
        element.addEventListener('click', () =>{
            element.classList.toggle('active')
        })    
    });
    modal.classList.remove('show');
    overlay.classList.remove('ovActive');
    }
})


//clear button
clearBtn.addEventListener('click', () => {
    elemContainer.innerHTML = "";
})

//toggle selection done
doneBtn.addEventListener('click' , () => {
    const selectedTask = document.querySelectorAll(".active")
    const selectedTaskArr = Array.from(selectedTask)
    selectedTaskArr.forEach(task => {
        task.classList.remove('active');
        task.classList.remove('done');
        task.classList.remove('cancel')
        task.classList.toggle('done');
    })
})

//toggle selection cancel
cancelBtn.addEventListener('click', () =>{
    const selectedTask = document.querySelectorAll('.active');
    const selectedTaskArr = Array.from(selectedTask);
    selectedTaskArr.forEach(task => {
        task.classList.remove('active');
        task.classList.remove('done');
        task.classList.remove('cancel');
        task.classList.add('cancel')
    })
})

//clear the selected items

removeBtn.addEventListener('click' , () =>{
    const selectedTask = document.querySelectorAll('.active');
    const selectedTaskArr = Array.from(selectedTask);
    selectedTaskArr.forEach(task  => {
        task.remove()
    })
})

