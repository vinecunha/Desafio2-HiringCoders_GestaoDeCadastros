const formulario = document.querySelector("#prod_form")
formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	let id = document.querySelector("#id-prod").value
	let prod = document.querySelector("#nome-prod").value
	let descr = document.querySelector("#descr-prod").value
	let marca = document.querySelector("#marca-prod").value
	let price = document.querySelector("#price-prod").value

	let produto = {
		id,
		prod,
		descr,
		marca,
		price
	}

	localStorage.setItem('produtos', JSON.stringify(produto))

	result = document.querySelector('#result')
	result.innerText = `Produto cadastrado com sucesso`
	result.style.color = '#0f0'
});


function listProdutos() {
	let produtos = JSON.parse(localStorage.getItem('produtos'))

    if(produtos){
        listId = document.querySelector("#list-id-prod")
        listId.innerText = (produtos.id)
        listNome = document.querySelector("#list-nome-prod")
        listNome.innerText = (produtos.prod)
        listMarca = document.querySelector("#list-marca-prod")
        listMarca.innerText = (produtos.marca)
        listPrice = document.querySelector("#list-price-prod")
        listPrice.innerText = (`R$ ${produtos.price}`)
		listDescr = document.querySelector("#list-descr-prod")
		listDescr.innerText = (produtos.descr)

    }else{
        alert("Sem produtos cadastrados por enquanto.")
    }
}

