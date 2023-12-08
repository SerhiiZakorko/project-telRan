import classes from './Category.module.css'
import { useDispatch } from "react-redux";
import {fetchProductsOfCategory} from "../../../../store/slices/productsByCategoriesSlice";
import { Link } from 'react-router-dom';
let categoryIDFromMain

function CategoryCard({id, title, image}) {
  const url = 'http://localhost:3333'

  const dispatch = useDispatch();
  function goToCategoryProducts() {
    categoryIDFromMain = id
    console.log(categoryIDFromMain, "categoryIDFromMain")
    dispatch(fetchProductsOfCategory())
  }

  return (
    <li className={classes.categoryCard}>
      <Link to='/productsByCategories'><img src={url+image} className={classes.categoryImg} alt='Categiry-image'onClick={() => goToCategoryProducts(id)}/></Link>
      <Link to='/productsByCategories'><span className={classes.categoryTitle} onClick={() => goToCategoryProducts(id)}>{title}</span> </Link>
    </li>
  );
}
export {CategoryCard, categoryIDFromMain}
