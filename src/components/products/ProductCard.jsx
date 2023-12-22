import classes from './Products.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSingleProduct } from '../../store/slices/singleProduct';
import addToCart from '../../utils/addToCart';

function ProductCard(product) {
  const url = 'http://localhost:3333'
  const discountValue = Math.floor(100 - (product.discont_price * 100 / product.price))
  const dispatch = useDispatch();
  function goToSingleProduct() {
    dispatch(fetchSingleProduct({id : product.id}));
  }
  return (
    <li className={classes.productCard} key={product.id} >
      <Link to={`/products/${product.id}`} ><img src={!product.id ? product.image : url+product.image} className={classes.productImg} onClick={() => goToSingleProduct(product.id)}/></Link>
      <div className={classes.productDescription}>
      <Link to={`/products/${product.id}`} ><span className={classes.productTitle} onClick={() => goToSingleProduct(product.id)}>{product.title}</span></Link>
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${product.discont_price || product.price}</p>
          {product.discont_price ? <p className={classes.price}>${product.price}</p> : null}
        </div>
        {product.discont_price ? <p className={classes.discount}>-{discountValue}%</p> : null}
      </div> 
      <button className={classes.addToCartBtn} onClick={() => addToCart(product)}>Add to cart</button>
    </li>
  );
}
export default ProductCard;