import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import CollectionSetting from "../components/StudioManagement/CollectionSetting";
import DownloadStatus from "../components/StudioManagement/DownloadStatus";
import PrivacySetting from "../components/StudioManagement/PrivacySetting";
import StudioSideBar from "../components/StudioSideBar";
import styles from "./Dashboard.module.css";


const StudioManagement: FunctionComponent = () => {
  return (
    <Container fluid className={styles.outermain}>
      <Row>
        <Col xl={3} lg={3} sm={3}>
          <StudioSideBar />
        </Col>
        <Col xl={9} lg={9} sm={9}>
          <Routes>
            <Route path="" element={<CollectionSetting/>} />
            <Route path="/studiomanagement" element={<LoginForm />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default StudioManagement;
