import { useState } from "react";
import Input from "../Elements/Input";

function Settings({ userImage, handleSignOut }) {
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      <nav className="w-full flex items-center justify-between mt-6 lg:mt-0">
        <p className="font-montserrat text-2xl font-bold">Settings</p>
        <div className="flex gap-x-thirty">
          <div className="relative">
            <input
              type="text"
              className="bg-white rounded-default px-4 h-thirty text-sm focus:outline-none focus:ring focus:ring-primary hidden lg:block w-44"
              placeholder="Search..."
            />
            <img
              src="../search.svg"
              alt="search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <img src="../bells.svg" alt="notification" className="cursor-pointer" />
          <img
            src={userImage}
            alt="user avatar"
            className="h-thirty w-thirty rounded-full cursor-pointer"
          />
        </div>
      </nav>
      <div className="flex gap-x-10 flex-col xl:flex-row mt-6 xl:mt-10">
        <div className="w-full xl:w-7/12 bg-white rounded-medium py-thirty px-6 md:px-10" style={{height: '0%'}}>
          <p className="font-montserrat text-lg font-bold">Profile</p>
          <div className="flex flex-col md:flex-row mt-thirty gap-x-thirty">
            <div className="w-full md:w-1/4 flex items-center flex-col">
              <img
                src={userImage}
                alt="user avatar"
                className="h-hundered w-hundered rounded-full"
              />
              <button className="text-secondaryText border rounded-md border-secondaryText text-sm py-1 flex items-center font-montserrat font-bold px-3 mt-3">
                Change
              </button>
            </div>
            <div className="w-full md:w-3/4 flex flex-col mt-6 md:mt-0">
              <div className="flex gap-x-6">
                <Input name="First Name" type="text" />
                <Input name="Last Name" type="text" />
              </div>
              <Input name="Date of Birth" type="text" icon="../calender.svg" />
              <Input name="Phone Number" type="text" />
              <Input name="Address" type="text" />
              <button className="bg-lightBlue text-white font-montserrat font-bold py-ten px-9 rounded-default self-end mt-ten">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-5/12 mt-6 xl:mt-0">
          <div className="w-full bg-white rounded-medium px-6 md:px-10 py-thirty flex flex-col">
            <p className="font-montserrat text-lg font-bold mb-thirty">
              Account
            </p>
            <Input name="Email address" type="text" />
            <Input name="Password" type="password" />
            <Input name="Confirm Password" type="text" />
            <button className="bg-lightBlue text-white font-montserrat font-bold py-ten px-9 rounded-default self-end mt-ten">
              Save
            </button>
          </div>
          <div className="w-full bg-white rounded-medium px-6 md:px-10 py-thirty flex flex-col mt-6 xl:mt-10">
            <p className="font-montserrat text-lg font-bold mb-thirty">
              Security
            </p>
            <p className="flex justify-between font-lato items-center">
              <span>2-Step Verification</span>
              <button
                className={`bg-darkGreen w-11 h-5 rounded-full flex items-center focus:outline-none transition-all ${
                  !toggle && "justify-end"  
                } px-five cursor-pointer`}
                onClick={() => setToggle(!toggle)}
              >
                <span className="h-3 w-3 rounded-full bg-white block "></span>
              </button>
            </p>
          </div>
          <div className="w-full bg-white text-dangerRed rounded-medium px-6 md:px-10 py-thirty flex flex-col mt-6 xl:mt-10">
            <p className="font-montserrat text-lg font-bold mb-thirty">
              Danger Zone
            </p>
            <button className="border border-dangerRed rounded-default w-full py-ten focus:outline-none transform hover:-translate-y-1 hover:shadow-md" onClick={handleSignOut}>Delete My Account</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
