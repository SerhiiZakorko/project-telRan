import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import classes from "./Header.module.css";
import mainLogo from "../../assets/images/header/main-logo.svg";
import basketImg from "../../assets/images/header/basket.svg";

function Header() {
  const navigate = useNavigate();
  const prodCount = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : []

  useEffect(() => {
    
  }, [prodCount]);
 
  return (
    <header>
      <img id={classes.mainLogo} src={mainLogo} alt="main-logo" onClick={() => {
          navigate("/");
        }}/>
      <nav>
            <Link to="/" {...window.scrollTo({ top: 0, behavior: 'smooth' })}>Main Page</Link>
            <Link to="/categories" >Categories</Link>
            <Link to="/products">All products</Link>
            <Link to="/sales">All sales</Link>
      </nav>
      <img id={classes.basket}
        src={basketImg}
        alt="basket"
        onClick={() => {
          navigate("/basket");
        }}
      />
      {prodCount.length > 0 ? <p className={classes.prodCount}>{prodCount.length}</p> : null}
      </header>
  );
}
export default Header;
