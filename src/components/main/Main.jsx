import { useNavigate } from "react-router-dom";
import classes from './Main.module.css'
function Main(){
    const navigate = useNavigate();
    return(
        <main>
            <h2>Amazing Discounts on Garden Products!</h2>
            <button className={classes.checkBtn} onClick={() => {
                navigate("/sales");
            }}>Check out</button>
        </main>
    )
}
export default Main