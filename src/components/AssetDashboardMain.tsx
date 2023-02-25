import { FunctionComponent } from "react";
import AssetNavBar from "../components/AssetNavBar";
import styles from "./AssetDashboardMain.module.css";

const AssetDashboardMain: FunctionComponent = () => {
  return (
    <section className={styles.rightcontainer}>
      <AssetNavBar />
      <div className={styles.cardssection}>
        <div className={styles.deviceslisted}>
          <div className={styles.frameParent}>
            <div className={styles.devicesListedParent}>
              <div className={styles.devicesListed}>Devices Listed</div>
              <div className={styles.div}>4</div>
            </div>
            <img className={styles.vectorIcon} alt="" src="../folerSvg.svg" />
          </div>
        </div>
        <div className={styles.devicesmarkedforsale}>
          <div className={styles.frameGroup}>
            <div className={styles.devicesMarkedForSaleParent}>
              <div className={styles.devicesMarkedFor}>Devices Rented Out</div>
              <div className={styles.div1}>0</div>
            </div>
            <img
              className={styles.vectorIcon1}
              alt=""
              src="../dollarImgSvg.svg"
            />
          </div>
        </div>
        <div className={styles.devicesmarkedforsale}>
          <div className={styles.frameGroup}>
            <div className={styles.devicesMarkedForSaleParent}>
              <div className={styles.devicesMarkedFor}>Devices Rented Out</div>
              <div className={styles.div1}>0</div>
            </div>
            <img className={styles.vectorIcon2} alt="" src="../uploadSvg.svg" />
          </div>
        </div>
        <div className={styles.devicelostcard}>
          <div className={styles.frameDiv}>
            <div className={styles.devicesLostParent}>
              <div className={styles.devicesLost}>Devices Lost</div>
              <div className={styles.div3}>0</div>
            </div>
            <img className={styles.vectorIcon3} alt="" src="../lockSvg.svg" />
          </div>
        </div>
      </div>
      <div className={styles.summarySection}>
        <div className={styles.charsection}>
          <div className={styles.ringprogress}>
            <img
              className={styles.ringprgressIcon}
              alt=""
              src="../ringprgress.svg"
            />
            <img
              className={styles.ringprgressIcon1}
              alt=""
              src="../ringprgress1.svg"
            />
            <img
              className={styles.ringprgressIcon2}
              alt=""
              src="../ringprgress2.svg"
            />
            <img
              className={styles.ringprgressIcon3}
              alt=""
              src="../ringprgress3.svg"
            />
          </div>
          <div className={styles.summary}>Summary</div>
        </div>
        <div className={styles.categorysection}>
          <div className={styles.cellphoneParent}>
            <div className={styles.cellphone}>
              <div className={styles.labellegendlight}>
                <div className={styles.labellegendlightChild} />
                <div className={styles.cellPhone}>Cell Phone</div>
              </div>
              <div className={styles.div4}>30%</div>
            </div>
            <div className={styles.camera}>
              <div className={styles.labellegendlight1}>
                <div className={styles.labellegendlightItem} />
                <div className={styles.cellPhone}>Camera</div>
              </div>
              <div className={styles.div5}>34%</div>
            </div>
          </div>
          <div className={styles.cellphoneParent}>
            <div className={styles.screen}>
              <div className={styles.labellegendlight2}>
                <div className={styles.labellegendlightInner} />
                <div className={styles.cellPhone}>Screen</div>
              </div>
              <div className={styles.div6}>6%</div>
            </div>
            <div className={styles.printer}>
              <div className={styles.labellegendlight3}>
                <div className={styles.rectangleDiv} />
                <div className={styles.cellPhone}>Printer</div>
              </div>
              <div className={styles.div7}>30%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDashboardMain;
