import React from "react";
import { useLoaderData } from "react-router";
import { Users, MessageSquare, AlertCircle, ChevronDown } from "lucide-react";
import Footer from "../Footer/Footer";

const Timeline = () => {
  const timelineData = useLoaderData();

  // Status onujayi icon select korar function
  const getIcon = (status) => {
    switch (status) {
      case "on-track":
        return <Users className="text-emerald-600" size={28} />;
      case "overdue":
        return <AlertCircle className="text-rose-500" size={28} />;
      default:
        return <MessageSquare className="text-blue-500" size={28} />;
    }
  };

  return (
    <div className="p-8 container mx-auto max-w-2xl bg-white min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-[#111827]">Timeline</h1>

      {/* Filter Bar */}
      <div className="relative mb-10 max-w-xs">
        <div className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-400 bg-white">
          <span>Filter timeline</span>
          <ChevronDown size={20} />
        </div>
      </div>

      {/* Dynamic List from API */}
      <div className="space-y-4">
        {timelineData?.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all cursor-pointer"
          >
            {/* React Icon Section */}
            <div className="p-2 bg-gray-50 rounded-lg">
              {getIcon(item.status)}
            </div>

            <div className="flex-1">
              <div className="text-[1.1rem]">
                <span className="font-bold text-[#1a5d40] capitalize">
                  {item.status === "on-track" ? "Meetup" : "Text"}
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
        ))}
      </div>
    </div>
  );
};

export default Timeline;
