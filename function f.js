function fazerPedido(produto,preço) {
   localStorage.setItem('produto',produto) ;
   localStorage.setItem('preco',preço);
    
   window.location.href="pedido.html";
}