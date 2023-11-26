import { postDiscount } from "../../../../store/slices/getDiscountSlice"

let discountReceiver = {}
function createDiscountReceiver(name, phone, email){
    const id = Math.floor(Math.random()*999)
    if(name !== '' && phone !== '' && email !== '' ){
       discountReceiver = {... {id, name, phone, email}}
       console.log(discountReceiver, "from main/create.js")
    //    postDiscount()
       return discountReceiver
    } else alert('All field are requared') 
}
export {createDiscountReceiver, discountReceiver}
