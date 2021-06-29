const Sidebar = ( {page, handleSignOut} ) => {
    return(
        <div className="w-full lg:w-1/5 bg-primary rounded-none lg:rounded-large p-8 lg:py-16 lg:px-12 flex flex-col justify-between sidebar">
        <div>
          <p className="font-bold text-3xl text-white mb-8 text-left lg:mb-sixty flex justify-between items-center">
            Dash.
            <div className="relative">
              <input
                type="text"
                className="bg-transparent rounded-default px-4 h-thirty text-sm focus:outline-none focus:ring focus:ring-primary block lg:hidden w-44"
                placeholder="Search..."
              />
              <img
                src="../search.svg"
                alt="search"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </p>
          <div className="flex flex-row justify-between lg:flex-col gap-10">
            <a
              className={`flex flex-col xl:flex-row items-center gap-y-2 lg:gap-x-5 text-white font-montserrat text-sm lg:text-lg ${page === "/" && "font-bold"
                }`}
              href="/"
            >
              <img
                src="../dashboard_icon.svg"
                className={` rounded-full ${page === "/" && " bg-opacity-30 bg-white p-2 md:bg-transparent md:p-0 md:bg-opacity-100"
                  }`}
              />
              <span className="hidden md:inline hover:opacity-90 cursor-pointer">Dashboard</span>
            </a>
            <a
              className={`flex flex-col xl:flex-row items-center gap-y-2 lg:gap-x-5 text-white font-montserrat text-sm lg:text-lg`}
            >
              <img src="../transaction_icon.svg" />
              <span className="hidden md:inline hover:opacity-90 cursor-pointer">Transactions</span>
            </a>
            <a
              className={`flex flex-col xl:flex-row items-center gap-y-2 lg:gap-x-5 text-white font-montserrat text-sm lg:text-lg`}
            >
              <img src="../schedule_icon.svg" />
              <span className="hidden md:inline hover:opacity-90 cursor-pointer">Schedules</span>
            </a>
            <a
              className={`flex flex-col xl:flex-row items-center gap-y-2 lg:gap-x-5 text-white font-montserrat text-sm lg:text-lg ${page === "/users" && "font-bold"
                }`}
              href="/users"
            >
              <img src="../user_icon.svg" className={` rounded-full ${page === "/users" && " bg-opacity-30 bg-white p-2 md:bg-transparent md:p-0 md:bg-opacity-100"
                }`} />
              <span className="hidden md:inline hover:opacity-90 cursor-pointer">User</span>
            </a>
            <a
              className={`flex flex-col xl:flex-row items-center gap-y-2 lg:gap-x-5 text-white font-montserrat text-sm lg:text-lg ${page === "/setting" && "font-bold"
                }`}
              href="/setting"
            >
              <img src="../setting_icon.svg" className={` rounded-full ${page === "/setting" && " bg-opacity-30 bg-white p-2 md:bg-transparent md:p-0 md:bg-opacity-100"
                }`} />
              <span className="hidden md:inline hover:opacity-90 cursor-pointer">Settings</span>
            </a>
          </div>
        </div>
        <div className="font-montserrat text-sm text-white hidden lg:block">
          <p className="mb-5 cursor-pointer hover:underline">Help</p>
          <p className=" mb-5 cursor-pointer hover:underline">Contact us</p>
          <button className="cursor-pointer hover:underline" onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    )
}

export default Sidebar;