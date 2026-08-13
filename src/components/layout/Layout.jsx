import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../sections/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
