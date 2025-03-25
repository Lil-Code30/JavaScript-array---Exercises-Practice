const input = document.getElementById('input');
const buttonAdd = document.querySelector('.add');
const buttonDisplay = document.querySelector('.display');
const output = document.querySelector('.output');
const clearBtn = document.querySelector('.clear');


let array = [];

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value === ""){
        return;
    }    
    array.push(input.value);
    input.value = "";
})

buttonDisplay.addEventListener('click', (e) => {
    e.preventDefault();
    output.innerHTML = "";
    for(let i=0 ; i < array.length; i++){
        let li = document.createElement('li');
        li.textContent = `Element ${i} = ${array[i]}`;
        output.appendChild(li);
    }
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    array = [];
    output.innerHTML = "";
})
