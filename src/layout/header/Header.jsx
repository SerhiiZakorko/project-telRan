import { Routes, Route, Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import mainLogo from "../../assets/images/header/main-logo.svg";
import basketImg from "../../assets/images/header/basket.svg";
import Main from "../../components/main/Main";
import Products from "../../components/products/Products";
import Sales from "../../components/sales/Sales";
import NotFound from "../../components/notFound/NotFound";
import Categories from "../../components/categories/Categories";
import Basket from "../../components/basket/Basket";
function Header() {
  const navigate = useNavigate();
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/basket" element={<Basket />} />
        {/* <Route path="/categories/"{categoryID} element={<ProductsByCategories/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}
export default Header;
