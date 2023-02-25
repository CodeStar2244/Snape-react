import { FunctionComponent } from "react";
import styles from "./AssetNavBar.module.css";

const AssetNavBar: FunctionComponent = () => {
  return (
    <div className={styles.assetnavbar}>
      <div className={styles.assetnavbardiv}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.frameParent}>
          <input
            className={styles.frameChild}
            type="text"
            placeholder="Search IMEI"
          />
          <img className={styles.vectorIcon} alt="" src="../arrowIcon.svg" />
        </div>
        <button className={styles.addNewDeviceWrapper}>
          <div className={styles.addNewDevice}>Add New Device</div>
        </button>
      </div>
      <img className={styles.assetnavbarChild} alt="" src="../vector-177.svg" />
    </div>
  );
};

export default AssetNavBar;
