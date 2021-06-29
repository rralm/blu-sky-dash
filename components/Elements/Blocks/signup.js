import React from "react";
import Input from "../Input";
import PrimaryButton from "../Buttons/primary";
import Link from "next/link";

function SignUp() {
  return (
    <div className="slide-in-fwd-center">
      <div className="mt-6 p-twenty md:p-thirty bg-white rounded-default">
        <div className="flex gap-x-6">
          <Input name="First Name" type="text" />
          <Input name="Last Name" type="text" />
        </div>
        <Input name="Password" type="password" />
        <Input name="Confirm Password" type="text" />
        <div className="flex items-center gap-ten mb-5">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="text-secondaryText">
            I agree to the
            <span className="text-link hover:underline">
              <Link href="#"> terms and conditions</Link>
            </span>
          </label>
        </div>
        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
  );
}

export default SignUp;
