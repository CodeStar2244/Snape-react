import { FunctionComponent } from "react";
import styles from "./GridContainer.module.css";

const GridContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.typographyParent}>
        <div className={styles.typography}>Typography</div>
        <div className={styles.covertitle}>
          <div className={styles.covertitleChild} />
          <img
            className={styles.covertitleItem}
            alt=""
            src="../frame-9629.svg"
          />
        </div>
      </div>
      <div className={styles.colorParent}>
        <div className={styles.typography}>Color</div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameDiv}>
                <div className={styles.backgroundParent}>
                  <div className={styles.background}>Background</div>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="../ellipse-201.svg"
                  />
                </div>
                <div className={styles.backgroundParent}>
                  <div className={styles.accent}>Accent</div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../ellipse-202.svg"
                  />
                </div>
                <div className={styles.backgroundParent}>
                  <div className={styles.button}>Button</div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../ellipse-203.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.lightParent}>
              <div className={styles.light}>Light</div>
              <div className={styles.lineDiv} />
            </div>
          </div>
          <img
            className={styles.covertitleItem}
            alt=""
            src="../frame-9636.svg"
          />
        </div>
      </div>
      <div className={styles.gridstyle}>
        <div className={styles.gridstyleInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.gridStyleParent}>
              <div className={styles.gridStyle}>Grid Style</div>
              <div className={styles.frameParent1}>
                <div className={styles.verticalParent}>
                  <div className={styles.vertical}>Vertical</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild} />
                      <div className={styles.groupItem} />
                      <div className={styles.groupInner} />
                      <div className={styles.groupChild1} />
                    </div>
                  </div>
                </div>
                <div className={styles.horizontalParent}>
                  <div className={styles.horizontal}>Horizontal</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.groupDiv}>
                      <div className={styles.groupChild2} />
                      <div className={styles.groupChild3} />
                      <div className={styles.groupChild4} />
                      <div className={styles.groupChild5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridSpacingParent}>
        <div className={styles.gridStyle}>Grid Spacing</div>
        <div className={styles.frameParent1}>
          <div className={styles.verticalParent}>
            <div className={styles.vertical}>Regular</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild6} />
                <div className={styles.groupChild7} />
                <div className={styles.groupChild8} />
                <div className={styles.groupChild9} />
              </div>
            </div>
          </div>
          <div className={styles.horizontalParent}>
            <div className={styles.large}>Large</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild10} />
                <div className={styles.groupChild11} />
                <div className={styles.groupChild12} />
                <div className={styles.groupChild13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
