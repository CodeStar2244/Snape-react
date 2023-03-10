import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
import "./fontawesome/css/all.css"
import Gallery from "./pages/Gallery";
import AddCollection from "./components/Gallery/AddCollection";
import CollectionSetting from "./components/StudioManagement/CollectionSetting";
import PrivacySetting from "./components/StudioManagement/PrivacySetting";
import DownloadStatus from "./components/StudioManagement/DownloadStatus";
import Login from "./pages/Login";
import AssetRegistry from "./pages/AssetRegistry";
import TopBarComponent from "./components/TopBarComponent";
import NavBarComponent from "./components/NavbarComponent";
import Constants from "./Config/Constants";
import Music from "./pages/Music";
import 'react-h5-audio-player/lib/styles.css';
import AssetDeviceList from "./components/AssetRegistry/DeviceList";
import AssetDashboardMain from "./components/AssetRegistry/AssetDashboardMain";
import ForSaleList from "./components/AssetRegistry/ForSaleList";
import MusicDownloads from "./pages/MusicDownloads";
import MusicDownloadList from "./pages/MusicDownloadList";
import DragMedia from "./components/Gallery/DragMedia";
import MusicCollectionList from "./pages/MusicCollectionList";
import MusicCollections from "./pages/MusicCollections";


function App() {
  return (
    <>
    <TopBarComponent/>
    <NavBarComponent/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/studiomanagement" element={<Gallery />} />
      <Route path="/gallery/newcollection" element={<AddCollection />} />
      <Route path="/gallery/addcollection" element={<DragMedia />} />
      <Route path="/setting/collection-setting" element={<CollectionSetting />} />
      <Route path="/setting/privacy" element={<PrivacySetting />} />
      <Route path="/setting/download" element={<DownloadStatus />} />
      <Route path="/asset-registry" element={<AssetRegistry/>}>
        <Route path="" element= {<AssetDashboardMain/>}></Route>
        <Route path="device-list" element={<AssetDeviceList/>}></Route>
        <Route path="for-sale" element={<ForSaleList/>}></Route>
      </Route>
      <Route path="/music" element={<Music />} />
      <Route path="/music/downloads" element={<MusicDownloadList/>} />
      <Route path="/music/collections" element={<MusicCollectionList/>} />
      <Route path="/music/downloads/:id" element={<MusicDownloads/>} />
      <Route path="/music/collections/:id" element={<MusicCollections/>} />
    </Routes>
    </>
  );
}
export default App;
