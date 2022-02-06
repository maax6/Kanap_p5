// Récupérer l'id du produit que le visiteur visite
const newUrl = new URL(window.location.href);
//isoler l'ID dans l'URL
let ID = newUrl.searchParams.get('id');
// l'URL pour fetch s'apelle urlProduct
const urlProduct = `http://localhost:3000/api/products/${ID}`;
//La fonction suivante va chercher les infos de l'item ciblé par ID sur l'API, les traduit en JSON et intègre le html nécéssaire
function getProductDetails() {
  fetch(urlProduct)
  .then(response => response.json())
  .then(data => {
    let imageUrl = data.imageUrl ;
    let altTxt = data.altTxt ; 
    let name = data.name ; 
    let price = data.price ; 
    let description = data.description ; 
    let colors = data.colors;
    document.querySelector(".item__img").innerHTML += `<img src="${imageUrl}" alt="${altTxt}">`;
    document.querySelector("#title").innerHTML += name;
    document.querySelector("#price").innerHTML += price;
    document.querySelector("#description").innerHTML += description;
    for (value in colors){
      document.querySelector("select").innerHTML += `<option value="${colors[value]}">${colors[value]}</option>`;
    }
  })
} ;
getProductDetails()

///////////////////
//Gerer le panier//
///////////////////



// Enregistrer le produit dans le localStorage sous la clé cart "cart".
document.getElementById('addToCart').addEventListener("click", (event)=>{
  event.preventDefault();
  // let price = document.querySelector("#price").value;
  let chosenColor = document. querySelector("#colors").value;
  let chosenQuantity = document.querySelector("#quantity").value;
  // let nameItem = document.querySelector("#name").value;NONEED
  // let description = document.querySelector("#description").value;NONEED
  // let image = document.querySelector(".item__img").value; NONEED
  if (chosenQuantity > 0 || chosenQuantity <=100 ){
    let article = {
      ID,
      chosenColor,
      chosenQuantity,
      // nameItem, NONEED
      // description,NONEED
      // image  NONEED
    }
    console.log("l'objet \"article\" est defini");

    let productLocalStorage = JSON.parse(localStorage.getItem("cart")) ||[];
    let found = false;
    for (let product of productLocalStorage){
      // if ( id && SAMEID && meme couleur, modifier quantité + quantité à ajouter){
      // afficher l'info avec console.log()
       if (ID === productLocalStorage.ID && colors === productLocalStorage.chosenColor) {
        chosenQuantity = parseInt(chosenQuantity) + parseInt(productLoalStorage.chosenQuantity);
        found = true;
        break;
      }
      else { parseInt(chosenQuantity)}
      console.log(product);
    }
    console.log("toto")
    if(!found){
      let article = {
        idProduct,
        chosenColor,
        chosenQuantity,
        // imgProduit: data.imageUrl,
        // altImgProduit: data.altTxt
     }


    productLocalStorage.push(article);
    }
    localStorage.setItem("cart", JSON.stringify(productLocalStorage));
  };

    // cart.localStorage.setItem.parse(cart);
    //Récupérer Price, Couleur, et quantité.
    // les stocker dans le localstorage.
    // localStorage.setItem("cart"), JSON.parse(cart);
  });

