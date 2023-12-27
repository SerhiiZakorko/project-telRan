import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { nameInputValidation, phoneInputValidation, emailInputValidation } from "../../../../utils/validations";
import classes from "./GetDiscount.module.css";
import handWithPlant from "../../../../assets/images/main/hand-with-plant.svg";
import { createDiscountReceiver } from "../../../../utils/createDiscountReceiver";
import { postDiscount } from "../../../../store/slices/getDiscountSlice";

function GetDiscount() {
  const dispatch = useDispatch();
  const {register,
            handleSubmit, 
            reset, 
            formState: { errors } } = useForm({mode: "all"});
  function getDiscount(data) {
    createDiscountReceiver(data);
    dispatch(postDiscount());
    reset();
  }

  return (
    <section className={classes.getDiscount}>
      <h4>5% off on the first order</h4>
      <div className={classes.sectionWrrapper}>
        <img src={handWithPlant} />
        <form onSubmit={handleSubmit(getDiscount)} className={classes.formWrapper}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", nameInputValidation)}
          />
          {errors.name && <p style={{ color: "#02393e" }}>{errors.name.message}</p>}
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone", phoneInputValidation)}
          />
          {errors.phone && (<p style={{ color: "#02393e" }}>{errors.phone.message}</p>)}
          <input
            type="text"
            placeholder="Email"
            {...register("email", emailInputValidation)}
          />
          {errors.email && (<p style={{ color: "#02393e" }}>{errors.email.message}</p>)}
          <button type="submit">Get a discount</button>
        </form>
      </div>
    </section>
  );
}
export default GetDiscount;
