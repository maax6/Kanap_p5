const cartArray = JSON.parse(localStorage.getItem("cart"));
let totalPrice = [];
let totalItem = [];
//Si le local storage est null ou vide, indique que le panier est vide.
//Fetch l'API pour chaque élément du localstorage par rapport à son ID 
//Si l'ID des objets de cartArray correspond à l'ID des objets de l'API.
// Récupère les informations correspondantes integre le html,et incrémente pour chaque element de cartARRAY
const productsApi = "http://localhost:3000/api/products/";
const promiseProduct = fetch(productsApi);
promiseProduct.then((response) =>
  response.json().then((products) => {
    // console.log(products);
    if (cartArray == null || cartArray.length == []) {
      document.querySelector(".cart").style.display = "none";
      document.querySelector("h1").innerText = "Votre panier est vide";
      return;
    }
    document.querySelector(".cart").style.display = "block";
    for (let i = 0; i < cartArray.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (cartArray[i] !== undefined && products[j]._id !== undefined) {
          if (products[j]._id == cartArray[i].ID) {
            let product = products[j];
            /**from API */
            let name = product.name;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let id = product._id;
            let altTxt = product.altTxt;
            //from parsed localstorage 
            let Qty = cartArray[i].chosenQuantity;
            let color = cartArray[i].chosenColor;
            /**************/
            /*Display HTML*/
            /**************/
          
            let displayItem = `<article class="cart__item" data-id="${id}" data-color="${color}" data-qty ="${Qty}">
                                    <div class="cart__item__img">
                                      <img src="${imageUrl}" alt="${altTxt}">
                                    </div>
                                    <div class="cart__item__content">
                                      <div class="cart__item__content__description">
                                        <h2>${name}</h2>
                                        <p>${color}</p>
                                        <p class="price" data-price ="${price}" >${ price + "€"}</p>
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
    //Pour chaque bouton supprimer, cible l'objet article le plus proche et le supprime du DOM après confirmation (remove).
    //Cible l'index correspondant au produit dans le localStorage et le supprime également(splice).
    const btnDelete = document.querySelectorAll(".deleteItem");
    btnDelete.forEach((btn) => {
      const closeArticle = btn.closest("article");
      const id = closeArticle.dataset.id;
      const color = closeArticle.dataset.color;
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        // console.log(" ID => " + id + " Couleur => " + color);
        cartArray.forEach((couch) => {
          if (couch.chosenColor == color && couch.ID == id) {
            let index = cartArray.indexOf(couch); // récupération index du canapé dans le tableau cartArray
            if (confirm("Cet article sera supprimé de votre panier")) {
              closeArticle.remove(); 
              cartArray.splice(index, 1);
            }
          }
        });
        localStorage.setItem("cart", JSON.stringify(cartArray));
        window.location.reload();
      });
    });
    /******************/
    /*Modify Quantity**/
    /******************/

    //Pour chaque bouton itmeQuantity, cible l'article le plus proche, récupère l'ID et la couleur.
    // Lorsque la quatité est moodifiée ("change") la nouvelle valeur quantityUpdate remplace l'ancienne dans le LS 
    // Si la quantité déclarée est 0, supprime l'élement dans le LS, ciblé par son index
    const btnChangeQty = document.querySelectorAll(".itemQuantity");
    btnChangeQty.forEach((btn) => {
      const closeArticle = btn.closest("article");
      const id = closeArticle.dataset.id;
      // console.log(id)
      let quantityUpdate = "";
      const color = closeArticle.dataset.color;
      btn.addEventListener("change", (event) => {
        event.preventDefault();
        quantityUpdate = Number(btn.value);
        
        cartArray.forEach((couch) => {
          if (couch.chosenColor == color && couch.ID == id) {
            couch.chosenQuantity = quantityUpdate;
            if (couch.chosenQuantity == 0) {
              let index = cartArray.indexOf(couch);
              if (confirm("Cet article sera supprimé de votre panier")) {
                closeArticle.remove(); //supprimer le tag article
                cartArray.splice(index, 1); // on retire ce canapé du panier
              }
            }
          }
        });
        if (confirm("Êtes-vous sur de vouloir modifier la quantité")) {
          window.location.reload();
          localStorage.setItem("cart", JSON.stringify(cartArray));
        }
      });
    });
    /******************/
    /*Total  Quantity**/
    /******************/

    // Pour chaque élément du LS récupère la quantité (chosenQuantity), la pousse dans le tableau (totalItem).
    //Utilise la fonction reduce pour additionner les elements du tableau. ParseInt les transforme en nombres entiers.
    // Le resultat est affiché via innerText dans totalQuantity
    // Si le tableau est vide Remplace le titre principal (H1) par un message d'alerte
    function itemQuantity(cartArray) {
      for (let couch of cartArray) {
        let itemQuantity = couch.chosenQuantity;
        totalItem.push(itemQuantity);
        const reducer = (previousValue, currentValue) =>
          parseInt(previousValue) + parseInt(currentValue);
        const totalQuantity = totalItem.reduce(reducer);
        //  console.log(totalQuantity)
        document.getElementById("totalQuantity").innerText = totalQuantity;
      }
      // console.log(totalItem);
      if (totalItem.length === 0 ) {
        document.querySelector("h1").innerText = "Votre panier est vide";
        totalQuantity = "";
        document.getElementById("totalQuantity").innerText = totalItem;
      }
    }
    itemQuantity(cartArray);
    /****************/
    /*Display Price**/
    /****************/

    //Pour chaque balise "price" on récupère l'information quantité via dataset sur chaque article le plus proche.
    // On envoie chaque valeur dans le tableau totalPrice, puis on transforme chaque valeur en nombre entier
    //On additionne chaque valeur du tableau avec la précédente pour afficher le prix via textContent dans l'élément totalPrice
    let priceTag = document.querySelectorAll(".price");
    priceTag.forEach((price) => {
      const closeArticle = price.closest("article");
      const qtyValue = closeArticle.dataset.qty;
      const closePrice = price.closest(".price");
      const priceProduct = closePrice.dataset.price;
      let totals = priceProduct * qtyValue;
      console.log(totals);
      totalPrice.push(totals);
      const reducer = (previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue);
      let total = totalPrice.reduce(reducer);
      console.log(total);
      document.getElementById("totalPrice").textContent = total;
    });
    /**⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆/
       /⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆*/
  })
);
/****************/
/*Form handling**/
/****************/

// Déclaration des variables ciblant les messages d'erreur 
const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const addressErrorMsg = document.getElementById("addressErrorMsg");
const cityErrorMsg = document.getElementById("cityErrorMsg");
const emailErrorMsg = document.getElementById("emailErrorMsg");

const buttonValidate = document.getElementById("order");

const regexNameCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/  //Nom prenom et Ville;
const regexAddress =  /^[#.0-9a-zA-ZÀ-ÿ\s,-]{2,60}$/; 
const regexEmail = /^[^@\s]{2,30}@[^@\s]{2,30}\.[^@\s]{2,5}$/;

//La fonction sendForm prends en paramêtres, l'objet array du localStorage et l'array contact
// Tant que i est inferieur à la longeur de cartArray on incrémente les ID de chaque element du tableau cartArray dans le tableau products 
function sendForm(cartArray, contact) {
  let products = [];
  for (let i = 0; i < cartArray; i++) {
    let productId = cartArray.ID;
    products.push(productId);
  }

// On fait un requette l'API avec la methode post, la promesse renvoie vers la page de confirmation 
//avec un numéro UUid unique qui est passé en paramètre URL.
// Si la promesse echoue, renvoie un message d'erreur dans la console.
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contact, products }),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location = `confirmation.html?orderId=${data.orderId}`; // redirection vers page confirmation avec uuid en paramètre
      localStorage.clear();
    })
    .catch((error) =>
      console.log("il y a une erreur sur la page cart de type :" + error)
    );
}
/******************************/
/*Input Checking witch regex**/
/******************************/

//Au click on utilise la fonction verifyForm pour vérifier si chaque input du formulaire respecte sa regex associée.
//Si une erreur est rencontrée, elle retourne un message d'erreur.
//Si aucune erreur n'en rencontrée, elle utilise la fonction sendForm pour envoyer le contenu du local storage (cartArray) et l'objet contact à l'API.
buttonValidate.addEventListener("click", (event) => {
  event.preventDefault();

  function verifyForm(elementContact, elementError, elementRegex) {
    if (!elementRegex.test(elementContact)) {
      // console.log(elementContact);
      // console.log(elementError);
      elementError.innerText = "Format incorrect";
      return false;
    } else {
      elementError.innerText = "";
      return true;
    }
  }
  prenom = document.querySelector("#firstName").value;
  nom = document.querySelector("#lastName").value;
  adresse = document.querySelector("#address").value;
  ville = document.querySelector("#city").value;
  mail = document.querySelector("#email").value;
  verifyForm(prenom, firstNameErrorMsg, regexNameCity);
  verifyForm(nom, lastNameErrorMsg, regexNameCity);
  verifyForm(adresse, addressErrorMsg, regexAddress);
  verifyForm(ville, cityErrorMsg, regexNameCity);
  verifyForm(mail, emailErrorMsg, regexEmail);
  const contact = {
    firstName: prenom,
    lastName: nom,
    address: adresse,
    city: ville,
    email: mail,
  };
  if (
    cartArray.length >= 1 &&
    verifyForm(prenom, firstNameErrorMsg, regexNameCity) &&
    verifyForm(nom, lastNameErrorMsg, regexNameCity) &&
    verifyForm(adresse, addressErrorMsg, regexAddress) &&
    verifyForm(ville, cityErrorMsg, regexNameCity) &&
    verifyForm(mail, emailErrorMsg, regexEmail)
  ) {
    sendForm(cartArray, contact);
  }
});