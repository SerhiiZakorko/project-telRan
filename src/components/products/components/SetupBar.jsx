import classes from "./SetupBar.module.css"
function SetupBar(){
    return(
        <div className={classes.setupBar}>
                <div className={classes.priceSetup}>
                    <h5>Price</h5>
                    <input placeholder="from"/>
                    <input placeholder="to"/>
                </div>
                <div className={classes.discountSetup}>
                    <h5>Discounted items</h5>
                    <input className={classes.checkbox} type="checkbox" />
                </div>
                <div className={classes.sortSetup}>
                    <h5>Sorted</h5>
                    <select>
                        <option value="default">by default</option>
                        <option value="priceUp">by price up</option>
                        <option value="priceDown">by price down</option>
                        <option value="AZ">A-Z</option>
                        <option value="new">new</option>
                        <option value="old">old</option>
                    </select>
                </div>
            </div>
    )
}
export default SetupBar