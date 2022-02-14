const cartArray = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
let totalItem = 0;
console.log(cartArray) //(4) [{…}, {…}, {…}, {…}] localstorage
let mapID = (cartArray.map(item => item.ID));
let mapColors = (cartArray.map(item => item.chosenColor));
let mapQty = (cartArray.map(item => item.chosenQuantity));
const productsApi = "http://localhost:3000/api/products/";
const promiseProduct =  fetch(productsApi);
promiseProduct
.then((response) => response.json()
  .then(products => {
    console.log(products)
    for (let i = 0; i < cartArray.length; i++) {
        let product = false;
        for (let j = 0; j < products.length; j++) {
            if (cartArray[i] !== undefined &&  products[j]._id !== undefined) {
                if (products[j]._id == cartArray[i].ID) {
                  product = products[j];
                  console.log(product)
                  /**from API */
                  let name = product.name;
                  let imageUrl = product.imageUrl;
                  let price = product.price;
                  let id = product._id;
                  // let description = product.description;// NONEED
                  let altTxt = product.altTxt; 
                  /**from localstorage */
                  let Qty = cartArray[i].chosenQuantity
                  let color = cartArray[i].chosenColor
                  /**display HTML */
                  let displayItem =  
                  `<article class="cart__item" data-id="${id}" data-color="${color}">
                    <div class="cart__item__img">
                      <img src="${imageUrl}">
                    </div>
                    <div class="cart__item__content">
                      <div class="cart__item__content__description">
                        <h2>${name}</h2>
                        <p>Vert</p>
                        <p>${price}</p>
                      </div>
                      <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                          <p>Qté : ${Qty}</p>
                          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Qty}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                           <p class="deleteItem">Supprimer</p>
                      </div>
                     </div>
                    </div>
                  </article>`;
                  console.log(displayItem)
                    document.querySelector('#cart__items').innerHtml += displayItem;
              }
            }
          }
        }
      })
      ///////////////////////////////////////////
      
      )
// .then ((data )=> { data
//   .forEach(function (item) {
//     let idProduct = item[i]._id;
//     let name = item[i].name;  
//     let imageUrl = item[i].imageUrl;
//     let price = item[i].price;
//     let description = item[i].description;
//     let altTxt = item[i].altTxt; 
//     let colors = item[i].colors;
//     for (let i = 0 ; i < cartArray.lenght; i++){
//       if( idProduct == cartArray[i].ID){
//         
//         }}})
//       })

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
                      
                      
                      //  
                      
                      = item._id
                      // console.log(idProduct) i < cartArray.length; i++) { 
                        // console.log(idProduct) i < cartArray.name++) { 
                          // let  = ititem
                          console.log(cartArray[i].ID)
                          
                          
                          const colorProduct = cartArray.chosenColor
                          console.log()
                          
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
                                
                                
                                
                                
                                
                                
// console.log(mapQty[0])
// console.log("type of mapQty0 : " + typeof(mapQty[0]))
// console.log(mapQty[1])
// console.log("type of mapQty1 : " + typeof(mapQty[1]))
// console.log(mapQty[2])
// console.log("type of mapQty2 : " + typeof(mapQty[2]))
// console.log(mapQty[3])
// console.log("type of mapQty3 : " + typeof(mapQty[3]))
// console.log(mapColors)
// console.log(mapID)



// console.log(cartArray[2].ID)//055743915a544fde83cfdfc904935ee7
// console.log(cartArray[1].chosenColor)//Black/Red
// console.log(cartArray[3].chosenQuantity)//6
// console.log(typeof(cartArray[3].chosenQuantity))//string ! ça ne me plait pas super
// console.log(quantity) //6
// console.log(typeof(quantity))// string
// console.log(typeof(cartArray)) //object
// console.log(cartArray[0])//{ID: '415b7cacb65d43b2b5c1ff70f3393ad1', chosenColor: 'Black/Yellow', chosenQuantity: '1'}



// console.log(color);
// console.log(name);
// console.log(altTxt);
// console.log(product);
// console.log(product.name);
// console.log(imageUrl);
// console.log(price);
// console.log(id);
// console.log(description);
// console.log(Qty)