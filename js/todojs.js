const form= document.querySelector('form');
const input=document.querySelector('#typeNewTask');
const btnDeleteAll= document.querySelector('#btnDeleteAll');
const btnNewTask = document.querySelector('#btnAddNewTask');
const list = document.querySelector('#task-list');
const i = document.querySelector('.fas fa-times');

eventListeners();

function eventListeners() {
    form.addEventListener('submit',addNewItem);
    list.addEventListener('click',deleteItem);
    btnDeleteAll.addEventListener('click',deleteAllItems);
}


function addNewItem(e) {
    if(input.value === ''){
        alert('Schreiben Sie bitte ein Taskname!');
        return
    }
    else {const li = document.createElement('li');
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));
    const a =document.createElement('a');
    a.setAttribute('href','#');
    a.className="delete-item float-right";
    a.innerHTML='<i class="fas fa-times"></i>';
    li.appendChild(a);
    list.appendChild(li);

    // console.log(li);
    } // else yapmadan  calismadi
    e.preventDefault;
    input.value ='';
}

function deleteItem(e) {
    if(e.target.className==='fas fa-times' && confirm('Sind Sie sicher?')){
            e.target.parentElement.parentElement.remove();
    }
    e.preventDefault;

}

function deleteAllItems(e) {
    // list.innerHTML=''; // bu bir yöntem
    console.log(list.childNodes);
    if(confirm('Sind Sie sicher?')){
        list.childNodes.forEach(function (item) {
            if(item.nodeType===1){
                item.remove();
            };
        });
    };

    e.preventDefault;

}

// farkli bir silme yöntemi ama ben calistiramadim deleteAllItems icin

// if(confirm('Sind Sie sicher?')){
//     list.childNodes.forEach(function(item) {
//         if(item.nodeType===1){
//             console.log(item);
//             item.remove();
//         };
//     });
// }
