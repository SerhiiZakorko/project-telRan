import classes from './Products.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSingleProduct } from '../../store/slices/singleProduct';

function ProductCard({id,  title, image, discont_price, price}) {
  const url = 'http://localhost:3333'
  const discountValue = Math.floor(100 - (discont_price * 100 / price))


  const dispatch = useDispatch();
  function goToSingleProduct() {
    dispatch(fetchSingleProduct({id}));
  }
 
  return (
    <li className={classes.productCard} key={id} >
      <Link to={`/products/${id}`} ><img src={!id ? image : url+image} className={classes.productImg} onClick={() => goToSingleProduct(id)}/></Link>
      <div className={classes.productDescription}>
      <Link to={`/products/${id}`} ><span className={classes.productTitle} onClick={() => goToSingleProduct(id)}>{title}</span></Link>
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${discont_price || price}</p>
          {discont_price ? <p className={classes.price}>${price}</p> : null}
        </div>
        {discont_price ? <p className={classes.discount}>-{discountValue}%</p> : null}
      </div> 
    </li>
  );
}
export default ProductCard;