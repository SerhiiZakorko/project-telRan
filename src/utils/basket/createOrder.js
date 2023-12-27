
let order = {}

function createOrder({name, phone, email}){
    const orderId = Math.floor(Math.random()*999)
       const customer = {... {name, phone, email}}
       const products = JSON.parse(localStorage.getItem("productsInCart"))
       order = {... orderId, customer, products}
       return order
}
export {createOrder, order}