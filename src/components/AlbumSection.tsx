import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlbumCardComponent from "../components/AlbumCardComponent";
import styles from "./AlbumSection.module.css";

const AlbumSection: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AlbumCardComponent frameImageUrl="../sample2.jpg" />
        </Col>
        <Col>
          <AlbumCardComponent frameImageUrl="../sample.jpeg" />
        </Col>
        <Col>
          <AlbumCardComponent frameImageUrl="../sample2.jpg" />
        </Col>
        <Col>
          <AlbumCardComponent frameImageUrl="../sample.jpeg" />
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumSection;
