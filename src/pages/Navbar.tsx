import { FunctionComponent, useCallback } from "react";
import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  const onStudioManagementTextClick = useCallback(() => {
    // Please sync "Studio" to the project
  }, []);

  const onGalleryTextClick = useCallback(() => {
    // Please sync "Studio Management" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Asset Registry" to the project
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Please sync "Music" to the project
  }, []);

  return (
    <div className={styles.navbar}>
      <img className={styles.navbarChild} alt="" src="../vector-176.svg" />
      <div className={styles.groupParent}>
        <a className={styles.parent}>
          <img className={styles.icon} alt="" src="../1.svg" />
          <div className={styles.home}>Home</div>
        </a>
        <a className={styles.cameraVideoIcon1Parent}>
          <img
            className={styles.icon}
            alt=""
            src="../172629-camera-video-icon-1.svg"
          />
          <div
            className={styles.studioManagement}
            onClick={onStudioManagementTextClick}
          >
            Studio Management
          </div>
        </a>
        <a className={styles.groupContainer}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupFrame}>
              <div className={styles.groupFrame}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
          </div>
          <div className={styles.gallery} onClick={onGalleryTextClick}>
            Gallery
          </div>
        </a>
        <a className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="../vector7.svg" />
          <div
            className={styles.assetRegistryWrapper}
            onClick={onGroupContainer3Click}
          >
            <div className={styles.assetRegistry}>Asset Registry</div>
          </div>
        </a>
        <a className={styles.groupA}>
          <img className={styles.groupIcon} alt="" src="../group-9510.svg" />
          <div className={styles.musicWrapper} onClick={onGroupContainer4Click}>
            <div className={styles.music}>Music</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
