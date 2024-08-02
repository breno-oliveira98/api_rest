console.log('antes do fatch');
fetch('https://jsonplaceholder.typicode.com/users', console.log('executando o fetch'))
      .then(response => console.log('pegando o response', response, response.json()))
      .then(json => console.log('pegando o json', json))

      console.log('finalizando o fetch');

      


