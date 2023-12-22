import { useNavigate } from "react-router-dom";
import classes from "./Basket.module.css";
import ProductInCart from "./ProductInCart";
function Basket() {
  const navigate = useNavigate();
  const productsInCart = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
  
  return (
    <main className={classes.basketMain}>
      <div className={classes.titleWrapper}>
        <h4>Shopping cart</h4>
        <div className={classes.grayLine}></div>
        <button onClick={() => navigate(-1)}>Back to the store</button>
      </div>
      {productsInCart.length === 0 ? 
        <div className={classes.basketEmpty}>
          <h5 className={classes.basketMessage}>Looks like you have no items in your basket currently.</h5>
          <button onClick={() => navigate("/products")}>Continue Shopping</button>
        </div>
       : 
       <div className={classes.basket}>
            <div className={classes.productsPart}>
                {productsInCart.map(productInCart => {
                    return (
                        <ProductInCart key={productInCart.id} {...productInCart} />
                    )
                    }
                )}
            </div>
            <div className={classes.orderDetailsPart}>

            </div>
        </div>
      }
    </main>
  );
}
export default Basket;
