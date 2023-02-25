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
import DragMedia from "./components/Gallery/DragMedia";
import CollectionSetting from "./components/StudioManagement/CollectionSetting";
import PrivacySetting from "./components/StudioManagement/PrivacySetting";
import DownloadStatus from "./components/StudioManagement/DownloadStatus";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/home" />
        <Route path="/gallery/*" />
        <Route path="/studiomanagement" />
      </Route>
    </Routes>
  );
}
export default App;
