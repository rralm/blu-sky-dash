import React from "react";
import Input from "../Input";
import PrimaryButton from "../Buttons/primary";
import Link from "next/link";

function SignIn() {
  return (
    <div className="slide-in-fwd-center">
      <div className="mt-6 p-twenty md:p-thirty bg-white rounded-default">
        <Input name="Email address" type="email" />
        <Input name="Password" type="password" />
        <span className="text-link hover:underline block mb-5">
          <Link href="#">Forgot Password</Link>
        </span>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
    </div>
  );
}

export default SignIn;
