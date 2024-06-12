import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  return (
    <div>
      <div className="site-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
