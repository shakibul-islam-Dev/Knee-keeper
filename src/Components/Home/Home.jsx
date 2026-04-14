import React from "react";
import { useLoaderData } from "react-router";
import { IoMdAdd } from "react-icons/io";
import Cards from "../Cards/Cards";

const Home = () => {
  const friendsData = useLoaderData();

  const stats = [
    { id: 1, label: "Total Friends", value: friendsData.length },
    {
      id: 2,
      label: "On Track",
      value: friendsData.filter((item) => item.status === "on-track").length,
    },
    {
      id: 3,
      label: "Need Attention",
      value: friendsData.filter((item) => item.status === "overdue").length,
    },
    {
      id: 4,
      label: "Interactions This Month",
      value: friendsData.filter((item) => item.days_since_contact <= 30).length,
    },
  ];
  return (
    <>
      <section>
        <div className="hero bg-base-200 mt-20 ">
          <div className="hero-content text-center">
            <div className="max-w-full">
              <h1 className="text-4xl font-bold">
                Friends to keep close in your life
              </h1>
              <p className="py-6 text-gray-600">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the <br /> relationships that matter most.
              </p>
              <button className="btn btn-primary">
                {" "}
                <IoMdAdd />
                Add a Friend
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 mt-10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center transition-all hover:shadow-md"
              >
                <h2 className="text-4xl font-bold text-[#1a3a32] mb-2">
                  {stat.value}
                </h2>
                <p className="text-gray-500 font-medium text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cards friendsData={friendsData}></Cards>
    </>
  );
};
export default Home;
