const formulario = document.querySelector("#end_form")
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let rua = document.querySelector("#rua-end").value
    let num = document.querySelector("#num-end").value
    let comp = document.querySelector("#comp-end").value
    let bairro = document.querySelector("#bairro-end").value
    let cidade = document.querySelector("#cidade-end").value
    let uf = document.querySelector("#uf-end").value

    let endereco = {
        rua,
        num,
        comp,
        bairro,
        cidade,
        uf
    }

    localStorage.setItem('enderecos', JSON.stringify(endereco))

    result = document.querySelector('#result')
    result.innerText = `Endereço cadastrado com sucesso`
    result.style.color = '#0f0'
});


function listEnderecos() {
    let enderecos = JSON.parse(localStorage.getItem('enderecos'))

    if(enderecos){
        listRua = document.querySelector("#list-rua-end")
        listRua.innerText = (enderecos.rua)
        listNum = document.querySelector("#list-num-end")
        listNum.innerText = (enderecos.num)
        listComp = document.querySelector("#list-comp-end")
        listComp.innerText = (enderecos.comp)
        listBairro = document.querySelector("#list-bairro-end")
        listBairro.innerText = (enderecos.bairro)
        listCidade = document.querySelector("#list-cidade-end")
        listCidade.innerText = (enderecos.cidade)
		listUF = document.querySelector("#list-uf-end")
		listUF.innerText = (enderecos.uf)

    }else{
        alert("Sem endereços cadastrados por enquanto.")
    }
}

