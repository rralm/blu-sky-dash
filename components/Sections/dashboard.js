import Card from "../Elements/Cards/index";

import LineChart from "../Charts/line";
import PieChart from "../Charts/pie";

function Dashboard({ userImage }) {
  return (
    <section>
      <nav className="w-full flex items-center justify-between mt-6 lg:mt-0">
        <p className="font-montserrat text-xl lg:text-2xl font-bold">Dashboard</p>
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
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-6 xl:gap-x-9 gap-y-6 xl:gap-y-0 mt-6 xl:mt-10">
        <Card
          icon={"../Vector.svg"}
          valueFor={"Revenues"}
          value={"$2,143,243"}
          className="bg-shadeOne"
        />
        <Card
          icon={"../total_transactions_icon.svg"}
          valueFor={"Transactions"}
          value={"1,520"}
          className="bg-shadeTwo"
        />
        <Card
          icon={"../Vector-1.svg"}
          valueFor={"Likes"}
          value={"9,721"}
          className="bg-shadeThree"
        />
        <Card
          icon={"../Vector-2.svg"}
          valueFor={"Users"}
          value={892}
          className="bg-shadeFour"
        />
      </div>
      {/* CHART COMPONENT */}
      <div
        className="mt-6 xl:mt-10 w-full bg-white p-6 lg:p-10 rounded-medium"
        style={{ height: "359px" }}
      >
        <LineChart />
      </div>
      {/* CHART COMPONENT */}
      {/* PIE CHART */}
      <div className="mt-6 xl:mt-10 w-full flex lg:flex-row flex-col gap-y-6 lg:gap-x-10 lg:max-h-96">
        {/* START */}
        <PieChart />
        {/* END */}
        <div className="w-full xl:w-1/2 bg-white rounded-medium p-6 lg:p-10">
          <div className="flex items-center justify-between font-montserrat">
            <p className="font-bold text-sm md:text-base lg:text-lg">Today&apos;s schedule</p>
            <p className="text-xs md:text-sm text-secondaryText flex items-center gap-x-1">
              <span className="flex flex-col">
                <span>See All</span>
                {/* <span>May - June 2021</span>
                <span>May - June 2021</span> */}
              </span>
              <img
                src="../chevron.svg"
                alt="menu"
                className="transform -rotate-90"
              />
            </p>
          </div>
          <div className="border-l-4 border-lightRed h-16 pl-4 mt-7">
            <p className="text-tertiaryText font-lato text-sm font-bold">
              Meeting with suppliers from Kuta Bali
            </p>
            <p className="text-pentaText font-lato text-xs">14:00 - 15:00</p>
            <p className="text-pentaText font-lato text-xs">
              at Sunset Road, Kuta Bali
            </p>
          </div>
          <div className="border-l-4 border-lightGreen h-16 pl-4 mt-7">
            <p className="text-tertiaryText font-lato text-sm font-bold">
              Meeting with suppliers from Kuta Bali
            </p>
            <p className="text-pentaText font-lato text-xs">14:00 - 15:00</p>
            <p className="text-pentaText font-lato text-xs">
              at Sunset Road, Kuta Bali
            </p>
          </div>
        </div>
      </div>
      {/* PIE CHART */}
    </section>
  );
}

export default Dashboard;
