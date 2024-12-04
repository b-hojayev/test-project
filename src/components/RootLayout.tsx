import { Outlet } from "react-router";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <main className="w-full min-h-screen h-full">
      <Navbar />

      <div className="max-w-screen-lg w-full mx-auto h-full px-4">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
