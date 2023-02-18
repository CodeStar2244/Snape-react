import { FunctionComponent, useCallback } from "react";
import styles from "./CollectionsDiv.module.css";

const CollectionsDiv: FunctionComponent = () => {
  const onGroupContainer6Click = useCallback(() => {
    // Please sync "Add New Collection" to the project
  }, []);

  return (
    <div className={styles.collectionbarWrapper}>
      <div className={styles.collectionbar}>
        <div className={styles.collectionbarInner}>
          <nav className={styles.frameParent}>
            <h3 className={styles.collectionsWrapper}>
              <div className={styles.collections}>Collections</div>
            </h3>
            <div className={styles.frameGroup}>
              <button className={styles.groupWrapper}>
                <div
                  className={styles.rectangleParent}
                  onClick={onGroupContainer6Click}
                >
                  <div className={styles.groupChild} />
                  <div className={styles.newCollection}>+ New Collection</div>
                </div>
              </button>
              <button className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector1.svg"
                />
              </button>
              <button className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector2.svg"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CollectionsDiv;
