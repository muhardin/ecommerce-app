"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import TextBox from "./elements/TextBox";
import Button from "./elements/Button";
import toast from "react-hot-toast";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  toast.dismiss();
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: userName.current,
      password: pass.current,
      redirect: false,
      // callbackUrl: "/",
    });
    // console.log(result);
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox
          labelText="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          labelText="Password"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
