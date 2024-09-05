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

let listProduct = document.querySelectorAll(".produto"); // adicionar seletor do css
function addDataToHTML() {
  products.forEach((product) => {
    // cria novo elemento
    let newProduct = document.createElement("a");
    newProduct.href = "/src/pages/descricao.html?id=" + product.id; //referencia o arquivo html com os detalhes
    newProduct.classList.add("item");
    newProduct.innerHTML = `
        <img src="${product.img}">
        <h2>${product.name}</h2>
        <div class="price">${product.price} </div>;
    `;

    // add o elemnto na classe contida na variavel listProduct
    listProduct.appendChild(newProduct);
  });
}

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