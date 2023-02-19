import { FunctionComponent } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./AlbumCardComponent.module.css";

type AlbumCardComponentType = {
  frameImageUrl?: string;
};

const AlbumCardComponent: FunctionComponent<AlbumCardComponentType> = ({
  frameImageUrl,
}) => {
  return (
    <div >
      <div>
        <Image fluid alt="" src="../sample.jpeg" />
      </div>
      <div>
        <p className={styles.albumname}>Tebogo Wedding</p>
      </div>
      <Row>
        <Col><p className={styles.albumdetails}>January 6th,2023</p></Col>
        <Col><p className={styles.albumdetails}>230 photos</p></Col>
        <Col><p className={styles.albumdetails}>1 videos</p></Col>
        <Col><p className={styles.albumdetails}>Published</p></Col>
      </Row>
    </div>
  );
};

export default AlbumCardComponent;
