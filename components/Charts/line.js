import { Line } from "react-chartjs-2";
import { LineArray } from "../../config/constants";

const data = {
  labels: ["week 1", "week 2", "week 3", "week 4", "week 5"],
  datasets: [
    {
      label: "users",
      data: LineArray[0],
      borderColor: "#9BDD7C",
      borderWidth: 3,
    },
    {
      label: "guest",
      data: LineArray[1],
      borderColor: "#E9A0A0",
      borderWidth: 3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 500,
      grid: {
        display: true,
        drawBorder: false,
      },
      showLine: false,
      ticks: {
        stepSize: 100,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function LineChart() {
  return (
    <>
      <div className="flex justify-between mb-10">
        <div className="font-montserrat">
          <p className="font-bold text-sm md:text-base lg:text-lg">
            Activities
          </p>
          <p className="text-sm text-secondaryText flex items-center gap-x-1">
            <span className="flex flex-col text-xs md:text-base">
              <span>May - June 2021</span>
              {/* <span>May - June 2021</span>
                <span>May - June 2021</span> */}
            </span>
            <img src="../chevron.svg" alt="menu" />
          </p>
        </div>
        <div className="font-lato flex items-center gap-x-2 text-xs lg:gap-x-9 md:text-sm">
          <p className="flex items-center gap-x-1 lg:gap-x-ten">
            <span className="w-ten h-ten rounded-full bg-lightRed"></span>
            <span>Guest</span>
          </p>
          <p className="flex items-center gap-x-1 lg:gap-x-ten">
            <span className="w-ten h-ten rounded-full bg-lightGreen"></span>
            <span>User</span>
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <Line data={data} options={options} height={65} />
      </div>
      <div className="hidden md:block lg:hidden">
        <Line data={data} options={options} height={100} />
      </div>
      <div className="block md:hidden">
        <Line data={data} options={options} height={200} />
      </div>
    </>
  );
}

export default LineChart;
