import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import mainLogo from "../../assets/images/header/main-logo.svg";
import basketImg from "../../assets/images/header/basket.svg";

function Header() {
  const navigate = useNavigate();
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
      </header>
  );
}
export default Header;
