import React from "react";

function Input({ type, name, icon }) {
  return (
    <div className="flex flex-col font-lato mb-3 md:mb-5">
      <label htmlFor={name} className="mb-ten">
        {name}
      </label>
      <div className="relative">
        <input
          id={name}
          type={type}
          name={name}
          className={`rounded-default py-ten px-fifteen bg-backgroundOne focus:outline-none focus:ring focus:ring-primary w-full`}
        />
        {icon && (
          <img
            src={icon}
            alt="calender"
            className="h-eighteen absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
}

export default Input;
