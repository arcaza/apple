import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import MacPage from "./pages/MacPage";
import IpadPage from "./pages/IpadPage";
import WatchPage from "./pages/WatchPage";
import VisionPage from "./pages/VisionPage";
import AirpodsPage from "./pages/AirpodsPage";
import TvHomePage from "./pages/TvHomePage";
import ServicesPage from "./pages/ServicesPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipad" element={<IpadPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/airpods" element={<AirpodsPage />} />
        <Route path="/tv-home" element={<TvHomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </div>
  );
}

export default App;
