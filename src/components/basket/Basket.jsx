import { Link, useNavigate } from "react-router-dom"
import classes from "./Basket.module.css"
function Basket(){
    const navigate = useNavigate();
    return(
        <main className={classes.basketMain}>
            <div className={classes.titleWrapper}>
                <h4>Shopping cart</h4>
                <div className={classes.grayLine}></div>
                <button onClick={() => navigate(-1)}>Back to the store</button> 
            </div>
            <div className={classes.basket}>
                <h5 className={classes.basketMessage}>Looks like you have no items in your basket currently.</h5>
                <button onClick={() => {navigate("/products")}}>Continue Shopping</button>
            </div>
        </main>
    )
}
export default Basket