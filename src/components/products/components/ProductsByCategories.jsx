import classes from "../Products.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsOfCategory } from "../../../store/slices/productsByCategoriesSlice";
import { SetupBar, filtredProducts } from "./SetupBar";
import ProductCard from "../ProductCard";

function ProductsByCategories() {
  let { productsOfCategory } = useSelector((state) => state.productsOfCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsOfCategory());
  }, [dispatch]);

  let categoryProducts = productsOfCategory.data;
  return (
    <main className={classes.productsMain}>
      <div className={classes.navWrapper}>
        <Link className={classes.links} to="/">
          Main page
        </Link>
        <div className={classes.greyLine}></div>
        <Link className={classes.links} to="/categories">
          Categories
        </Link>
        <div className={classes.greyLine}></div>
        <Link id={classes.currentLink}>
          {productsOfCategory.category.title}
        </Link>
      </div>
      <h4 className={classes.title}>{productsOfCategory.category.title}</h4>
      <SetupBar arrayOfProducts={categoryProducts} />
      <ul className={classes.productWrapper}>
        {categoryProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...product}
              categorytitle={categoryProducts.title}
            />
          );
        })}
      </ul>
    </main>
  );
}
export default ProductsByCategories;
