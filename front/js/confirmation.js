
    const idOrder = new URL(window.location.href).searchParams.get('orderId'); 

const displayOrderId =()=>{
    const spanId = document.getElementById("orderId")

    spanId.innerHTML = idOrder
}
displayOrderId();