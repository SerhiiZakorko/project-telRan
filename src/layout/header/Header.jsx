import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import classes from "./Header.module.css";
import mainLogo from "../../assets/images/header/main-logo.svg";
import basketImg from "../../assets/images/header/basket.svg";
import menuIcon from "../../assets/images/header/menu.svg";
import closeAside from "../../assets/images/basket/x.svg";

function Header() {
  const navigate = useNavigate();
  const prodCount = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];

  useEffect(() => {}, [prodCount]);

  let style = null;
  const menuOpener = () => {
    {
      style = classes.menuIsOpen;
      console.log(style);
    }
  };
  const menuCloser = () => {
    {
      style = null;
      console.log(style);
    }
  };
  return (
    <>
      <header className={classes.headerDesktop}>
        <img
          id={classes.mainLogo}
          src={mainLogo}
          alt="main-logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <nav>
          <Link to="/" {...window.scrollTo({ top: 0, behavior: "smooth" })}>
            Main Page
          </Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">All products</Link>
          <Link to="/sales">All sales</Link>
        </nav>
        <img
          id={classes.basket}
          src={basketImg}
          alt="basket"
          onClick={() => {
            navigate("/basket");
          }}
        />
        {prodCount.length > 0 ? (
          <p className={classes.prodCount}>{prodCount.length}</p>
        ) : null}
      </header>
      <header className={classes.headerMobile}>
        <div className={classes.headerWrapper}>
          <div className={classes.iconWrapper}>
            <img
              id={classes.mainLogo}
              src={mainLogo}
              alt="main-logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <img
              id={classes.basket}
              src={basketImg}
              alt="basket"
              onClick={() => {
                navigate("/basket");
              }}
            />
            {prodCount.length > 0 ? (
              <p className={classes.prodCountMobile}>{prodCount.length}</p>
            ) : null}
          </div>
          <img
            className={classes.menuIcon}
            src={menuIcon}
            alt="menu"
            onClick={() => menuOpener()}
          />
        </div>
        <aside className={style}>
          <img
            className={classes.closeAside}
            src={closeAside}
            alt="X"
            onClick={() => menuCloser()}
          />
          <nav className={classes.navMobile}>
            <Link to="/" {...window.scrollTo({ top: 0, behavior: "smooth" })}>
              Main Page
            </Link>
            <Link to="/categories">Categories</Link>
            <Link to="/products">All products</Link>
            <Link to="/sales">All sales</Link>
          </nav>
        </aside>
      </header>
    </>
  );
}
export default Header;
