import { FunctionComponent } from "react";
import CollectionSettingSidebar from "../components/CollectionSettingSidebar";
import CollectionSettingsContainer from "../components/CollectionSettingsContainer";
import styles from "./Dashboard.module.css";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
import DesignSettings from "../components/DesignSettings";

const Dashboard: FunctionComponent = () => {
  return (
    <>
    <TopBarComponent/>
    <NavBarComponent/>
    <main className={styles.dashboard} id="dashboard">
      <div className={styles.cardsdashboard}>
        <div className={styles.frameParent}>
          <div className={styles.clientcardParent}>
            <div className={styles.clientcard}>
              <div className={styles.frameGroup}>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.h38ch38bm0014iconset0111Wrapper}>
                      <img
                        className={styles.h38ch38bm0014iconset0111}
                        alt=""
                        src="../h38ch38bm0014iconset011-1.svg"
                      />
                    </div>
                    <div className={styles.clientsParent}>
                      <h3 className={styles.clients}>Clients</h3>
                      <h2 className={styles.h2}>4</h2>
                      <h3 className={styles.last7Days}>Last 7 days</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.photograpny}>
              <div className={styles.clientcard}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameDiv}>
                    <div className={styles.appPhotographyCameraCamPhoWrapper}>
                      <img
                        className={styles.appPhotographyCameraCamPhoIcon}
                        alt=""
                        src="../7627479-app-photography-camera-cam-photo-icon-11@2x.png"
                      />
                    </div>
                    <div className={styles.photographyParent}>
                      <div className={styles.photography}>Photography</div>
                      <h2 className={styles.h21}>3</h2>
                      <h2 className={styles.last7Days1}>Last 7 days</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clientcardParent}>
            <div className={styles.videography}>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.frameParent2}>
                  <div className={styles.appPhotographyCamCameraVidWrapper}>
                    <img
                      className={styles.appPhotographyCamCameraVidIcon}
                      alt=""
                      src="../7627385-app-photography-cam-camera-video-icon-11@2x.png"
                    />
                  </div>
                  <div className={styles.photographyParent}>
                    <h3 className={styles.videography1}>Videography</h3>
                    <h2 className={styles.h22}>1</h2>
                    <h3 className={styles.last7Days2}>Last 7 days</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.revenue}>
              <div className={styles.frameGroup}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.dFinance91Wrapper}>
                    <img
                      className={styles.dFinance91}
                      alt=""
                      src="../3d-finance-9-11@2x.png"
                    />
                  </div>
                  <div className={styles.clientsParent}>
                    <div className={styles.revenue1}>Revenue</div>
                    <h3 className={styles.r8000}>R 8 000</h3>
                    <h3 className={styles.last7Days1}>Last 7 days</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
     
       
    </>
    
  );
};

export default Dashboard;
