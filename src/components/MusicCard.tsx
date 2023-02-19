import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MusicCard.module.css";

type MusicCardType = {
  iconBasicUiHeart?: string;
  placeImageHere?: string;
  line?: string;
  line1?: string;
  vector?: string;
  iconBasicUiMoreVertical?: string;

  /** Style props */
  propPadding?: Property.Padding;
};

const MusicCard: FunctionComponent<MusicCardType> = ({
  iconBasicUiHeart,
  placeImageHere,
  line,
  line1,
  vector,
  iconBasicUiMoreVertical,
  propPadding,
}) => {
  const musicListStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.musiclist} style={musicListStyle}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>1</div>
          <img
            className={styles.iconBasicUiHeart}
            alt=""
            src={iconBasicUiHeart}
          />
          <img className={styles.placeImageHere} alt="" src={placeImageHere} />
          <div className={styles.picturesInThe}>Pictures In The Sky</div>
        </div>
        <div className={styles.francisTylerParent}>
          <div className={styles.div}>Francis Tyler</div>
          <div className={styles.lineParent}>
            <img className={styles.lineIcon} alt="" src={line} />
            <div className={styles.lineGroup}>
              <img className={styles.lineIcon1} alt="" src={line1} />
              <div className={styles.ovalBg} />
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}>3:28</div>
          <img className={styles.vectorIcon} alt="" src={vector} />
          <img
            className={styles.iconBasicUiHeart}
            alt=""
            src={iconBasicUiMoreVertical}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
