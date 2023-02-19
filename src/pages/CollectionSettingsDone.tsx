import { FunctionComponent } from "react";
import CollectionSettingSidebar from "../components/CollectionSettingSidebar";
import CollectionSettingsContainer from "../components/CollectionSettingsContainer";
import styles from "./CollectionSettingsDone.module.css";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
import DesignSettings from "../components/DesignSettings";
import { Col, Row } from "react-bootstrap";

const CollectionSettingsDone: FunctionComponent = () => {
  return (
    <>
      <TopBarComponent />
      <NavBarComponent />
      <main className={styles.collectionSettingsdone}>
        <div className={styles.frameParent}>
          <CollectionSettingSidebar />
          <CollectionSettingsContainer />
          {/* <DesignSettings/> */}
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

export default CollectionSettingsDone;
