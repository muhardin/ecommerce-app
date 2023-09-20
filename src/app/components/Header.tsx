"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );
  const { data: session } = useSession();
  console.log(session?.user);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search Field */}
        <div className=" bg-white w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className=" text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search"
            className=" placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login Register */}
        {!session && (
          <div
            onClick={
              //() => signIn()
              () => router.push("/sign-in")
            }
            className="headerDiv cursor-pointer"
          >
            <AiOutlineUser className="text-2xl" />
            <p className=" text-sm font-semibold">Login/Register</p>
          </div>
        )}

        {/* Cart */}
        <div className=" flex flex-row items-center justify-center gap-x-2 px-2 py-1.5">
          <Link href={"/cart"}>
            <div className=" bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1  px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
              <IoMdCart className="text-xl" />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={totalAmt} />
              </p>
              <span className="bg-white text-orange-600 rounded-full text-xs absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black font-bold">
                {productData ? productData.length : 0}
              </span>
            </div>
          </Link>
          {session && (
            <Image
              className=" rounded-full object-cover"
              src={session?.user?.image as string}
              alt="image"
              width={35}
              height={35}
            />
          )}
        </div>
        {/* Logout Form */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv cursor-pointer px-2 gap-x-1"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
