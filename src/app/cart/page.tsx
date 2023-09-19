"use client";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { StateProps } from "../../../type";
import CartItem from "../components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "../components/PaymentForm";

const CartPage = () => {
  // const { productData } = useSelector((state: StateProps) => state?.shopping);
  const dispatch = useDispatch();
  // console.log(productData);
  return (
    <Container>
      <h2 className=" text-2xl font-semibold mb-2">Cart</h2>
      <div className=" flex flex-col gap-5">
        <CartItem />
        <div className=" flex items-center justify-end mt-2">
          <button
            onClick={() => dispatch(resetCart())}
            className=" bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200"
          >
            reset cart
          </button>
        </div>
        {/* Payment Card */}
        <div className="">
          <PaymentForm />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
