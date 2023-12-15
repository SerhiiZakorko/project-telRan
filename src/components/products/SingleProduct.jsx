import classes from "./SingleProduct.module.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import loadingIcon from "../../assets/images/loading_icon.svg"
import { useState } from "react";

function SingleProduct(){
  const url = 'http://localhost:3333'
    let singleProduct = useSelector((state) =>  state.product.product[0]);
    console.log(singleProduct)
    const [quantity, setQantity] = useState(1)
    const minusHandler = () => {
      if(quantity > 1)setQantity(quantity - 1)
    }
    const plusHandler = () => {
      setQantity(quantity + 1)
    }
    const discountValue = Math.floor(100 - (singleProduct.discont_price * 100 /singleProduct.price))
    return (
        <main>
          <div className={classes.navWrapper}>
            <Link className={classes.links} to="/">Main page</Link>
            <div className={classes.greyLine}></div>
            <Link className={classes.links} to="/categories">Categories</Link>
            <div className={classes.greyLine}></div>
            <Link className={classes.links} to={`/categories/${singleProduct.categoryId}`}>Название категории</Link>
            <div className={classes.greyLine}></div>
            <Link id={classes.currentLink}>{singleProduct.title}</Link>
          </div>
          <div className={classes.singleProductWrapper}>
            <img src={!singleProduct.id ? loadingIcon : url+singleProduct.image} alt="product_photo"/>
            <div className={classes.singleProductInfo}>
              <h4>{singleProduct.title}</h4>
              <div className={classes.priceBlock}>
                <p className={classes.discountPrice}>${singleProduct.discont_price || singleProduct.price}</p>
                {singleProduct.discont_price ? <p className={classes.price}>${singleProduct.price}</p> : null}
                {singleProduct.discont_price ? <p className={classes.discount}>-{discountValue}%</p> : null}
              </div>
              <div className={classes.basketSetupBar}>
                <div className={classes.quantityBlock}>
                  <button onClick={() => minusHandler()}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => plusHandler()}>+</button>
                </div>
                <button>Add to cart</button>
              </div>
              <h5>Description</h5>
              <p>{singleProduct.description}</p>
            </div>
          </div>
          
          
        </main>
    )
}
export default SingleProduct