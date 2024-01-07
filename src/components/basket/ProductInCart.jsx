import classes from "./Basket.module.css";
import { useState } from "react";
import deleteIcon from "../../assets/images/basket/x.svg";
import deleteFromCart from "../../utils/basket/deleteFromCart";
function ProductInCart(productInCart, prodCount, setProdCount) {
  const url = "http://localhost:3333";

  const [quantity, setQantity] = useState(productInCart.quantity);
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));

  const minusHandler = (id) => {
    if (quantity > 1) {productsInCart.map((product) => product.id === id ? (product.quantity -= 1) : null);
      localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
      setQantity(quantity - 1);
    }
  };

  const plusHandler = (id) => {productsInCart.map((product) => product.id === id ? (product.quantity += 1) : null);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    setQantity(quantity + 1);
  };

  const deletHandler = (id) => {
    deleteFromCart(id);
    // prodCount = setProdCount(prodCount - 1)
  };

  return (
    <div className={classes.productInCart}>
      <img src={url + productInCart.image} className={classes.productInCartImg} alt="product-image"/>
      <div className={classes.productInfo}>
        <h5>{productInCart.title}</h5>
        <div className={classes.productProperties}>
          <div className={classes.productCounter}>
            <button onClick={() => minusHandler(productInCart.id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => plusHandler(productInCart.id)}>+</button>
          </div>
          <div className={classes.priceBlock}>
            <p className={classes.discountPrice}>${(productInCart.discont_price * quantity || productInCart.price * quantity).toFixed(2)}
            </p>
            {productInCart.discont_price ? (<p className={classes.price}>${(productInCart.price * quantity).toFixed(2)}</p>) 
            : null}
          </div>
        </div>
      </div>
      <img className={classes.deleteIcon} src={deleteIcon} alt="X" onClick={() => deletHandler(productInCart.id)}/>
    </div>
  );
}
export default ProductInCart;
