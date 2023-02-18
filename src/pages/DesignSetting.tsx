import { FunctionComponent } from "react";
import CollectionSettingSidebar from "../components/CollectionSettingSidebar";
import CollectionSettingsContainer from "../components/CollectionSettingsContainer";
import styles from "./CollectionSettingsDone.module.css";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
import DesignSettings from "../components/DesignSettings";

const DesignSettingsPage: FunctionComponent = () => {
  return (
    <>
    <TopBarComponent/>
    <NavBarComponent/>
    <CollectionSettingSidebar/>
    <DesignSettings/>
     
       
    </>
    
  );
};

export default DesignSettingsPage;
