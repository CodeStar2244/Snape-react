import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CollectionSettingsDone from "./pages/CollectionSettingsDone";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import { useEffect } from "react";
import DesignSettingsPage from "./pages/DesignSetting";
import StudioManagement from "./pages/StudioManagement";
import PrivacySettings from "./pages/PrivacySettings";
import DownloadSettings from "./pages/DownloadSettings";
import Dashboard from "./pages/Dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/collection-settingsdone":
        title = "";
        metaDescription = "";
        break;
      case "/topbar":
        title = "";
        metaDescription = "";
        break;
      case "/navbar":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>

      <Route
        path="/collection-setting"
        element={<CollectionSettingsDone />}
      />
      <Route
        path="/"
        element={<Dashboard/>}
      />
      <Route
        path="/privacy-setting"
        element={<PrivacySettings/>}
      />
      <Route
        path="/download-setting"
        element={<DownloadSettings/>}
      />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/designsetting" element={<DesignSettingsPage/>} />
      <Route path="/studiomanagement" element={<StudioManagement/>} />


      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
