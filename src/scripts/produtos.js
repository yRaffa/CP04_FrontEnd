// pega os dados do arquivo .json

let products = null;
fetch("/src/scripts/produtos.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    console.log(products);
  });
// adiciona os produtos o HTML

let listProduct = document.querySelector(""); // adicionar seletor do css
function addDataToHTML() {
  products.forEach((products) => {
    // cria novo elemento
    let newProduct = document.createElement("a");
    newProduct.href = newProduct.classList.add("item"); //referencia o arquivo html com os detalhes

    // newProduct.innerHTML = `
    //     <img src="${product.img}">
    //     <h2>${product.name}</h2>
    //     <div class="price">${product.price} </div>;
    // `;

    // add o elemnto na classe contida na variavel listProduct
    listProduct.appendChild(newProduct);
  });
}
