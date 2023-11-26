import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import classes from './Main.module.css'
import CategoryList from "./components/categories/CategoryList";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import GetDiscount from "./components/getDiscount/GetDiscount";

function Main(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCategories());
      }, [dispatch]);
    
    return(
        <main>
            <section className={classes.mainBanner}>
            <h2>Amazing Discounts on Garden Products!</h2>
            <button className={classes.checkBtn} onClick={() => {
                navigate("/sales");
            }}>Check out</button>
            </section>
            <CategoryList/>
            <GetDiscount/>
        </main>
    )
}
export default Main