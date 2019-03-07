let input = document.querySelector("input[type='text']");
let ul = document.querySelector('ul');
let saveBtn = document.querySelector('.save');
let clearBtn = document.querySelector('.clear');
let spans = document.getElementsByTagName("span");
let add = document.querySelector("#add");

add.addEventListener('click', function(){
    input.classList.toggle('display');
  });



input.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13) {
        let li = document.createElement('li');
        let spanElement = document.createElement('span');
        let icon = document.createElement('i');

        let newTodo = this.value;
        this.value = "";

        icon.classList.add('fas', 'fa-times-circle');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);


        deleteTodos();
    }
});


function deleteTodos(){
    for(let span of spans) {
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

ul.addEventListener('click', function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);


saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoList', ul.innerHTML);
    alert('Todos saved');
});

clearBtn.addEventListener('click', function(){
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
});

function loadTodos() {
    if(localStorage.getItem('todoList')){
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodos();
    }
}

deleteTodos();

loadTodos();