                                  /**********************/
                                  /*Fetch & HTML Display*/
                                  /**********************/

const cartArray = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
let totalItem = 0;

// console.log(cartArray) //(4) [{…}, {…}, {…}, {…}] Localstorage
let mapID = cartArray.map((item) => item.ID);
let mapColors = cartArray.map((item) => item.chosenColor);
let mapQty = cartArray.map((item) => item.chosenQuantity);
const productsApi = "http://localhost:3000/api/products/";
const promiseProduct = fetch(productsApi);
promiseProduct.then((response) =>
  response.json().then((products) => {
    // console.log(products);
    for (let i = 0; i < cartArray.length; i++) {
      // let product = false;
      for (let j = 0; j < products.length; j++) {
        if (cartArray[i] !== undefined && products[j]._id !== undefined) {
          if (products[j]._id == cartArray[i].ID) {
            let product = products[j];
            // console.log(product)
            /**from API */
            let name = product.name;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let id = product._id;
            let altTxt = product.altTxt;
            /**from localstorage */
            let Qty = cartArray[i].chosenQuantity;
            let color = cartArray[i].chosenColor;
                /**************/
                /*Display HTML*/
                /**************/
            let displayItem = `<article class="cart__item" data-id="${id}" data-color="${color}" id="${
              cartArray[i].ID + "-" + cartArray[i].chosenColor
            }">
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
                                            <p class="deleteItem" id=${
                                              cartArray[i].ID +
                                              "-" +
                                              cartArray[i].chosenColor
                                            } >Supprimer</p>
                                        </div>
                                      </div>
                                    </div>
                                  </article>`;

            document.querySelector("#cart__items").innerHTML += displayItem;
          }
        }
      }
    }
            /*************/
            /*Delete item*/
            /*************/

    const btnDelete = document.querySelectorAll(".deleteItem");
    btnDelete.forEach((btn) => {

      const closeArticle = btn.closest("article");
      const id = closeArticle.dataset.id;
      const color = closeArticle.dataset.color;

      btn.addEventListener("click", (event) => {
        console.log(id + " en couleur => " + color);
        event.preventDefault();

        cartArray.forEach((couch) => {
          if (couch.chosenColor == color && couch.ID == id) {
            let index = cartArray.indexOf(couch); // récupération index du canapé dans le tableau cartArray
            //console.log(index);//vérification de l'index
            if (confirm("Cet article sera supprimé de votre panier")) {
              closeArticle.remove();//supprimer le tag article
              cartArray.splice(index, 1 ); // on retire ce canapé du panier
              ;
             }
          }
        });
        localStorage.setItem("cart", JSON.stringify(cartArray));  
      });
    });
        const quantitySelected = document.querySelectorAll("input.itemQuantity");
        
        console.log(quantitySelected);


    /******************/
    /*Modify Quantity**/
    /******************/

  
    
    
    
    /**⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆/
    /FAUT LES METTRE ICI/
    /⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆*/
  })
);




/****************/
/*Display Price**/
/*********/
/*à placer dans la bonne fonction */

// let prices = document.querySelectorAll(' .itemQuantity');
// console.log(price.value);

//Cibler toutes les values des input itemQuantity

//Mettre les valeurs dans un tableau

//reduce le tableau

// .innerHTML += reducedPrice