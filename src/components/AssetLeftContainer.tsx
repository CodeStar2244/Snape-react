import { FunctionComponent, useCallback } from "react";
import styles from "./AssetLeftContainer.module.css";

const AssetLeftContainer: FunctionComponent = () => {
  const onMyDevicesClick = useCallback(() => {
    // Please sync "Add Device" to the project
  }, []);

  return (
    <section className={styles.assetleftcontainer}>
      <div className={styles.buttoncontainres}>
        <button className={styles.dashboard}>
          <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
          <div className={styles.dashboard1}>Dashboard</div>
        </button>
        <button className={styles.myDevices} onClick={onMyDevicesClick}>
          <img className={styles.vectorIcon1} alt="" src="../vector2.svg" />
          <div className={styles.myDevices1}>My Devices</div>
        </button>
        <button className={styles.getCover}>
          <img className={styles.vectorIcon2} alt="" src="../vector3.svg" />
          <div className={styles.productsForSale}>Get Cover</div>
        </button>
        <button className={styles.prouctsForSale}>
          <img className={styles.vectorIcon3} alt="" src="../vector4.svg" />
          <div className={styles.productsForSale}>Products For Sale</div>
        </button>
        <button className={styles.producsForRent}>
          <img className={styles.vectorIcon4} alt="" src="../vector5.svg" />
          <div className={styles.productsForSale}>Products For Rent</div>
        </button>
      </div>
    </section>
  );
};

export default AssetLeftContainer;
