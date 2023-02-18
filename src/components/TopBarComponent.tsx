import { FunctionComponent } from "react";
import styles from "./TopBarComponent.module.css";

const TopBarComponent: FunctionComponent = () => {
  return (
    <header className={styles.topbar} id="headerTopbar">
      <div className={styles.artboard134x81Parent} id="innerHeader">
        <img
          className={styles.artboard134x81}
          alt=""
          src="../snape_logo@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="../notification.svg" />
            <div className={styles.icon}>
              <img className={styles.groupIcon} alt="" src="../settings.svg" />
            </div>
          </div>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../profile_image@2x.png"
            />
            <h3 className={styles.kateMadileng} id="profileName">
              Kate Madileng
            </h3>
          </div>
          <div className={styles.parent}>
            <button className={styles.button}>
              <img className={styles.vectorIcon} alt="" src="../dropDown.svg" />
            </button>
            <button className={styles.groupWrapper}>
              <img className={styles.frameChild} alt="" src="../dotsMenu.svg" />
            </button>
          </div>
        </div>
      </div>
    </header>
   
  );
};

export default TopBarComponent;
