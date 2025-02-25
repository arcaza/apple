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

import IPhone16e from "./sections/IPhone16e";
import IPhone16ePage from "./pages/IPhone16ePage";

import IPhone16pro from "./sections/IPhone16pro";
import IPhone16proPage from './pages/IPhone16proPage'

import IPhone16 from "./sections/IPhone16";
import IPhone16Page from "./pages/IPhone16Page";


function App() {
  return (
    <div className="min-h-screen">
      {/* navbar stuff */}
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

        <Route path="/iphone16-e" element={<IPhone16ePage />} />
        <Route path="/iphone16-pro" element={<IPhone16proPage />} />
        <Route path="/iphone16" element={<IPhone16Page />} />
      </Routes>

      {/* main stuff */}
      <IPhone16e />
      <IPhone16pro />
      <IPhone16 />
      <div className="grid grid-cols-2">
        <div>test 1</div>
        <div>test 2</div>
        <div>test 3</div>
        <div>test 4</div>
        <div>test 5</div>
        <div>test 6</div>
      </div>
    </div>
  );
}

export default App;
