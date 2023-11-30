import classes from './SaleProduct.module.css'
function SaleProductItem({ title, image, discont_price, price}) {
  const url = 'http://localhost:3333'
  const discountValue = Math.floor(100 - (discont_price * 100 / price))
  return (
    <li className={classes.saleProductCard}>
      <img src={url+image} className={classes.saleProductImg}/>
      <div className={classes.saleProductDescription}>
        <span className={classes.saleProductTitle}>{title}</span>
        <div className={classes.priceWrapper}>
          <p className={classes.discountPrice}>${discont_price}</p>
          <p className={classes.price}>${price}</p>
        </div>
        <p className={classes.discount}>-{discountValue}%</p>
      </div> 
    </li>
  );
}
export default SaleProductItem;