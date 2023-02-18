import { FunctionComponent } from "react";
import CollectionSettingSidebar from "../components/CollectionSettingSidebar";
import PrivacySettingsContainer from "../components/PrivacySettingsContainer";
import styles from "./PrivacySettings.module.css";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
import DesignSettings from "../components/DesignSettings";
import DownloadSettingsContainer from "../components/DownloadSettingsContainer";

const DownloadSettings: FunctionComponent = () => {
  return (
    <>
     <TopBarComponent/>
     <NavBarComponent/>
      <main className={styles.collectionSettingsdone}>
      <div className={styles.frameParent}>
        <CollectionSettingSidebar /> 
        <DownloadSettingsContainer/> 
      </div>
      <div className={styles.collectiontitleWrapper}>
        <div className={styles.collectiontitle}>
          <h1 className={styles.tebogoWeddingWrapper}>
            <div className={styles.tebogoWedding}>Tebogo Wedding</div>
          </h1>
          <h5 className={styles.january6th2023Wrapper}>
            <div className={styles.preview}>January 6th, 2023</div>
          </h5>
          <h5 className={styles.previewWrapper}>
            <div className={styles.preview}>Preview</div>
          </h5>
        </div>
      </div>
    </main></>
    
  );
};

export default DownloadSettings;
