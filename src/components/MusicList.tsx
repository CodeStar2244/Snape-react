import { FunctionComponent, useCallback } from "react";
import styles from "./MusicList.module.css";

const MusicList: FunctionComponent = () => {
  const onVectorIcon1Click = useCallback(() => {
    // Please sync "Download" to the project
  }, []);

  return (
    <div className={styles.musiclist}>
      <div className={styles.div}>1</div>
      <img
        className={styles.iconBasicUiHeart}
        alt=""
        src="../icon--basic-ui--heart.svg"
      />
      <img
        className={styles.placeImageHere}
        alt=""
        src="../place-image-here1@2x.png"
      />
      <h3 className={styles.picturesInThe}>Pictures In The Sky</h3>
      <div className={styles.francisTyler}>Francis Tyler</div>
      <img className={styles.lineIcon} alt="" src="../line2.svg" />
      <div className={styles.div1}>3:28</div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="../vector1.svg"
        onClick={onVectorIcon1Click}
      />
      <img
        className={styles.iconBasicUiHeart}
        alt=""
        src="../icon--basic-ui--morevertical.svg"
      />
    </div>
  );
};

export default MusicList;
