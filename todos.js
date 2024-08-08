// const listAllTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then(data => console.log(data))
// }

// const listAllTodoss = (id) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then(data => {
//         let dataFiltered = data.filter(i => i.userId === id)
//         console.log({
//             qtd: dataFiltered.length,
//             data: dataFiltered
//         })
//     } )
// }

// listAllTodos();
// listAllTodoss(1)


// Criar um recurso usando o REST API do jsonplaceholder

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         userId: 2,
//         title: "Vamos estudar JSON",
//         body: "Ler documentação e praticar"
//     })
// })
//     .then(response => response.json())
//     .then(json => console.log(json))


    // Atualizar o post com o id 54

// fetch('https://jsonplaceholder.typicode.com/posts/54', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         userId: 6,
//         title: "Vamos estudar JSON",
//         body: "Ler documentação e praticar"
//     })
// })
//     .then(response => response.json())
//     .then(json => console.log(json))

    // metodo patch atualiza parcialmente 
    fetch('https://jsonplaceholder.typicode.com/posts/54', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: "Vamos estudar JSON",

        })
    })
        .then(response => response.json())
        .then(json => console.log(json))


        // metodo DELETE
        fetch('https://jsonplaceholder.typicode.com/posts/22', {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(json => console.log(json))













