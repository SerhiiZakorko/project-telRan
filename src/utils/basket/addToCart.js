function addToCart(product, quantity){
    let productsInCart = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
    if(productsInCart.map(prod => prod.id !== product.id)){
      productsInCart.push({...product, quantity: quantity || 1});
    }
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}
export default addToCart