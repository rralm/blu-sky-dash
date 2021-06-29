import { useEffect, useState } from "react";
import axios from "axios";
import PrimaryButton from "../Elements/Buttons/primary";

const AllUsers = ({ userImage }) => {
  const [usersData, setUsersData] = useState({ all: [], filtered: [] });
  const [profile, setProfile] = useState([]);
  const [filter, setFilter] = useState("");

  console.log(process.env.UNSPLASH_ID);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user/?size=8")
      .then((data) => setUsersData({ all: data.data, filtered: data.data }))
      .catch((err) => console.log(err));

    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=mJ9aStQZGuX1w53xTPgJ8OpGRMF9b_CAfnTimIuIS90`
      )
      .then((data) => setProfile(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearchInput = (event) => {
    if (event.target.value === "") {
      setUsersData({ ...usersData, filtered: usersData.all });
    } else {
      const allUsers = usersData.all;
      setUsersData({
        ...usersData,
        filtered: allUsers.filter((oneUser) =>
          oneUser.email.toLowerCase().includes(event.target.value.toLowerCase())
        ),
      });
    }
  };

  return (
    <section>
      <nav className="w-full flex items-center justify-between mt-6 lg:mt-0">
        <p className="font-montserrat text-2xl font-bold">Users</p>
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
      <div
        className="bg-white rounded-medium mt-6 xl:mt-10 p-6 md:p-10 md:pb-16 overflow-y-scroll md:overflow-y-hidden relative"
        style={{ maxHeight: "815px" }}
      >
        <div className="flex items-center justify-between mb-thirty flex-col md:flex-row">
          <div className="font-montserrat text-lg font-bold mb-4 md:mb-0">
            User Records
          </div>
          <div className="flex gap-y-5 md:gap-x-5 flex-col md:flex-row ">
            <div className="relative">
              <input
                type="text"
                className="bg-backgroundOne rounded-default px-4 h-thirty text-sm focus:outline-none focus:ring focus:ring-primary"
                placeholder="Search in table..."
                onChange={(event) => handleSearchInput(event)}
              />
              <img
                src="../search.svg"
                alt="search"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <button className="border border-lightGrey text-lightGrey text-sm rounded-default h-thirty px-4 font-bold flex items-center gap-x-1 justify-center">
              <img src="../filter.svg" alt="filter" />
              <span>filter</span>
            </button>
            <PrimaryButton className="flex items-center h-thirty text-sm px-4 justify-center">
              + Add
            </PrimaryButton>
          </div>
        </div>

        {usersData.filtered.map((userData, key) => (
          <>
            <div
              key={key}
              className={`hidden md:grid grid-cols-7 text-center ${
                key % 2 === 0 ? "bg-backgroundTwo" : "bg-backgroundOne"
              } py-4 lg:py-0 place-items-center text-black text-sm font-lato h-sixty rounded-default mb-5`}
            >
              <div className="col-span-1">
                <img
                  src={profile[key]?.urls.small}
                  alt={userData?.first_name}
                  className="h-9 w-9 rounded-full border"
                />
              </div>
              <div className="col-span-1">
                {userData?.first_name + " " + userData?.last_name.slice(0, 1)}
              </div>
              <div className="col-span-3">{userData?.email}</div>
              <div className="col-span-1">{userData?.gender}</div>
              <div className="col-span-1">
                {userData?.id % 2 === 0 ? "Admin" : "User"}
              </div>
            </div>
            <div
              key={key}
              className={`block md:hidden p-3 mb-4 rounded-default ${
                key % 2 === 0 ? "bg-backgroundTwo" : "bg-backgroundOne"
              }`}
            >
              <div className="flex gap-x-4">
                <img
                  src={profile[key]?.urls.small}
                  alt={userData?.first_name}
                  className="h-16 w-16 rounded-full border"
                />
                <div className="text-xs flex flex-col gap-y-2">
                  <p>
                    {userData?.first_name +
                      " " +
                      userData?.last_name.slice(0, 1)}
                  </p>
                  <p>{userData?.email}</p>
                  <p className="flex justify-between">
                    <span>{userData?.id % 2 === 0 ? "Admin" : "User"}</span>
                    <span>{userData?.id % 3 === 0 ? "Male" : "Female"}</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="lg:flex hidden lg:absolute bottom-8 right-10 gap-x-five text-secondaryText text-sm">
          <button className="h-thirty w-thirty rounded-default border border-lightGreyTwo flex items-center justify-center hover:bg-lightGreyTwo">
            <img
              src="../chevron.svg"
              alt="left-arrow"
              className="transform rotate-90"
            />
          </button>
          <button className="h-thirty w-thirty rounded-default border border-lightGreyTwo flex items-center justify-center bg-lightGreyTwo">
            1
          </button>
          <button className="h-thirty w-thirty rounded-default border border-lightGreyTwo flex items-center justify-center hover:bg-lightGreyTwo">
            2
          </button>
          <button className="h-thirty w-thirty rounded-default border border-lightGreyTwo flex items-center justify-center hover:bg-lightGreyTwo">
            3
          </button>
          <button className="h-thirty w-thirty rounded-default border border-lightGreyTwo flex items-center justify-center hover:bg-lightGreyTwo">
            <img
              src="../chevron.svg"
              alt="left-arrow"
              className="transform -rotate-90"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
