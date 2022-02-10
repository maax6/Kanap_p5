const cart = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
let totalItem = 0;
const products = "http://localhost:3000/api/products/";

fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((products) => {
    for (let i = 0; i < localStorage.getItem("cart").length; i++) {
      let product = false;
      for (let j = 0; j < products.length; j++) {
        if (       localStorage.getItem("cart")[i] !== undefined &&  products[j]._id !== undefined
        ) {
     
          if (products[j]._id == localStorage.getItem("cart")[i].productId) {
            product = products[j];
            console.log(product);
          }
        }
      }
    }
  });
/*

function getProducts() {
  const cart = JSON.parse(localStorage.getItem("cart"));
 
  console.log(cart)

    products.then(async (response) =>{

      try{
         let productData = await response.json()
         for (const product of cart){
        for ( let i = 0; i < productData[i].length; i++){
console.log(productData[i])
        }
         }
      }
      catch{

      }
    })
  

   
    for (let i = 0; i < cart.length; i++) { 
      // let idProduct = data[i]._id
      console.log(cart[i].ID)
      
      // let name = data[i].name;  
      // let imageUrl = data[i].imageUrl;
      // let price = data[i].price;
      // let description = data[i].description;
      // let altTxt = data[i].altTxt; 
      const colorProduct = cart.chosenColor
      console.log()
      // const imgProduct = 
      // const altDescProduct = 
      // const nameProduct =
      // const priceProduct =
      // const quantityProduct = 
      //afficher les produits via innerHTML
      let items = `<article class="cart__item" data-id=${idProduct} data-color=${colorProduct}>
      <div class="cart__item__img">
      <img src=${imgProduct} alt=${altDescProduct}>
      </div>
      <div class="cart__item__content">
      <div class="cart__item__content__description">
      <h2>${nameProduct}</h2>
      <p>${colorProduct}</p>
      <p>${priceProduct}€</p>
      </div>
      <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
      <p>Qté : ${quantityProduct}</p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
      </div>
      <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
      </div>
      </div>
      </div>
      </article>`;
      document.getElementById("cart__item").innerHtml += items;
    }
  }
  ;

getProducts();


// }









// function getCart() {
//   if(cart == null){
//     return alert("Votre panier est vide");
//   }
//     else {
//       console.log(JSON.parse(cart));
//       return JSON.parse(cart);
//   };
// }
// getCart();*/
