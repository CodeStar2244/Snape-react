import { FunctionComponent } from "react";
import styles from "./TopBarContainer.module.css";

const TopBarContainer: FunctionComponent = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.artboard134x81Parent}>
        <img
          className={styles.artboard134x81}
          alt=""
          src="../artboard-134x8-1@2x.png"
        />
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="../group-9284.svg" />
          <img className={styles.frameItem} alt="" src="../frame-2.svg" />
          <img className={styles.icon} alt="" src="../46.svg" />
          <div className={styles.kateMadileng}>Kate Madileng</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBarContainer;
