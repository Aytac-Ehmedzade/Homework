fetch('https://dummyjson.com/todos')
    .then(response => response.json())
    .then(data => console.log(data.todos[0]))
    cardShow()


function cardShow (){
    let a = `<div><div><div><p>id</p><h4>todo</h4></div></div></div>`
    for(userData of data.todos){
        a+= `<div><p>${userData.id}</p><h4>${userData.todo}</h4></div>`
    }
    document.getElementsByClassName("mainDiv").innerHtml=a
}
