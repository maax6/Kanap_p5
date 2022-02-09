
const newUrl = new URL(window.location.href);// Récupérer l'id du produit que le visiteur consulte.
let ID = newUrl.searchParams.get('id');//isoler l'ID dans l'URL.
const urlProduct = `http://localhost:3000/api/products/${ID}`;// l'URL pour fetch s'apelle urlProduct.
//La fonction suivante va chercher les infos de l'item ciblé par ID sur l'API, les traduit en JSON et intègre le html nécéssaire.
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

//////////////////
//Gestion panier//
//////////////////
// Enregistrer le produit dans le localStorage sous la clé cart "cart.
document.getElementById('addToCart').addEventListener("click", (event)=>{
  event.preventDefault();
  let chosenColor = document. querySelector("#colors").value;
  let chosenQuantity = document.querySelector("#quantity").value;
  if (chosenQuantity > 0 || chosenQuantity <=100 ){
    let article = {
      ID,
      chosenColor,
      chosenQuantity
    }
    let productLocalStorage = JSON.parse(localStorage.getItem("cart")) ||[];
    let found = false;
    for (let product of productLocalStorage){
      if (ID === productLocalStorage.ID && chosenColor === productLocalStorage.chosenColor) {
        let chosenQuantity = parseInt(chosenQuantity) + parseInt(productLocalStorage.chosenQuantity);
        console.log("Test");
        found = true;
        
        break;
      }
      else {
        parseInt(chosenQuantity);
      }
    }
    if(!found){
      let article = {
        ID,
        chosenColor,
        chosenQuantity,
      }
      productLocalStorage.push(article);
    } 
    localStorage.setItem("Cart", JSON.stringify(productLocalStorage));
  } 
  else {
    window.alert("Veuillez modifer la quantitié")
  }
});

