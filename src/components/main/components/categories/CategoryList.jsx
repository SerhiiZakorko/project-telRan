import classes from "./Category.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function CategoryList() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <section className={classes.categoriesSamples}>
      <div className={classes.title}>
        <h4>Categories</h4>
        <div className={classes.line}></div>
        <Link to="/categories">All categories</Link>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop= {true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <ul className={classes.categoryWrapper}>
          {categories.map((category) => {
            return (
              <SwiperSlide key={category.id} >
                <CategoryItem key={category.id} {...category} />
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
    </section>
  );
}
export default CategoryList;
