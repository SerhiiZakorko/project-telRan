import classes from "./SingleProduct.module.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../../store/slices/singleProduct";

function SingleProduct({id}){
    // const id = 15
    let singleProduct = useSelector((state) =>  state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct({id}));
  }, [ dispatch]);
  console.log(singleProduct)

    return (
        <main>
          <div className={classes.navWrapper}>
            <Link className={classes.links} to="/">Main page</Link>
            <div className={classes.greyLine}></div>
            <Link className={classes.links} to="/categories">Categories</Link>
            <div className={classes.greyLine}></div>
            <Link id={classes.currentLink} ></Link>
          </div>
          {/* <h4>{singleProduct[0].title}</h4> */}
        </main>
    )
}
export default SingleProduct