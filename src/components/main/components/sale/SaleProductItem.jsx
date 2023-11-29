import classes from './SaleProduct.module.css'
function SaleProductItem({ title, image}) {
  const url = 'http://localhost:3333'
  return (
    <li className={classes.saleProductCard}>
      <img src={url+image} className={classes.saleProductImg}/>
      <span className={classes.saleProductTitle}>{title}</span>
    </li>
  );
}
export default SaleProductItem;