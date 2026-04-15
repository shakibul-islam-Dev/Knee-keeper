import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="relative w-full h-[calc(100vh-140px)] flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="0.441602%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="20s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#Gradient1)">
            <animate
              attributeName="x"
              dur="25s"
              values="25%;-25%;25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="20s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="30s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            Welcome to <span className="text-blue-600">Keen-Keeper</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto capitalize leading-relaxed">
            our personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="flex justify-center">
          <Link to="home">
            <button className="group relative flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full transition-all hover:bg-blue-600 active:scale-95 shadow-2xl hover:shadow-blue-500/40 cursor-pointer">
              Explore More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default Welcome;
