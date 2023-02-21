import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import GalleryGrid from "./GalleryGrid";
import styles from "./GalleryHome.module.css";
import GalleryNav from "./GalleryNav";


const GalleryHome: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <GalleryNav />
            <div className={styles.collectioncount}>
                <p className={styles.collectioncountdis}>
                    6 collections
                </p>
            </div>
            <GalleryGrid />
        </Container>
    );
};

export default GalleryHome;
