import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <ToastContainer />

      <main className="flex-1 container mx-auto px-6 py-10">
        {isLoading ? (
          <div className="w-full">
            <Skeleton height={40} width="30%" className="mb-6" />
            <Skeleton height={250} borderRadius={16} className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className=" p-5 rounded-xl">
                  <Skeleton height={150} className="mb-4" />
                  <Skeleton count={2} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Root;
