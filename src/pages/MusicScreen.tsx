import { FunctionComponent } from "react";
import MusicList from "../components/MusicList";
import styles from "./MusicScreen.module.css";
import { Button } from "react-bootstrap";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";

const MusicScreen: FunctionComponent = () => {
  return (
    <main className={styles.musicscreen}>
      <TopBarComponent/>
      <NavBarComponent/>      
      <section className={styles.bottomscreen}>
        <div className={styles.leftbottomsection}>
          <div className={styles.emailParent}>
            <input className={styles.email} type="checkbox" />
            <button className={styles.filemanager}>
              <Button
                className={styles.dashboard}
                variant="contained"
                color="primary"
              >
                Filters
              </Button>
            </button>
          </div>
          <div className={styles.leftbottomsectionChild} />
        </div>
        <section className={styles.rightbottomsection} id="rightBottom">
          <div className={styles.maincontainer}>
            <div className={styles.musicplayer}>
              <div className={styles.song}>
                <img
                  className={styles.placeImageHere}
                  alt=""
                  src="../place-image-here@2x.png"
                />
                <div className={styles.moonGazing}>Moon Gazing</div>
                <h4 className={styles.helenStone}>Helen Stone</h4>
              </div>
              <div className={styles.playerControl}>
                <button className={styles.ovalBg}>
                  <img className={styles.ovalIcon} alt="" src="../oval.svg" />
                </button>
                <button className={styles.iconMusicAudioPause}>
                  <img
                    className={styles.iconPause}
                    alt=""
                    src="../icon--pause.svg"
                  />
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
                <div className={styles.div1}>1:50</div>
                <div className={styles.div2}>2:50</div>
                <img className={styles.lineIcon} alt="" src="../line.svg" />
                <img className={styles.lineIcon1} alt="" src="../line1.svg" />
                <img className={styles.ovalBg1} alt="" src="../oval--bg.svg" />
              </div>
              <h4 className={styles.winnieGordon}>Winnie Gordon</h4>
              <div className={styles.upNext}>Up Next</div>
            </div>
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />   
            <div className={styles.statusparent}>
              <div className={styles.statusbar}>
                <input
                  className={styles.searchbar}
                  type="text"
                  placeholder="Search Music"
                />
                <button className={styles.sortbybutton}>
                  <div className={styles.sortBy}>Sort By</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="../vector2.svg"
                  />
                </button>
                <button className={styles.downloadsbutton}>
                  <h4 className={styles.downloads}>Downloads</h4>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector3.svg"
                  />
                </button>
                <button className={styles.collectionsbutton}>
                  <div className={styles.collections}>Collections</div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="../vector4.svg"
                  />
                </button>
              </div>
              <img
                className={styles.statusparentChild}
                alt=""
                src="../vector-177.svg"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MusicScreen;
