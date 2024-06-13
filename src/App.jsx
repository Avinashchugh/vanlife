import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import VanDetail from "./Components/VanDetail";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import DashBoard from "./Components/DashBoard";
import Income from "./Components/Income";
import Review from "./Components/Review";
import HostVans from "./Components/HostVans";
import HostVanDetail from "./Components/HostVanDetail";
import "./server";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>
            
            <Route path="host" element={<HostLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="income" element={<Income />} />
              <Route path="review" element={<Review />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
