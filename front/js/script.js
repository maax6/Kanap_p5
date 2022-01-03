// Récupérer les produits
const url = 'http://localhost:3000/api/products';

function getProducts(){

    fetch(url).then((data) => 
    data.json()
    .then((data) => {
      
        
        for(let i = 0; i < data.length; i++){
            let name = data[i].name;
            let imageUrl = data[i].imageUrl;
            let price = data[i].price;
            let id =  data[i]._id 

            console.log(data[i])
            
            let items = `<a href="./product.html?id=${id}">
            <article>
              <img src="${imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${name}</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            <p>Prix : ${price}€</p>
              </article>
          </a>`;

          document.querySelector('.items').innerHTML += items;

        }


    })
    )

}

getProducts();











