import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./CollectionSettingSidebar.module.css";

const CollectionSettingSidebar: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src="../frame-9585.svg" />
      <img className={styles.frameItem} alt="" src="../group-9565.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.changeCoverParent}>
        <div className={styles.changeCover}>Change Cover</div>
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.settingsWrapper}>
              <div className={styles.settings}>Settings</div>
            </div>
            <div className={styles.div}>
              <img className={styles.groupIcon} alt="" src="../group.svg" />
            </div>
          </div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.publishbutton}>
          <button className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.publish}>Publish</div>
          </button>
        </div>
        <button className={styles.previewbutton}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.preview}>Preview</div>
          </div>
        </button>
        <div className={styles.sidebarbuttons}>
          <Link className={styles.vectorParent} to="/collection-setting">
            <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
            <div className={styles.collectionSettingsWrapper}>
              <div className={styles.collectionSettings}>
                Collection Settings
              </div>
            </div>
          </Link>
          <a className={styles.vectorGroup}>
            <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
            <div className={styles.designWrapper}>
              <div className={styles.collectionSettings}>Design</div>
            </div>
          </a>
          <Link className={styles.vectorContainer} to="/privacy-setting">
            <img className={styles.vectorIcon4} alt="" src="../vector4.svg" />
            <div className={styles.privacyWrapper}>
              <div className={styles.collectionSettings}>Privacy</div>
            </div>
          </Link>
          <Link className={styles.frameA} to="/download-setting">
            <img className={styles.vectorIcon5} alt="" src="../vector5.svg" />
            <div className={styles.downloadWrapper}>
              <div className={styles.collectionSettings}>Download</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionSettingSidebar;
