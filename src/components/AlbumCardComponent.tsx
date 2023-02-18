import { FunctionComponent } from "react";
import styles from "./AlbumCardComponent.module.css";

type AlbumCardComponentType = {
  frameImageUrl?: string;
};

const AlbumCardComponent: FunctionComponent<AlbumCardComponentType> = ({
  frameImageUrl,
}) => {
  return (
    <div className={styles.albumcomponent}>
      <div className={styles.albumcomponentChild} />
      <div className={styles.frameParent}>
        <div className={styles.tebogoWeddingWrapper}>
          <div className={styles.tebogoWedding}>Tebogo Wedding</div>
        </div>
        <div className={styles.frameGroup}>
          <h4 className={styles.january6th2023Wrapper}>
            <div className={styles.photos}>January 6th, 2023</div>
          </h4>
          <div className={styles.frameWrapper}>
            <h4 className={styles.photosWrapper}>
              <div className={styles.photos}>230 Photos</div>
            </h4>
          </div>
          <div className={styles.frameContainer}>
            <h4 className={styles.videosWrapper}>
              <div className={styles.photos}>1 videos</div>
            </h4>
          </div>
          <div className={styles.frameDiv}>
            <h4 className={styles.publishedWrapper}>
              <div className={styles.photos}>Published</div>
            </h4>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src={frameImageUrl} />
      </div>
    </div>
  );
};

export default AlbumCardComponent;
