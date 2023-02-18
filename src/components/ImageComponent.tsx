import { FunctionComponent } from "react";
import styles from "./ImageComponent.module.css";

const ImageComponent: FunctionComponent = () => {
  return (
    <section className={styles.designsettingsInner}>
      <div className={styles.frameParent}>
        <nav className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.coverParent}>
              <button className={styles.cover}>Cover</button>
              <button className={styles.collection}>Collection</button>
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameDiv}>
            <button className={styles.coverGroup}>
              <div className={styles.cover1}>Cover</div>
              <img className={styles.vectorIcon} alt="" src="../imageContainerVector.svg" />
            </button>
            <button className={styles.focalPointParent}>
              <div className={styles.focalPoint}>Focal Point</div>
              <img
                className={styles.frameItem}
                alt=""
                src="../group-9532.svg"
              />
            </button>
          </div>
        </nav>
        <div className={styles.frameParent1}>
          <img
            className={styles.frameInner}
            alt=""
            src="../frame-9616@2x.png"
          />
          <img className={styles.frameIcon} alt="" src="../frame-9617@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default ImageComponent;
