// Récupérer l'id du produit que le visiteur visite
const newUrl = new URL(window.location.href);
//isoler l'ID dans l'URL
let ID = newUrl.searchParams.get('id');
// l'URL pour fetch s'apelle urlPRoduct
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
    let price = document.querySelector("#price").value;
    let chosenColor = document. querySelector("#colors").value;
    let chosenQuantity = document.querySelector("#quantity").value;
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let image = document.querySelector(".item__img").value;
    if (chosenQuantity > 0 || chosenQuantity <=100 ){
      let article = {
        ID,
        chosenColor,
        chosenQuantity,
        name,
        description,
        image
        
    }
    let productLocalStorage = JSON.parse(localStorage.getItem("cart")) ||[];
    let found = false;
    for (let product of productLocalStorage){
      
      // if ( id && SAMEID && meme couleur, modifier quantité + quantité à ajouter){
      // afficher l'info avec console.log()
      if (ID === productLocalStorage.ID && colors === productLocalStorage.ID colorsOption) {
        chosenQuantity = parseInt(chosenQuantity) + parseInt(productLoalStorage.quantity);
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
       // nomProduit: data.name,
       // descriptionProduit: data.description,
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

