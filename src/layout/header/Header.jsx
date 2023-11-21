import { Routes, Route, Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import mainLogo from "./images/main-logo.svg";
import basket from "./images/basket.svg";
import Main from "../../components/main/Main";
import Products from "../../components/products/Products";
import Sales from "../../components/sales/Sales";
import NotFound from "../../components/notFound/NotFound";
import Catalog from "../../components/catalog/Catalog";
import Basket from "../../components/basket/Basket";
function Header() {
  const navigate = useNavigate();
  return (
    <>
    <header>
      <img id={classes.mainLogo} src={mainLogo} alt="main-logo"/>
      <nav>
        <button
          onClick={() => {
            navigate("/catalog");
          }}
          id={classes.goCatalog}
        >
          Catalog
        </button>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/products">All products</Link>
          </li>
          <li>
            <Link to="/sales">All sales</Link>
          </li>
        </ul>
      </nav>
      <img
        src={basket}
        alt="basket"
        onClick={() => {
          navigate("/basket");
        }}
      />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}
export default Header;
