const cartArray = JSON.parse(localStorage.getItem("cart"));
console.log(cartArray)
console.log(typeof(cartArray))
let totalPrice = 0;
let totalItem = 0;
console.log()
/***
 const of l'ID, la couleur, la quantité. 
***/
const productsApi = "http://localhost:3000/api/products/";
const promiseApi =  fetch(productsApi);
console.log(promiseApi)
console.log(typeof(promiseApi))
promiseApi
.then(response => response.json())
.then (console.log)
  /**const of  */

;
 
//   .then((products) => {
//     for (let i = 0; i < localStorage.getItem("cartArray").length; i++) {
//       let product = false;
//       console.log("product = false")
//       for (let j = 0; j < products.length; j++) {
//         if (localStorage.getItem("cartArray")[i] !== undefined &&  products[j]._id !== undefined) {
//           if (products[j]._id == localStorage.getItem("cartArray")[i].ID) {
//             console.log("cartArray isn't undefined")
//             console.log("Par ici!")
//             product = products[j];
//             console.log(product);
//           }
//         }
//       }
//     }
//   });

  // while (cartArray.length > 0 && ID === data.ID){
  //  incrémenter 
  // }
  // for (let article of cartArray 

  
  // For, chaque produit du panier, afficher le html, avec les bonnes infos, piochées dans l'api
  //https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript/6279104-utilisez-la-bonne-boucle-pour-repeter-les-taches-for-while#/id/r-7179201
  
  /*
  function getProducts() {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
 
  console.log(cartArray)

    .products.then(async (response) =>{

      try{
         let productData = await response.json()
         for (const product of cartArray){
        for ( let i = 0; i < productData[i].length; i++){
console.log(productData[i])
        }
         }
      }
      catch{

      }
    })
  

   
    for (let i = 0; i < cartArray.length; i++) { 
      // let idProduct = data[i]._id
      console.log(cartArray[i].ID)
      
      // let name = data[i].name;  
      // let imageUrl = data[i].imageUrl;
      // let price = data[i].price;
      // let description = data[i].description;
      // let altTxt = data[i].altTxt; 
      const colorProduct = cartArray.chosenColor
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
//   if(cartArray == null){
//     return alert("Votre panier est vide");
//   }
//     else {
//       console.log(JSON.parse(cartArray));
//       return JSON.parse(cartArray);
//   };
// }
// getCart();*/
