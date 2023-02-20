import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import NavBarComponent from "../components/NavbarComponent";
import StudioSideBar from "../components/StudioSideBar";
import TopBarComponent from "../components/TopBarComponent";
import styles from "./Dashboard.module.css";
import StudioManagement from "./StudioManagement";


const Dashboard: FunctionComponent = () => {
  return (
    <Container fluid className={styles.outermain}>
      <TopBarComponent />
      <NavBarComponent />
      <StudioManagement />
      {/* <Route path="/" element={<StudioManagement />}></Route> */}
      {/* <Route path="studiomanagement" element={<StudioManagement />} /> */}
    </Container>
  );
};

export default Dashboard;
