// pega os dados do arquivo .json

let products = null;
fetch("/src/scripts/produtos.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    console.log(products);
    addDataToHTML();
  });
// adiciona os produtos o HTML


let productDivs = document.querySelectorAll(".produto"); // seleciona todas as divs com a classe 'produto'

function addDataToHTML() {
  productDivs.forEach((div, index) => {
    let newProduct = document.createElement("a");
    newProduct.href = "/src/pages/descricao.html?id=" + products[index].id; // referencia o arquivo html com os detalhes
    newProduct.classList.add("btn", "mt-3", "text-uppercase");
    newProduct.innerHTML = `
        <img src="${products[index].img}">
        <h2>${products[index].name}</h2>
        <div class="price">${products[index].price}</div>
    `;
    newProduct.textContent = "Ver Detalhes"; // define o texto do link

    // adiciona o elemento <a> na div atual
    div.appendChild(newProduct);
  });
}