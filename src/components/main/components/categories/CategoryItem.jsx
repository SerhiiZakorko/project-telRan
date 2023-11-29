import classes from './Category.module.css'
function CategoryItem({ title, image}) {
  const url = 'http://localhost:3333'
  return (
    <li className={classes.categoryCard}>
      <img src={url+image} className={classes.categoryImg}/>
      <span className={classes.categoryTitle}>{title}</span>
    </li>
  );
}
export default CategoryItem;
