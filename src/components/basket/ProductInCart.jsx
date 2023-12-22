import classes from "./Basket.module.css";
import { useState } from "react";
import deleteIcon from "../../assets/images/basket/x.svg"
function ProductInCart(productInCart){
    const url = 'http://localhost:3333'
    const [quantity, setQantity] = useState(1)

    const minusHandler = () => {
      if(quantity > 1)setQantity(quantity - 1)
    }

    const plusHandler = () => {
      setQantity(quantity + 1)
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
                        <p className={classes.discountPrice}>${productInCart.discont_price || productInCart.price}</p>
                        {productInCart.discont_price ? <p className={classes.price}>${productInCart.price}</p> : null}
                    </div>
                </div>
            </div>
            <img className={classes.deleteIcon} src={deleteIcon} alt="X"/>
        </div>
    )
}
export default ProductInCart