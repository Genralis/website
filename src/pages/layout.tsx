import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div
      className="
      min-h-dvh
      flex flex-col"
    >
      <Header />
      <main className="flex-1 overflow-hidden min-h-0 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
