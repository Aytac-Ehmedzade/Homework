// document.querySelector('#textadd').onclick = function(){
//     let input = document.querySelector('#textadd');
//     if(input.value.lenght > 0){
//         let container = document.querySelector('#container');
//         let newItem = document.createElement('div');
//         newItem.innerHTML += `
//         <div class="main">
//             <span class = "inputtext">${input.value}</span>
//             <div class = "buttons">
//                 <button class = "deleteBtn">Delete</button>
//                 <button class = "editBtn">Edit</button>
//             </div>
//         </div>
//         `;
//         let deleteBtn = newItem.querySelector('.deleteBtn');
//         deleteBtn.onclick = function(){
//             container.removeChild(newItem);
//         }
//         container.appendChild(newItem);
//         input.value = '';
//     } else{
//         alert("please enter text");
//     }
// }


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
