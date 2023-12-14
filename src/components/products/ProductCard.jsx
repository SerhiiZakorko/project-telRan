import classes from './Products.module.css'
import { Link } from "react-router-dom";

function ProductCard({id,  title, image, discont_price, price}) {
  const url = 'http://localhost:3333'
  const discountValue = Math.floor(100 - (discont_price * 100 / price))
 

  return (
    <li className={classes.productCard} key={id} >
      <Link to="/product" id = {id}><img src={!id ? image : url+image} className={classes.productImg} /></Link>
      <div className={classes.productDescription}>
        <span className={classes.productTitle}>{title}</span>
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${discont_price || price}</p>
          {discont_price ? <p className={classes.price}>${price}</p> : null}
        </div>
        {discont_price ? <p className={classes.discount}>-{discountValue}%</p> : null}
        <p>{id}</p>
      </div> 
    </li>
  );
}
export default ProductCard;