import { FunctionComponent } from "react";
import TopBarContainer from "../components/TopBarContainer";
import MoonGazingCard from "../components/MoonGazingCard";
import styles from "./MusicScreen.module.css";
import NavbarNew from "../components/NavbarNew";

const MusicScreen1: FunctionComponent = () => {
  return (
    <div className={styles.musicscreen1}>
      <TopBarContainer />
      <img
        className={styles.musicscreen1Child}
        alt=""
        src="../vector-175.svg"
      />
      <div className={styles.musicscreen1Item} />
      <NavbarNew/>
      <div className={styles.bottomscreen}>
        <div className={styles.leftbottom}>
          <div className={styles.leftbottomInner}>
            <div className={styles.downloadsParent}>
              <div className={styles.downloads}>Downloads</div>
              <div className={styles.frameParent}>
                <div className={styles.tebogoWeddingParent}>
                  <div className={styles.tebogoWedding}>Tebogo Wedding</div>
                  <div className={styles.january6th2023}>January 6th, 2023</div>
                  <div className={styles.songs}>15 Songs</div>
                </div>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../ellipse-198.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../ellipse-199.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../ellipse-200.svg"
                  />
                </div>
              </div>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-991@2x.png"
              />
            </div>
          </div>
        </div>
        <MoonGazingCard />
      </div>
    </div>
  );
};

export default MusicScreen1;
