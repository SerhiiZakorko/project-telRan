import classes from './Categories.module.css'
function CategoryCard({ title, image}) {
  const url = 'http://localhost:3333'
  return (
    <li className={classes.categoryCard}>
      <img src={url+image} className={classes.categoryImg}/>
      <span className={classes.categoryTitle}>{title}</span>
    </li>
  );
}
export default CategoryCard;
