// Cible l'uuid dans l'URL de la page et l'affiche dans orderID
const idOrder = new URL(window.location.href).searchParams.get('orderId'); 

const displayOrderId =()=>{
    const spanId = document.getElementById("orderId")
    // console.log(idOrder)
    spanId.innerHTML = idOrder
}
displayOrderId();
