import { FunctionComponent } from "react";
import CollectionCard from "../components/CollectionCard";
import styles from "./PrivacySettingsContainer.module.css";

const PrivacySettingsContainer: FunctionComponent = () => {
  return (
    <div className={styles.mainCollectionSetting}>
      <h2 className={styles.collectionSettings}>Privacy</h2>
      <img
        className={styles.mainCollectionSettingChild}
        alt=""
        src="../vector-177.svg"
      />
      <CollectionCard collectionName="Collection Password" type = "text" />
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <div className={styles.pickSomethingShort}>
        Leave blank to make this collection public. Setting a password will require all guests to use this password in order to see the collection. 
        </div>
      </div> 
    </div>
  );
};

export default PrivacySettingsContainer;
