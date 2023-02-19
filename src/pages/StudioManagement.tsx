import { FunctionComponent } from "react";
import AlbumSection from "../components/AlbumSection";
import CollectionsDiv from "../components/CollectionsDiv";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";
import styles from "./StudioManagement.module.css";

const StudioManagement: FunctionComponent = () => {
  return (
    <div>
      <TopBarComponent />
      <NavBarComponent />
      <CollectionsDiv />
      <AlbumSection />
    </div>
  );
};

export default StudioManagement;
