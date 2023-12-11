import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice"
import classes from "../products/Products.module.css"
import ProductCard from "../products/ProductCard";
import { SaleSetupBar } from "./SaleSetupBar";

function Sales(){
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
      }, [dispatch]);
      const discountedItems = products.filter((product) => product.discont_price);
    return(
        <main className={classes.productsMain}>
            <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">Main page</Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink} to="/sales">All sales</Link>
      </div>
            <h4 className={classes.title}>Discounted items</h4>
            <SaleSetupBar/>
            <ul className={classes.productWrapper}>
          {discountedItems.map((discountedItem) => {
            return (
                <ProductCard key={discountedItem.id} {...discountedItem} />
            );
          })}
        </ul>
        </main>
    )
}
export default Sales