const cep = (cep) => {
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then(response => response.json(cep))
    .then(data => console.log(data))
}

cep(60811840)