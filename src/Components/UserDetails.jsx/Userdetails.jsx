import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import {
  LuAlarmClock,
  LuArchive,
  LuTrash2,
  LuPhone,
  LuMessageSquare,
  LuVideo,
} from "react-icons/lu";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { userId } = useParams();
  const [activites, setActivites] = useState([]);
  const navigate = useNavigate();
  const handleCheckIN = (type) => {
    const newActivaties = {
      id: UserDetails.name,
      action: type,
      text: `${type} with ${userDetails.name}`,
      time: new Date().toLocaleString(),
    };

    let SelectedIcon;
    if (type === "Call")
      SelectedIcon = <LuPhone className="text-emerald-600" />;
    else if (type === "Text")
      SelectedIcon = <LuMessageSquare className="text-blue-600" />;
    else SelectedIcon = <LuVideo className="text-purple-600" />;
    toast.success(newActivaties.text, {
      icon: SelectedIcon,
      position: "top-right",
      autoClose: 3000,
    });
    setActivites([newActivaties, ...activites]);
  };
  const handleNavigatePrevious = () => {
    navigate(-1);
  };
  const handleNavigateNext = () => {
    navigate(`/userDetails/${userId}`);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 mt-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8">
      <ToastContainer />

      <div className="w-full md:w-1/3 space-y-4">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleNavigatePrevious}
            className="flex btn items-center gap-3"
          >
            <FaLongArrowAltLeft />
            Previous
          </button>
          <button
            onClick={handleNavigateNext}
            className="btn flex items-center gap-3"
          >
            Next
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <img
            src={userDetails.picture}
            className="w-24 h-24 rounded-full border-4 border-slate-700 object-cover mb-4"
            alt={userDetails.name}
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {userDetails.name}
          </h2>

          <div className="flex flex-col gap-2 mt-2">
            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {userDetails.status}
            </span>
            <span className="bg-[#D1FAE5] text-[#064E3B] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {userDetails.tags?.[0] || "Member"}
            </span>
          </div>

          <p className="italic text-gray-500 mt-4 text-sm leading-relaxed">
            "Former colleague, great mentor"
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Preferred: {userDetails.email}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition active:scale-95">
            <LuAlarmClock className="text-lg" /> Snooze 2 Weeks
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition active:scale-95">
            <LuArchive className="text-lg" /> Archive
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl font-medium text-red-500 hover:bg-red-50 transition active:scale-95">
            <LuTrash2 className="text-lg" /> Delete
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
            <h3 className="text-4xl font-extrabold text-gray-900">
              {userDetails.days_since_contact}
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Days Since Contact
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
            <h3 className="text-4xl font-extrabold text-gray-900">30</h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Goal (Days)
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm flex flex-col justify-center">
            <h3 className="text-lg font-bold text-gray-900">Feb 27, 2026</h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">Next Due</p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-emerald-900">
              Relationship Goal
            </h4>
            <p className="text-gray-600 font-medium">Connect every 30 days</p>
          </div>
          <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50 transition">
            Edit
          </button>
        </div>

        <div className="bg-slate-50/80 p-6 rounded-2xl border border-gray-100">
          <h4 className="text-lg font-bold text-emerald-950 mb-4">
            Quick Check-In
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => {
                handleCheckIN("Call");
              }}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center gap-2 hover:shadow-md hover:border-emerald-200 transition group"
            >
              <LuPhone className="text-2xl text-gray-700 group-hover:text-emerald-600" />
              <span className="text-sm font-bold text-gray-800">Call</span>
            </button>
            <button
              onClick={() => {
                handleCheckIN("Text");
              }}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center gap-2 hover:shadow-md hover:border-emerald-200 transition group"
            >
              <LuMessageSquare className="text-2xl text-gray-700 group-hover:text-emerald-600" />
              <span className="text-sm font-bold text-gray-800">Text</span>
            </button>
            <button
              onClick={() => {
                handleCheckIN("Video");
              }}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center gap-2 hover:shadow-md hover:border-emerald-200 transition group"
            >
              <LuVideo className="text-2xl text-gray-700 group-hover:text-emerald-600" />
              <span className="text-sm font-bold text-gray-800">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
