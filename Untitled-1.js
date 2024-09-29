document.addEventListener("DOMContentLoaded",function(){
    const nomeProduto = 
    localStorage.getItem("produtoNome");
    const precoProduto = 
    localStorage.getItem("produtoPreco");

    document.getElementById("produto-nome")
    .textContent = nomeproduto;

    document.getElementById("produto-preco").textContent = precoproduto ;

    document.getElementById("pedido-total").textContent=precoproduto}); 

