//Afficher les produits

// Récupérer l'id du produit que le visiteur visite
let newUrl = new URL(window.location.href);
console.log(newUrl);
//isoler l'ID dans l'URL
let getId = newUrl.searchParams.get('id');
console.log(getId);

let urlProduct = `http://localhost:3000/api/products/${getId}`;
console.log(urlProduct)


function getProductDetails() {
    fetch(urlProduct)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })

    } ;

//     .then(function(res) {
//           let name = res.name
//       res.json()
//         .then((data) => {
// console.log();
// })})}






// Récupérer le produit en question  Fonction ( fetch )
// const products = await fetch(`http://localhost:3000/api/products/${getId}`)
//http://localhost:3000/api/products/ID


// function productId(){

//     fetch(url + id).then((data) =>
//     data.json()
//     .then((data) => {
//         console.log(data)
//      }
//     ))

     
// }
// productId()