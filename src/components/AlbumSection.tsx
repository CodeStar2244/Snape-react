import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlbumCardComponent from "../components/AlbumCardComponent";
import styles from "./AlbumSection.module.css";

const AlbumSection: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
        </Col>
        <Col>
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
        </Col>
        <Col>
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
        </Col>
        <Col>
          <AlbumCardComponent frameImageUrl="../frame-9669.svg" />
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumSection;
