//Afficher les produits
const url = 'http://localhost:3000/api/products/';

// http://localhost.../id?=126440
const getId = new URL(window.location.href);
const id = getId.searchParams.get('id');




// Récupérer l'id du produit que le visiteur visite
// const id = ;

// Récupérer le produit en question  Fonction ( fetch )
// http://localhost:3000/api/products/ID



function productId(){

    fetch(url + id).then((data) =>
    data.json()
    .then((data) => {

        console.log(data)
     }
    ))

     
}
productDetail();

//Recupérer la couleur et l'ajouter via js 