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

import AppleWatchSeries10Page from "./pages/AppleWatchSeries10Page";
import AppleWatchSeries10 from "./sections/AppleWatchSeries10";
import AppleWatchBand from "./sections/AppleWatchBand";
import AppleWatchBandPage from "./pages/AppleWatchBandPage";
import IPadPro from "./sections/IPadPro";
import IPadProPage from "./pages/IPadProPage";
import MacBookAir from "./sections/MacBookAir";
import MacBookAirPage from "./pages/MacBookAirPage";
import TradeInPage from "./pages/TradeInPage";
import TradeIn from "./sections/TradeIn";
import AppleCardPage from "./pages/AppleCardPage";
import AppleCard from "./sections/AppleCard";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen">
      {/* navbar setup */}
      <Navbar />
      <Routes>
        {/* navbar */}
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

        {/* main */}
        <Route path="/iphone16-e" element={<IPhone16ePage />} />
        <Route path="/iphone16-pro" element={<IPhone16proPage />} />
        <Route path="/iphone16" element={<IPhone16Page />} />

        {/* grid main */}
        <Route path="/apple-watch-series-10" element={<AppleWatchSeries10Page />}/>
        <Route path="/apple-watch-band" element={<AppleWatchBandPage />}/>
        <Route path="/ipad-pro" element={<IPadProPage />}/>
        <Route path="/macbook-air" element={<MacBookAirPage />}/>
        <Route path="/shop/trade-in" element={<TradeInPage />}/>
        <Route path="/macbook-air" element={<MacBookAirPage />}/>
        <Route path="/apple-card" element={<AppleCardPage />}/>
        

      </Routes>

      {/* main content */}
      <IPhone16e />
      <IPhone16pro />
      <IPhone16 />

      {/* grid content */}
      <div className="grid grid-cols-2">
        <AppleWatchSeries10 />
        <AppleWatchBand />
        <IPadPro />
        <MacBookAir />
        <TradeIn />
        <AppleCard />
      </div>

      {/* TODO */}
      {/* slideshow */}
      <div className="wrapper whitespace-nowrap block">
        <div className="">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/3pfG0GJkoI0OFlPiIDdvUQ/1250x703.jpg"/>
        </div>
        <div className="">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/1250x703.jpg"/>
        </div>
        <div className="">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/5tQkYfzU9bSMUol0GajO4w/1250x703.jpg"/>
        </div> 
        <div className="inline-block h-2 w-2 rounded-full bg-neutral-500 m-2 hover:bg-neutral-600"></div>
        <div className="inline-block h-2 w-2 rounded-full bg-neutral-500 m-2 hover:bg-neutral-600"></div>
        <div className="inline-block h-2 w-2 rounded-full bg-neutral-500 m-2 hover:bg-neutral-600"></div>
        <div className="inline-block h-2 w-2 rounded-full bg-neutral-500 m-2 hover:bg-neutral-600"></div>
        <div className="inline-block h-2 w-2 rounded-full bg-neutral-500 m-2 hover:bg-neutral-600"></div>
      </div>

      {/* footer */}
      <Footer />

    </div>
  );
}

export default App;
