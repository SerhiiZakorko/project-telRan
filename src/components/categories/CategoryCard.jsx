import classes from './Categories.module.css'
import { useDispatch } from "react-redux";
import {fetchProductsOfCategory} from "../../store/slices/productsByCategoriesSlice";
let categoryID

function CategoryCard({id, title, image}) {
  const url = 'http://localhost:3333'
  
  const dispatch = useDispatch();
  function goToCategoryProducts() {
    categoryID = id
    dispatch(fetchProductsOfCategory());
  }

  
  
  
  return (
    <li className={classes.categoryCard}>
      <img src={url+image} className={classes.categoryImg} alt='Category-image' onClick={() => goToCategoryProducts()}/>
      <span className={classes.categoryTitle} onClick={() => goToCategoryProducts(id)}>{title}</span>
    </li>
    
  );
}
export { CategoryCard , categoryID }
