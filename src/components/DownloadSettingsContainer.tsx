import { FunctionComponent } from "react";
import CollectionCard from "../components/CollectionCard";
import styles from "./PrivacySettingsContainer.module.css";

const DownloadSettingsContainer: FunctionComponent = () => {
  return (
    <div className={styles.mainCollectionSetting}>
      <h2 className={styles.collectionSettings}>Download Status</h2>
      <img
        className={styles.mainCollectionSettingChild}
        alt=""
        src="../vector-177.svg"
      />
      <CollectionCard collectionName="Gallary Download" type = "text" />
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <div className={styles.pickSomethingShort}>
        Turn on to allow your clients to download from this Collection.        </div>
      </div> 
    
      <CollectionCard collectionName="Download Pin" type = "text" />
    </div>
  );
};

export default DownloadSettingsContainer;
