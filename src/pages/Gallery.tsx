import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import Addcollection from "../components/Gallery/AddCollection";
import GalleryHome from "../components/Gallery/GalleryHome";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";
import styles from "./Gallery.module.css";
import StudioManagement from "./StudioManagement";


const Gallery: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <TopBarComponent />
            <NavBarComponent />
            {/* <GalleryHome /> */}
            <Addcollection />
        </Container>
    );
};

export default Gallery;
