function addToCart(product, quantity){
    let productsInCart = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
    if(productsInCart.map(prod => prod.id !== product.id)){
      productsInCart.push({...product, quantity: quantity || 1});
    }
    const uniqProds = Array.from(new Set(productsInCart.map(el => el.id))).map(id => {
      return {
        id: id,
        title: productsInCart.find(product => product.id === id).title,
        price: productsInCart.find(product => product.id === id).price,
        discont_price: productsInCart.find(product => product.id === id).discont_price,
        quantity: productsInCart.find(product => product.id === id).quantity,
        description: productsInCart.find(product => product.id === id).description,
        image: productsInCart.find(product => product.id === id).image
      }
    })
    localStorage.setItem("productsInCart", JSON.stringify(uniqProds));

    // let counter = JSON.parse(localStorage.getItem("productsInCart")).length
    // return counter
}
export default addToCart