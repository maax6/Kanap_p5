// Récupérer l'id du produit que le visiteur visite
let newUrl = new URL(window.location.href);
// console.log(newUrl);
//isoler l'ID dans l'URL
let getId = newUrl.searchParams.get('id');
// console.log(getId);
//Le repas de fetch est servi ici
let urlProduct = `http://localhost:3000/api/products/${getId}`;
// console.log(urlProduct)

//La fonction suivante va chercher les infos de l'item ciblé par ID sur l'API, les traduit en JSON et intègre le html nécéssaire
function getProductDetails() {
  fetch(urlProduct)
  .then(response => response.json())
  .then(data => {
    
    let imageUrl = data.imageUrl ;
    let altTxt = data.altTxt ; 
    let name = data.name ; 
    let price = data.price ; 
    let description = data.description ; 
    let colors = data.colors;

    document.querySelector(".item__img").innerHTML += `<img src="${imageUrl}" alt="${altTxt}">`;
    document.querySelector("#title").innerHTML += name;
    document.querySelector("#price").innerHTML += price;
    document.querySelector("#description").innerHTML += description;
    
    
    for (i = 0; i < data.colors.length; i++){
      document.querySelector("select").innerHTML += `<option value="${i}">${data.colors[i]}</option>`;


      // let colorChoice = document.querySelector("select"); //Recupere le id select
      // let option = document.createElement("option"); // creer un element option pour chaque couleur
      // option.setAttribute("value", data.colors[i]); // ajoute les attributs provenant de data.colors
      // option.textContent = data.colors[i]; // ajoute le texte de la couleur concernée
      // colorChoice.appendChild(option); // ajoute la balise option dans PlaceColors
    
    }
    
    

    // console.log(data)
    // console.log("Adresse de la photo 🚥🚥 "  + imageUrl)
    // console.log("Description du produit 🚥🚥 "  + description)
    // console.log("Texte alternatif à l'image 🚥🚥 "  + altTxt)
    // console.log("NOM DU KANAP  🚥🚥  "  + name)
    // console.log("Prix 🚥🚥 "  + price +" €")
    // console.log("Les couleurs disponibles sont  🚥🚥  "+colors)
    // console.log("ID du produit 🚥🚥  " + id);
    // console.log(imgInfos)
    // console.log(itemName)
  })
  
} ;
getProductDetails()
