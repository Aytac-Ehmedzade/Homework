document.querySelector('#textadd').onclick = function(){
    let input = document.querySelector('#textadd');
    if(input.value.lenght > 0){
        let container = document.querySelector('#container');
        let newItem = document.createElement('div');
        newItem.innerHTML += `
        <div class="main">
            <span class = "inputtext">${input.value}</span>
            <div class = "buttons">
                <button class = "deleteBtn">Delete</button>
                <button class = "editBtn">Edit</button>
            </div>
        </div>
        `;
        let deleteBtn = newItem.querySelector('.deleteBtn');
        deleteBtn.onclick = function(){
            container.removeChild(newItem);
        }
        container.appendChild(newItem);
        input.value = '';
    } else{
        alert("please enter text");
    }
}
