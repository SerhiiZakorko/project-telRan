import classes from "./Category.module.css";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";

function CategoryList() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <ul className={classes.categoryWrapper}>
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.id}>
              <CategoryItem key={category.id} {...category} />
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
}
export default CategoryList;
