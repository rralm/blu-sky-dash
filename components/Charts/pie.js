import { Pie } from "react-chartjs-2";
import { PieArray } from "../../config/constants";
const dataPie = {
  labels: ["Tees", "Pants", "Hoodies"],
  datasets: [
    {
      label: "users",
      data: PieArray,
      backgroundColor: ["#F6DC7D", "#EE8484", "#98D89E"],
      borderWidth: 0,
    },
  ],
};

const optionsPie = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PieChart = () => {
  return (
    <>
      <div className="w-full xl:w-1/2 bg-white rounded-medium p-6 lg:p-10">
        <div className="flex items-center justify-between font-montserrat">
          <p className="font-bold text-sm md:text-base lg:text-lg">Top products</p>
          <p className="text-xs lg:text-sm text-secondaryText flex items-center gap-x-1">
            <span className="flex flex-col">
              <span>May - June 2021</span>
              {/* <span>May - June 2021</span>
                <span>May - June 2021</span> */}
            </span>
            <img src="../chevron.svg" alt="menu" />
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly mt-5">
          <div className="w-full mb-6 md:mb-0 md:w-1/2">
            <Pie data={dataPie} options={optionsPie} height={150} width={150} />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-baseline gap-x-ten mb-5">
              <span className="w-ten h-ten rounded-full bg-lightGreen"></span>
              <div>
                <p className="text-xs md:text-sm font-montserrat font-bold">Basic Tees</p>
                <p className="text-xs font-lato text-secondaryText">
                  {(
                    (PieArray[0] * 100) /
                    (PieArray[0] + PieArray[1] + PieArray[2])
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
            <div className="flex items-baseline gap-x-ten mb-5">
              <span className="w-ten h-ten rounded-full bg-lightRed"></span>
              <div>
                <p className="text-xs md:text-sm font-montserrat font-bold">
                  Custom Short Pants
                </p>
                <p className="text-xs font-lato text-secondaryText">
                  {(
                    (PieArray[1] * 100) /
                    (PieArray[0] + PieArray[1] + PieArray[2])
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
            <div className="flex items-baseline gap-x-ten mb-5">
              <span className="w-ten h-ten rounded-full bg-lightYellow"></span>
              <div>
                <p className="text-xs md:text-sm font-montserrat font-bold">
                  Super Hoodies
                </p>
                <p className="text-xs font-lato text-secondaryText">
                  {(
                    (PieArray[2] * 100) /
                    (PieArray[0] + PieArray[1] + PieArray[2])
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
