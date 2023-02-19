import { FunctionComponent } from "react";
import { Image } from "react-bootstrap";
import styles from "./AlbumCardComponent.module.css";

type AlbumCardComponentType = {
  frameImageUrl?: string;
};

const AlbumCardComponent: FunctionComponent<AlbumCardComponentType> = ({
  frameImageUrl,
}) => {
  return (
    <div >
      <Image fluid alt="" src="../sample.jpeg" />
      <div>
        <p className={styles.albumname}>Tebogo Wedding</p>
      </div>
    </div>
  );
};

export default AlbumCardComponent;
