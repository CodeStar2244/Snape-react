import { FunctionComponent } from "react";
import CollectionCard from "../components/CollectionCard";
import styles from "./CollectionSettingsContainer.module.css";

const CollectionSettingsContainer: FunctionComponent = () => {
  return (
    <div className={styles.mainCollectionSetting}>
      <h2 className={styles.collectionSettings}>Collection Settings</h2>
      <img
        className={styles.mainCollectionSettingChild}
        alt=""
        src="../vector-177.svg"
      />
      <CollectionCard collectionName="Collection Name" type = "text" />
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <div className={styles.pickSomethingShort}>
          Pick something short and sweet. Imagine choosing a title for a photo
          album cover.
        </div>
      </div>
      <CollectionCard collectionName="Event Date" type = "date" />
      <CollectionCard collectionName="Collection Url" type = "text" />
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <p className={styles.giveYourCollection}>
          Give your collection a unique url. Your client will be using this URL
          to access your Collection.
        </p>
      </div>
      <div className={styles.clientWrapper}>
        <div className={styles.client}>
          <label className={styles.collectionStatus} htmlFor="Collection Statu">Collection Status</label>
          <select id="Collection Status" className={styles.form}>
            <option value="Helo">Hello</option>
            <option value="Helo">Hello</option>
            <option value="Helo">Hello</option>
            <option value="Helo">Hello</option>


          </select>
        </div>
      </div>
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <p className={styles.giveYourCollection}>
          Collections with Preview status can only be seen by you. Publish your
          collection to make it publicly accessible.
        </p>
      </div>
      <CollectionCard collectionName="Category Tags" type = "text" />
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <p className={styles.giveYourCollection}>
          What kind of collection is this? Separate your tags with a comma. e.g.
          wedding, outdoor, summer.
        </p>
      </div>
      <div className={styles.mainCollectionSettingInner}>
        <div className={styles.socialSharingButtonsParent}>
          <CollectionCard collectionName="Social Sharing Buttons" type = "text" />
        </div>
      </div>
      <div className={styles.pickSomethingShortAndSweetWrapper}>
        <p className={styles.giveYourCollection}>
          Snape gives your clients the ability to share your work everywhere.
          Your work will be seen by as many as possible along with your brand.
        </p>
      </div>
    </div>
  );
};

export default CollectionSettingsContainer;
