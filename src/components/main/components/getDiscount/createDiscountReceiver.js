
let discountReceiver = {}
function createDiscountReceiver({name, phone, email}){
    const id = Math.floor(Math.random()*999)
       discountReceiver = {... {id, name, phone, email}}
       console.log(discountReceiver, "from main/create.js")
       return discountReceiver
}
export {createDiscountReceiver, discountReceiver}
