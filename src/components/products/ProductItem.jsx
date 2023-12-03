import classes from './Products.module.css'
function ProductItem({ title, image, discont_price, price}) {
  const url = 'http://localhost:3333'
  const discountValue = Math.floor(100 - (discont_price * 100 / price))
  return (
    <li className={classes.productCard}>
      <img src={url+image} className={classes.productImg}/>
      <div className={classes.productDescription}>
        <span className={classes.productTitle}>{title}</span>
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${discont_price || price}</p>
          {discont_price ? <p className={classes.price}>${price}</p> : null}
        </div>
        {discont_price ? <p className={classes.discount}>-{discountValue}%</p> : null}
      </div> 
    </li>
  );
}
export default ProductItem;