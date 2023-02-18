import { FunctionComponent } from "react";
import AlbumCardComponent from "../components/AlbumCardComponent";
import styles from "./AlbumSection.module.css";

const AlbumSection: FunctionComponent = () => {
  return (
    <div className={styles.studioManagementInner}>
      <div className={styles.frameParent}>
        <div className={styles.albumcomponentGroup}>
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
        </div>
        <div className={styles.albumcomponentGroup}>
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
        </div>
      </div>
    </div>
  );
};

export default AlbumSection;
