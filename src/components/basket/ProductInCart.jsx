import classes from "./Basket.module.css";
import { useState } from "react";
import deleteIcon from "../../assets/images/basket/x.svg"
import addToCart from "../../utils/addToCart";
import deleteFromCart from "../../utils/deleteFromCart";
function ProductInCart(productInCart){
    const url = 'http://localhost:3333'
    const [quantity, setQantity] = useState(1)

    const minusHandler = () => {
      if(quantity > 1)setQantity(quantity - 1)
    }

    const plusHandler = () => {
      setQantity(quantity + 1)
    }
const deletHandler = (id) => {
    deleteFromCart(id)
}
    return(
        <div className={classes.productInCart}>
            <img src={url+productInCart.image} className={classes.productInCartImg} alt="product-image"/>
            <div className={classes.productInfo}>
                <h5>{productInCart.title}</h5>
                <div className={classes.productProperties}>
                    <div className={classes.productCounter}>
                        <button onClick={() => minusHandler()}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => plusHandler()}>+</button>
                    </div>
                    <div className={classes.priceBlock}>
                        <p className={classes.discountPrice}>${(productInCart.discont_price * quantity || productInCart.price * quantity).toFixed(2)}</p>
                        {productInCart.discont_price ? <p className={classes.price}>${(productInCart.price * quantity).toFixed(2)}</p> : null}
                    </div>
                </div>
            </div>
            <img className={classes.deleteIcon} src={deleteIcon} alt="X" onClick={() => deletHandler(productInCart.id)}/>
        </div>
    )
}
export default ProductInCart