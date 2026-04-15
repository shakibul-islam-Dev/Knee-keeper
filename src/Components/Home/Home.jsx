import { useLoaderData, useNavigation } from "react-router";
import { IoMdAdd } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Cards from "../Cards/Cards";

const Home = () => {
  const friendsData = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const stats = [
    { id: 1, label: "Total Friends", value: friendsData?.length || 0 },
    {
      id: 2,
      label: "On Track",
      value:
        friendsData?.filter((item) => item.status === "on-track").length || 0,
    },
    {
      id: 3,
      label: "Need Attention",
      value:
        friendsData?.filter((item) => item.status === "overdue").length || 0,
    },
    {
      id: 4,
      label: "Interactions This Month",
      value:
        friendsData?.filter((item) => item.days_since_contact <= 30).length ||
        0,
    },
  ];

  return (
    <>
      <section>
        <div className="hero bg-base-200 mt-20">
          <div className="hero-content text-center">
            <div className="max-w-full">
              <h1 className="text-4xl font-bold">
                Friends to keep close in your life
              </h1>
              <p className="py-6 text-gray-600">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the <br /> relationships that matter most.
              </p>
              <button className="btn btn-primary" disabled={isLoading}>
                <IoMdAdd /> Add a Friend
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
                  {isLoading ? <Skeleton width={60} /> : stat.value}
                </h2>
                <p className="text-gray-500 font-medium text-sm lg:text-base">
                  {isLoading ? <Skeleton width={100} /> : stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className=" p-4 rounded-lg">
              <Skeleton height={200} />
              <Skeleton count={2} />
            </div>
            <div className=" p-4 rounded-lg">
              <Skeleton height={200} />
              <Skeleton count={2} />
            </div>
            <div className=" p-4 rounded-lg">
              <Skeleton height={200} />
              <Skeleton count={2} />
            </div>
          </div>
        ) : (
          <Cards friendsData={friendsData} />
        )}
      </div>
    </>
  );
};

export default Home;
