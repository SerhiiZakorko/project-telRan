import classes from "./SingleProduct.module.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loadingIcon from "../../assets/images/loading_icon.svg"
import { useState } from "react";
import { fetchProductsOfCategory } from "../../store/slices/productsByCategoriesSlice";

function SingleProduct(){
  const url = 'http://localhost:3333'
  const dispatch = useDispatch()
  function goToCategoryProducts() {
    dispatch(fetchProductsOfCategory({id: singleProduct.categoryId}))
  }

    let singleProduct = useSelector((state) =>  state.product.product[0]);
    const [quantity, setQantity] = useState(1)
    const minusHandler = () => {
      if(quantity > 1)setQantity(quantity - 1)
    }
    const plusHandler = () => {
      setQantity(quantity + 1)
    }
    const discountValue = Math.floor(100 - (singleProduct.discont_price * 100 /singleProduct.price))
    let categoryTitle = ''
    switch (singleProduct.categoryId) {
      case 1:
        categoryTitle = "Annuals"
        break
      case 2:
         categoryTitle = "Nursery"
         break
      case 3:
       categoryTitle = "Garden Art"
       break
      case 4:
        categoryTitle = "Plant Care"
        break
      case 5:
        categoryTitle = "Seasonal"
        break
      default:
        categoryTitle = "Loading...";
    }
    return (
        <main className={classes.singleProductMain}>
          <div className={classes.navWrapper}>
            <Link className={classes.links} to="/">Main page</Link>
            <div className={classes.greyLine}></div>
            <Link className={classes.links} to="/categories">Categories</Link>
            <div className={classes.greyLine}></div>
            <Link className={classes.links} to={`/categories/${singleProduct.categoryId}`} onClick={() => goToCategoryProducts()} > {categoryTitle} </Link>
            <div className={classes.greyLine}></div>
            <Link id={classes.currentLink}>{singleProduct.title}</Link>
          </div>
          <div className={classes.singleProductWrapper}>
            <img className={classes.singleProductImage} src={!singleProduct.id ? loadingIcon : url+singleProduct.image} alt="product_photo"/>
            <div className={classes.singleProductInfo}>
              <h4 className={classes.singleProductTitle}>{singleProduct.title}</h4>
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
                <button className={classes.toCartBtn}>Add to cart</button>
              </div>
              <h5 className={classes.descr}>Description</h5>
              <p className={classes.singleProductDescription}>{singleProduct.description}</p>
            </div>
          </div>
          
          
        </main>
    )
}
export default SingleProduct