function filtrarProdutos() {
    const precoFiltro = document.getElementById('preco').value;
    const tipoFiltro = document.getElementById('tipo-produto').value;
    const marcaFiltro = document.getElementById('marca').value;
    
    const produtos = document.querySelectorAll('.product-card');

    produtos.forEach(produto => {
        let mostrar = true;

        if (precoFiltro) {
            const precoProduto = parseFloat(produto.querySelector('p').innerText.replace('R$', '').replace(',', '.'));
            if (precoFiltro === '1' && precoProduto > 50) mostrar = false;
            if (precoFiltro === '2' && (precoProduto < 50 || precoProduto > 100)) mostrar = false;
            if (precoFiltro === '3' && precoProduto < 100) mostrar = false;
        }

        if (tipoFiltro && !produto.querySelector('h5').innerText.toLowerCase().includes(tipoFiltro)) {
            mostrar = false;
        }

        if (marcaFiltro && !produto.dataset.marca.includes(marcaFiltro)) {
            mostrar = false;
        }

        produto.style.display = mostrar ? 'block' : 'none';
    });
}

document.getElementById('preco').addEventListener('change', filtrarProdutos);
document.getElementById('tipo-produto').addEventListener('change', filtrarProdutos);
document.getElementById('marca').addEventListener('change', filtrarProdutos);
