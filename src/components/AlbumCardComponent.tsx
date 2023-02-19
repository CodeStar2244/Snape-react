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
        
        <img className={styles.frameChild} alt="" src={frameImageUrl} />
      </div>
    </div>
  );
};

export default AlbumCardComponent;
