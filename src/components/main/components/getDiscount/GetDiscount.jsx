import classes from "./GetDiscount.module.css"
import handWithPlant from "../../images/hand-with-plant.svg"
function GetDiscount(){
    return(
        <section className={classes.getDiscount}>
            <h4>5% off on the first order</h4>
            <div className={classes.sectionWrrapper}>
                <img src={handWithPlant}/>
                <div className={classes.formWrapper}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="email" placeholder="Email"/>
                    <button>Get a discount</button>
                </div>
            </div>
        </section>
    )
}
export default GetDiscount