import { FC, ReactNode } from "react";
import { signIn } from "next-auth/react";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";

interface GoogleSignInButtonProp {
  children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProp> = ({ children }) => {
  const LoginWithGoogle = () =>
    signIn("google", {
      callbackUrl: "http://localhost:3000/admin",
    });
  return (
    <div className="flex">
      <button className="flex" onClick={LoginWithGoogle}>
        <IoLogoGoogle className="mr-2 h-4 w-4" />
        {children}
      </button>
    </div>
  );
};

export default GoogleSignInButton;
