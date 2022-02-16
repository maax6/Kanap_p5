/**************/
/*Fetch & HTML Display*/
/**************/

const cartArray = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
let totalItem = 0;
// console.log(cartArray) //(4) [{…}, {…}, {…}, {…}] Localstorage
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
                let altTxt = product.altTxt; 
                /**from localstorage */
                let Qty = cartArray[i].chosenQuantity
                let color = cartArray[i].chosenColor
                /**************/
                /*Display HTML*/
                /**************/
                let displayItem =  
                                  `<article class="cart__item" data-id="${id}" data-color="${color}">
                                    <div class="cart__item__img">
                                      <img src="${imageUrl}">
                                    </div>
                                    <div class="cart__item__content">
                                      <div class="cart__item__content__description">
                                        <h2>${name}</h2>
                                        <p>${color}</p>
                                        <p>${price + "€"}</p>
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
                // console.log(displayItem)
                document.querySelector('#cart__items').innerHTML += displayItem;
              }
            }
        }
    }
  })
)

/**********************/
/*Récupérer le panier*/
/**********************/

function getCart() {
  if(cartArray == null){
      return alert("Votre panier est vide");
    }
    else {
        console.log(JSON.parse(cartArray));
        return JSON.parse(cartArray);
    };
  }
getCart();

/***********************/
/*Modifier la quantité*/
/***********************/




















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