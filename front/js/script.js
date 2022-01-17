// Récupérer les produits
const url = "http://localhost:3000/api/products/";


function getProducts() {
  fetch(url).then((data) =>
    data.json()
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let name = data[i].name;
          let imageUrl = data[i].imageUrl;
          let price = data[i].price;
          let id = data[i]._id;
          let description = data[i].description;
          let altTxt = data[i].altTxt; //Toutes les infos du produit ont été récupérées sauf la couleur dont l'option de trouve sur la page produit.

          console.log(data[i]);
          //afficher les produits via innerHTML
          let items = `<a href="./product.html?id=${id}">
                          <article>
                            <img src="${imageUrl}" alt="${altTxt}">
                            <h3 class="productName">${name}</h3>
                            <p class="productDescription">${description}</p>
                            <p>Prix : ${price}€</p>
                          </article>
                        </a>`;
          document.querySelector(".items").innerHTML += items;
        }
      })
  );
}

getProducts();

 