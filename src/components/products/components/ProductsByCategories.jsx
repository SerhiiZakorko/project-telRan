
import classes from "../Products.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsOfCategory } from "../../../store/slices/productsByCategoriesSlice";
import SetupBar from "./SetupBar";
import ProductCard from "../ProductCard";
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
        <Link className={classes.links} to="/categories">Categories</Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink} >{productsOfCategory.category.title}</Link>
      </div>
            <h4 className={classes.title}>{productsOfCategory.category.title}</h4>
            <SetupBar/>
            <ul className={classes.productWrapper}>
          {productsOfCategory.data.map((product) => {
            return (
                <ProductCard key={product.id} {...product} />
            );
          })}
        </ul>
        </main>
    )
}
export default ProductsByCategories