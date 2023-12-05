
import classes from "./Products.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsOfCategory } from "../../../store/slices/productsByCategoriesSlice";

function ProductsByCategories(){
    const productsOfCategory = useSelector((state) => state.productsOfCategory.productsOfCategory);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchProductsOfCategory());
    }, [dispatch]);
    return(
        <main className={classes.productsMain}>
            <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">Main page</Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink} to="/products">All products</Link>
      </div>
            <h4 className={classes.title}>All products</h4>
            <SetupBar/>
            <ul className={classes.productWrapper}>
          {productsOfCategory.map((product) => {
            return (
                <ProductItem key={product.id} {...product} />
            );
          })}
        </ul>
        </main>
    )
}
export default ProductsByCategories