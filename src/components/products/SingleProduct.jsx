import classes from "./SingleProduct.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchProductsOfCategory } from "../../store/slices/productsByCategoriesSlice";
import { addToCart } from "../../store/slices/basketSlice";
import { changeQuantity } from "../../store/slices/basketSlice";
import loadingImg from "../../assets/images/main/loading_icon.svg"

function SingleProduct() {
  const url = "http://localhost:3333";
  let [marker, setMarker] = useState(false)
  const dispatch = useDispatch();
  function goToCategoryProducts() {
    dispatch(fetchProductsOfCategory({ id: singleProduct.categoryId }));
  }
  const addHandler = (product, quantity) => {
    if(status === "fulfilled"){ 
    dispatch(addToCart(product, quantity));
    setMarker(true)}
  };
  let singleProduct = useSelector((state) => state.product.product[0]);
  let status = useSelector((state) => state.product.status);
  const [quantity, setQantity] = useState(1);
  const minusHandler = () => {
    if (quantity > 1) {
      setQantity(quantity - 1);
      dispatch(changeQuantity(quantity - 1));
    }
  };
  const plusHandler = () => {
    setQantity(quantity + 1);
    dispatch(changeQuantity(quantity + 1));
  };
  const discountValue = Math.floor(
    100 - (singleProduct.discont_price * 100) / singleProduct.price
  );
  let categoryTitle = "";
  switch (singleProduct.categoryId) {
    case 1:
      categoryTitle = "Annuals";
      break;
    case 2:
      categoryTitle = "Nursery";
      break;
    case 3:
      categoryTitle = "Garden Art";
      break;
    case 4:
      categoryTitle = "Plant Care";
      break;
    case 5:
      categoryTitle = "Seasonal";
      break;
    default:
      categoryTitle = "Loading...";
  }
  return (
    <main className={classes.singleProductMain}>
      <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">
          Main page
        </Link>
        <div className={classes.greyLine}></div>
        <Link className={classes.links} to="/categories">
          Categories
        </Link>
        <div className={classes.greyLine}></div>
        <Link
          className={classes.links}
          to={`/categories/${singleProduct.categoryId}`}
          onClick={() => goToCategoryProducts()}
        >
          {" "}
          {categoryTitle}{" "}
        </Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink}>{singleProduct.title}</Link>
      </div>
      <h4 className={classes.singleProductTitleMobile}>{singleProduct.title}</h4>
      <div className={classes.singleProductWrapper}>
        <img
          className={classes.singleProductImage}
          src={status === "fulfilled" ? url + singleProduct.image : loadingImg}
          alt="product_photo"
        />
        <div className={classes.singleProductInfo}>
          <h4 className={classes.singleProductTitle}>{singleProduct.title}</h4>
          <div className={classes.priceBlock}>
            <p className={classes.discountPrice}>
              $
              {singleProduct.discont_price * quantity ||
                singleProduct.price * quantity}
            </p>
            {singleProduct.discont_price ? (
              <p className={classes.price}>${singleProduct.price * quantity}</p>
            ) : null}
            {singleProduct.discont_price ? (
              <p className={classes.discount}>-{discountValue}%</p>
            ) : null}
          </div>
          <div className={classes.basketSetupBar}>
            <div className={classes.quantityBlock}>
              <button onClick={() => minusHandler()}>-</button>
              <p>{quantity}</p>
              <button onClick={() => plusHandler()}>+</button>
            </div>
            {!marker ? <button
              className={classes.toCartBtn}
              onClick={() => addHandler(singleProduct, quantity)}
            >
              Add to cart
            </button> : <p className={classes.addedMessage}>Added</p>}
          </div>
          <div className={classes.descriptionWrapperDesktop}>
          <h5 className={classes.descr}>Description</h5>
          <p className={classes.singleProductDescription}>
            {singleProduct.description}
          </p>
          </div>
        </div>
        <div className={classes.descriptionWrapperMobile}>
          <h5 className={classes.descr}>Description</h5>
          <p className={classes.singleProductDescription}>
            {singleProduct.description}
          </p>
          </div>
      </div>
    </main>
  );
}
export default SingleProduct;
