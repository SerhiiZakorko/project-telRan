import classes from './Categories.module.css'
import { useDispatch } from "react-redux";
import {fetchProductsOfCategory} from "../../store/slices/productsByCategoriesSlice";
import { Link } from 'react-router-dom';

function CategoryCard({id, title, image}) {
  const url = 'http://localhost:3333'
  
  const dispatch = useDispatch();
  function goToCategoryProducts() {
    dispatch(fetchProductsOfCategory({id}));
  }

  return (
    <li className={classes.categoryCard}>
      <Link to='/productsByCategories'><img src={url+image} className={classes.categoryImg} alt='Category-image' onClick={() => goToCategoryProducts()}/></Link>
      <Link to='/productsByCategories'><span className={classes.categoryTitle} onClick={() => goToCategoryProducts(id)} >{title}</span></Link>
    </li>
  );
}
export default CategoryCard