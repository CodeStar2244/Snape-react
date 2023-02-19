import { FunctionComponent } from "react";
import styles from "./NavbarNew.module.css";

const NavbarNew: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="../1.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.cameraVideoIcon1Parent}>
          <img
            className={styles.icon}
            alt=""
            src="../172629-camera-video-icon-1.svg"
          />
          <div className={styles.studioManagement}>Studio Management</div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
          </div>
          <div className={styles.gallery}>Gallery</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <div className={styles.assetRegistryWrapper}>
            <div className={styles.assetRegistry}>Asset Registry</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild} alt="" src="../group-9510.svg" />
          <div className={styles.musicWrapper}>
            <div className={styles.music}>Music</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
