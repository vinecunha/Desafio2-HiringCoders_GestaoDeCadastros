const formulario = document.querySelector("#cliente_form")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    let id = Math.floor(Math.random() * 256)
    let nome = document.querySelector("#nome-cliente").value
    let idade = document.querySelector("#idade-cliente").value
    let email = document.querySelector("#email-cliente").value

    let cliente = {
        id,
        nome,
        idade,
        email
    }

    localStorage.setItem('clientes', JSON.stringify(cliente))

    result = document.querySelector('#result')
    result.innerText = `Cliente cadastrado com sucesso`
    result.style.color = '#0f0'
});


function listClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes'))

    if(clientes){
        listId = document.querySelector("#list-id-cliente")
        listId.innerText = (clientes.id)
        listNome = document.querySelector("#list-nome-cliente")
        listNome.innerText = (clientes.nome)
        listIdade = document.querySelector("#list-idade-cliente")
        listIdade.innerText = (clientes.idade)
        listEmail = document.querySelector("#list-email-cliente")
        listEmail.innerText = (clientes.email)

    }else{
        alert("Sem clientes cadastrados por enquanto.")
    }
}
  
