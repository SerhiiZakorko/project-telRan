import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { nameInputValidation, phoneInputValidation, emailInputValidation } from "../../utils/validations";
import classes from "./Basket.module.css";
import ProductInCart from "./ProductInCart";

function Basket() {
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));;
  }, []);

  const productsInCart = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
    
  let totalPrice = productsInCart.reduce((total, prod) => {
    return total + (prod.discont_price || prod.price);
  }, 0).toFixed(2);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  let prodCount = productsInCart.length;

  return (
    <main className={classes.basketMain}>
      <div className={classes.titleWrapper}>
        <h4>Shopping cart</h4>
        <div className={classes.grayLine}></div>
        <button onClick={() => navigate(-1)}>Back to the store</button>
      </div>
      {productsInCart.length === 0 ? (
        <div className={classes.basketEmpty}>
          <h5 className={classes.basketMessage}>Looks like you have no items in your basket currently.</h5>
          <button onClick={() => navigate("/products")}>Continue Shopping</button>
        </div>
      ) : (
        <div className={classes.basket}>
          <div className={classes.productsPart}>
            {productsInCart.map((productInCart) => {
              return (
                <ProductInCart key={productInCart.id} {...productInCart}/>
              );
            })}
          </div>
          <div className={classes.orderDetailsPart}>
            <h5>Order details</h5>
            <p>{prodCount} {prodCount === 1 ? "item" : "items"}</p>
            <div className={classes.totalCost}>
              <p>Total</p>
              <p id={classes.totalPrice}>${totalPrice}</p>
            </div>
            <form onSubmit={handleSubmit()} className={classes.formWrapper}>
              <input type="text" placeholder="Name"
                {...register("name", nameInputValidation)}
              />
              {errors.name && (<p style={{ color: "#02393e", fontSize: "16px", marginTop: "5px" }}>{errors.name.message}</p>)}
              <input type="text" placeholder="Phone Number" {...register("phone", phoneInputValidation)}/>
              {errors.phone && (<p style={{ color: "#02393e", fontSize: "16px", marginTop: "5px" }}>{errors.phone.message}</p>)}
              <input type="text" placeholder="Email"
                {...register("email", emailInputValidation)}
              />
              {errors.email && (<p style={{ color: "#02393e", fontSize: "16px", marginTop: "5px" }}>{errors.email.message}</p>)}
              <button type="submit">Order</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
export default Basket;
