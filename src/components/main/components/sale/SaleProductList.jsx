import classes from "./SaleProduct.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SaleProductItem from "./SaleProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function SaleProductList() {
  const products = useSelector((state) => state.products.products);
  const saleProducts = products.filter((product) => product.discont_price);
  return (
    <section className={classes.saleProductSamples}>
      <div className={classes.title}>
        <h4>Sale</h4>
        <div className={classes.line}></div>
        <Link to="/sales">All sales</Link>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <ul className={classes.saleProductWrapper}>
          {saleProducts.map((saleProduct) => {
            return (
              <SwiperSlide key={saleProduct.id}>
                <SaleProductItem key={saleProduct.id} {...saleProduct} />
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
    </section>
  );
}
export default SaleProductList;
