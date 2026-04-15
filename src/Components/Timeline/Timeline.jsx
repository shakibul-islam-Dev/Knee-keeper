import { useLoaderData, useNavigation } from "react-router";
import { Phone, MessageSquare, Video, ChevronDown } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Timeline = () => {
  const timelineData = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const statusMap = {
    "on-track": {
      label: "Call",
      icon: <Phone className="text-emerald-600" size={28} />,
    },
    overdue: {
      label: "Text",
      icon: <MessageSquare className="text-rose-500" size={28} />,
    },
    almost: {
      label: "Video",
      icon: <Video className="text-blue-500" size={28} />,
    },
  };

  return (
    <div className="p-8 container mx-auto max-w-2xl bg-white min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-[#111827]">Timeline</h1>

      {/* Filter Bar */}
      <div className="relative mb-10 max-w-xs">
        <div className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-400 bg-white">
          <input
            type="text"
            placeholder="Filter here"
            className="outline-none w-full"
            disabled={isLoading}
          />
          <ChevronDown size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {isLoading
          ? Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-xl"
                >
                  <Skeleton circle width={44} height={44} />
                  <div className="flex-1">
                    <Skeleton width="60%" height={20} />
                    <Skeleton width="30%" height={15} className="mt-2" />
                  </div>
                </div>
              ))
          : timelineData?.map((item) => {
              const config = statusMap[item.status] || {
                label: "Video",
                icon: <Video className="text-blue-500" size={28} />,
              };

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="p-2 bg-gray-50 rounded-lg">{config.icon}</div>

                  <div className="flex-1">
                    <div className="text-[1.1rem]">
                      <span className="font-bold text-[#1a5d40] capitalize">
                        {config.label}
                      </span>{" "}
                      <span className="text-gray-500 font-medium ml-1">
                        with {item.name}
                      </span>
                    </div>
                    <time className="text-sm font-semibold text-gray-400 mt-1 block">
                      {item.next_due_date}
                    </time>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Timeline;
