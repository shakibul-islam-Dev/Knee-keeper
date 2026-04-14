import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Timeline from "./Components/Timeline/Timeline.jsx";
import Status from "./Components/Status/Status.jsx";
import UserDetails from "./Components/UserDetails.jsx/Userdetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        loader: async () => await fetch("/friends.json"),
        Component: Home,
      },
      {
        path: "home",
        loader: async () => await fetch("/friends.json"),
        Component: Home,
      },
      {
        path: "timeline",
        loader: async () => await fetch("/friends.json"),
        Component: Timeline,
      },
      {
        path: "status",
        loader: async () => await fetch("/friends.json"),
        Component: Status,
      },
      {
        path: "userDetails/:userID",
        loader: async ({ params }) => {
          const response = await fetch("/friends.json");
          const data = await response.json();
          const singleUser = data.find((user) => user.id == params.userID);
          if (!singleUser) {
            throw new Response("User Not Found", { status: 404 });
          }
          return singleUser;
        },
        Component: UserDetails,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
