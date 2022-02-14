const cartArray = JSON.parse(localStorage.getItem("cart"));

let totalPrice = 0;
let totalItem = 0;


console.log(cartArray) //(4) [{…}, {…}, {…}, {…}] localstorage

mapID = (cartArray.map(item => item.ID));
mapColor = (cartArray.map(item => item.chosenColor));
mapQty = (cartArray.map(item => item.chosenQuantity));
// console.log(mapQty)
// console.log(mapColor)
// console.log(mapID)


const productsApi = "http://localhost:3000/api/products/";
const promiseProduct =  fetch(productsApi);
promiseProduct
.then((response) => response.json()
  .then(products => {
    for (let i = 0; i < cartArray.length; i++) {
        let product = false;
        for (let j = 0; j < products.length; j++) {
            if (cartArray[i] !== undefined &&  products[j]._id !== undefined) {
                if (products[j]._id == cartArray[i].ID) {
                    product = products[j];
                    console.log(product);
                    let name = product.name;
                    let imageUrl = product.imageUrl;
                    let price = product.price;
                    let id = product._id;
                    let description = product.description;
                    let altTxt = product.altTxt; 
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
//         let displayItem =  `<article class="cart__item" data-id="${idProduct}" data-color="${colorProduct}">
//         <div class="cart__item__img">
//           <img src="${imageUrl}">
//         </div>
//         <div class="cart__item__content">
//         <div class="cart__item__content__description">
//         <h2>${name}</h2>
//         <p>Vert</p>
//         <p>${price}</p>
//         </div>
//         <div class="cart__item__content__settings">
//         <div class="cart__item__content__settings__quantity">
//         <p>Qté : </p>
//         <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//         </div>
//         <div class="cart__item__content__settings__delete">
//         <p class="deleteItem">Supprimer</p>
//         </div>
//         </div>
//         </div>
//         </article>`
//         for(color in colors){
//           let colorProduct = cartArray[color].chosenColor}
//           console.log(color)
//           document.querrySelector("#cart__item").innerHtml += displayItem;
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
                                
                                
                                
                                
                                
                                
                                
                            
                                // console.log(cartArray[0])//{ID: '415b7cacb65d43b2b5c1ff70f3393ad1', chosenColor: 'Black/Yellow', chosenQuantity: '1'}
                                // console.log(cartArray[2].ID)//055743915a544fde83cfdfc904935ee7
                                // console.log(cartArray[1].chosenColor)//Black/Red
                                // console.log(cartArray[3].chosenQuantity)//6
                                // console.log(typeof(cartArray[3].chosenQuantity))//string ! ça ne me plait pas super
                                // console.log(quantity) //6
                                // console.log(typeof(quantity))// string
                                // console.log(typeof(cartArray)) //object
