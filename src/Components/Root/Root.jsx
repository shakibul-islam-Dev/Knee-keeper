import Nav from "../Navigation/Nav";
import { ToastContainer } from "react-toastify";
//  const notify = () => toast("Wow so easy!");

import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Nav></Nav>

      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;
