import classes from './Products.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSingleProduct } from '../../store/slices/singleProduct';
import { addToCart } from '../../store/slices/basketSlice';
import cartIcon from "../../assets/images/header/basket.svg"
function ProductCard(product) {
  const url = 'http://localhost:3333'
  const discountValue = Math.floor(100 - (product.discont_price * 100 / product.price))
  const dispatch = useDispatch();
  const goToSingleProduct = () => {
    dispatch(fetchSingleProduct({id : product.id}));
  }
  const addHandler = (product) => {
    dispatch(addToCart(product))
  }
 
  return (
    <li className={classes.productCard} key={product.id} >
      <Link to={`/products/${product.id}`} ><img src={url+product.image} className={classes.productImg} onClick={() => goToSingleProduct(product.id)}/></Link>
      <div className={classes.productDescription}>
      <Link to={`/products/${product.id}`} ><span className={classes.productTitle} onClick={() => goToSingleProduct(product.id)}>{product.title}</span></Link>
      <img className={classes.addToCartMobile} src={cartIcon} alt='toCart'onClick={() => addHandler(product)}/>
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${product.discont_price || product.price}</p>
          {product.discont_price ? <p className={classes.price}>${product.price}</p> : null}
        </div>
        {product.discont_price ? <p className={classes.discount}>-{discountValue}%</p> : null}
      </div> 
      <button className={classes.addToCartBtn} onClick={() => addHandler(product)}>Add to cart</button>
    </li>
  );
}
export default ProductCard;