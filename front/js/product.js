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
      // console.log(data)

      let colors = data.colors; 
      console.log("Les couleurs disponibles sont  🚥🚥  "+colors)

      let id = data._id;
      console.log("ID du produit 🚥🚥  " + id);
      
      let name = data.name ; 
      console.log("NOM DU KANAP  🚥🚥  "  + name)
      
      let price = data.price ; 
      console.log("prix 🚥🚥 "  + price +" €")
      
      let imageUrl = data.imageUrl ; 
      console.log("Adresse de la photo 🚥🚥 "  + imageUrl)
      
      let description = data.description ; 
      console.log("Description du produit 🚥🚥 "  + description)
     
      let altTxt = data.altTxt ; 
      console.log("Texte alternatif à l'image 🚥🚥 "  + altTxt)

    

    })

} ;
getProductDetails()

console.log();







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
