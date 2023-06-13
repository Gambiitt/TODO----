

const form = document.querySelector('#add-task');
const input = document.querySelector('#task');
let toDoList = document.querySelector('#ToDo-list')

toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle ('completed-task');
    }
});


//for(let btn of xButton){
//    btn.addEventListener('click', function(e) {
//        e.target.parentElement.remove()
//    });
//}


form.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log(input.value);
    const newTask = document.createElement('li');
    const xBtn = document.createElement('button');
    xBtn.innerText = 'X';
    newTask.innerText = input.value;
    newTask.appendChild(xBtn);
    //console.log(newTask);
    input.value = '';
    toDoList.appendChild(newTask);
    //console.log(toDoList)
});