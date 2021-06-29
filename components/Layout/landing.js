import React from "react";

function Landing({ children }) {
  return (
    <div className="flex w-full h-screen md:flex-row flex-col">
      <div className="md:w-2/5 w-full bg-primary flex items-center justify-center">
          <p className="font-montserrat text-white font-bold text-5xl md:text-6xl lg:text-7xl p-8 md:p-0">Dash.</p>
      </div>
      <div className="md:w-3/5 w-full flex flex-col items-center justify-center bg-backgroundOne p-8 md:p-0">{children}</div>
    </div>
  );
}

export default Landing;
