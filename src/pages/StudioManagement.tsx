import { FunctionComponent } from "react";
import AlbumSection from "../components/AlbumSection";
import CollectionsDiv from "../components/CollectionsDiv";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";
import styles from "./StudioManagement.module.css";

const StudioManagement: FunctionComponent = () => {
  return (
    <div className={styles.studioManagement}>
      <TopBarComponent/>
      <NavBarComponent/>  
      <h4 className={styles.collectionsWrapper}>
        <div className={styles.collections}>4 Collections</div>
      </h4>
      <AlbumSection />
      <CollectionsDiv />
    </div>
  );
};

export default StudioManagement;
