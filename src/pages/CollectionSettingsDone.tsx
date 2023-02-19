import { FunctionComponent } from "react";
import CollectionSettingSidebar from "../components/CollectionSettingSidebar";
import CollectionSettingsContainer from "../components/CollectionSettingsContainer";
import styles from "./CollectionSettingsDone.module.css";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
import DesignSettings from "../components/DesignSettings";
import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";

const CollectionSettingsDone: FunctionComponent = () => {
  return (
    <>
      <TopBarComponent />
      <NavBarComponent />
      <SideBar />
    </>

  );
};

export default CollectionSettingsDone;
