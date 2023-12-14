import classes from "./SingleProduct.module.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleProduct({id, title, image}){
  const url = 'http://localhost:3333'
    let singleProduct = useSelector((state) =>  state.product.product);
    console.log(singleProduct[0].title)
    
    return (
        <main>
          <div className={classes.navWrapper}>
            <Link className={classes.links} to="/">Main page</Link>
            <div className={classes.greyLine}></div>
            <Link className={classes.links} to="/categories">Categories</Link>
            <div className={classes.greyLine}></div>
            <Link id={classes.currentLink} ></Link>
          </div>
          <img src={url+image}/>
          <h4>{singleProduct[0].title}</h4>
        </main>
    )
}
export default SingleProduct