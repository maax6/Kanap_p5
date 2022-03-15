// Récupérer les produits sur l'API via le port 3000.
const url = "http://localhost:3000/api/products/";

//Fetch l'API,transforme la réponse en JSON et itère pour chaque objet de l'objet JSON :
//Récupère les infos du produit
//Les passe en variable dans le template html ci dessous.
//Le HTML est injecté dans le DOM via innerHTML dans les balises '.items'.
function getProducts() {
  fetch(url)
    .then((data) =>data.json()
      .then((data) => {
        for (let i = 0; i < data.length; i++) { 
          let name = data[i].name; 
          let imageUrl = data[i].imageUrl;
          let price = data[i].price;
          let id = data[i]._id;
          let description = data[i].description;
          let altTxt = data[i].altTxt; 
          // console.log(data[i]);
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