import { FunctionComponent } from "react";
import MusicCard from "../components/MusicCard";
import styles from "./MoonGazingCard.module.css";

const MoonGazingCard: FunctionComponent = () => {
  return (
    <div className={styles.rightbottom}>
      <div className={styles.subnavigation}>
        <input
          className={styles.subnavigationChild}
          type="text"
          placeholder="Search Music"
        />
        <button className={styles.sortByParent}>
          <div className={styles.sortBy}>Sort By</div>
          <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
        </button>
        <button className={styles.downloadsParent}>
          <div className={styles.downloads}>Downloads</div>
          <img className={styles.vectorIcon1} alt="" src="../vector2.svg" />
        </button>
        <button className={styles.collectionsParent}>
          <div className={styles.collections}>Collections</div>
          <img className={styles.vectorIcon2} alt="" src="../vector3.svg" />
        </button>
      </div>
      <div className={styles.musiclistcontainer}>
        <MusicCard
          iconBasicUiHeart="../icon--basic-ui--heart.svg"
          placeImageHere="../place-image-here@2x.png"
          line="../line.svg"
          line1="../line1.svg"
          vector="../vector4.svg"
          iconBasicUiMoreVertical="../icon--basic-ui--morevertical.svg"
          propPadding="var(--padding-10xs) var(--padding-md)"
        />
        <MusicCard
          iconBasicUiHeart="../icon--basic-ui--heart1.svg"
          placeImageHere="../place-image-here1@2x.png"
          line="../line2.svg"
          line1="../line3.svg"
          vector="../vector5.svg"
          iconBasicUiMoreVertical="../icon--basic-ui--morevertical1.svg"
          propPadding="var(--padding-10xs) 0px"
        />
        <MusicCard
          iconBasicUiHeart="../icon--basic-ui--heart2.svg"
          placeImageHere="../place-image-here2@2x.png"
          line="../line4.svg"
          line1="../line5.svg"
          vector="../vector6.svg"
          iconBasicUiMoreVertical="../icon--basic-ui--morevertical2.svg"
        />
        <MusicCard
          iconBasicUiHeart="../icon--basic-ui--heart3.svg"
          placeImageHere="../place-image-here3@2x.png"
          line="../line6.svg"
          line1="../line7.svg"
          vector="../vector7.svg"
          iconBasicUiMoreVertical="../icon--basic-ui--morevertical3.svg"
          propPadding="var(--padding-10xs) 0px"
        />
        <MusicCard
          iconBasicUiHeart="../icon--basic-ui--heart4.svg"
          placeImageHere="../place-image-here4@2x.png"
          line="../line8.svg"
          line1="../line9.svg"
          vector="../vector8.svg"
          iconBasicUiMoreVertical="../icon--basic-ui--morevertical4.svg"
          propPadding="var(--padding-10xs) 0px"
        />
        <MusicCard
          iconBasicUiHeart="../icon--basic-ui--heart5.svg"
          placeImageHere="../place-image-here5@2x.png"
          line="../line10.svg"
          line1="../line11.svg"
          vector="../vector9.svg"
          iconBasicUiMoreVertical="../icon--basic-ui--morevertical5.svg"
        />
      </div>
      <div className={styles.musicPlayer}>
        <div className={styles.song}>
          <img
            className={styles.placeImageHere}
            alt=""
            src="../place-image-here6@2x.png"
          />
          <div className={styles.moonGazing}>Moon Gazing</div>
          <div className={styles.helenStone}>Helen Stone</div>
        </div>
        <div className={styles.playerControl}>
          <button className={styles.ovalBg}>
            <img className={styles.ovalIcon} alt="" src="../oval.svg" />
          </button>
          <button className={styles.iconMusicAudioPause}>
            <img className={styles.iconPause} alt="" src="../icon--pause.svg" />
          </button>
          <button className={styles.iconMusicAudioPauseC}>
            <img
              className={styles.iconRewind}
              alt=""
              src="../icon--rewind.svg"
            />
          </button>
          <button className={styles.iconMusicAudioPauseC1}>
            <img
              className={styles.iconRotateCcw}
              alt=""
              src="../icon--rotateccw.svg"
            />
          </button>
          <button className={styles.iconMusicAudioPauseC2}>
            <img
              className={styles.iconRewind}
              alt=""
              src="../icon--fastforward.svg"
            />
          </button>
          <button className={styles.iconMusicAudioPauseC3}>
            <img
              className={styles.iconShuffle}
              alt=""
              src="../icon--shuffle.svg"
            />
          </button>
        </div>
        <div className={styles.timerControl}>
          <div className={styles.div}>1:50</div>
          <div className={styles.lineParent}>
            <img className={styles.lineIcon} alt="" src="../line12.svg" />
            <img className={styles.lineIcon1} alt="" src="../line13.svg" />
            <img className={styles.ovalBg1} alt="" src="../oval--bg.svg" />
          </div>
          <div className={styles.div}>2:50</div>
        </div>
        <div className={styles.upNextParent}>
          <div className={styles.upNext}>Up Next</div>
          <div className={styles.winnieGordon}>Winnie Gordon</div>
        </div>
      </div>
    </div>
  );
};

export default MoonGazingCard;
