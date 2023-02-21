import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Navbar, Form } from "react-bootstrap";
import StudioSideBar from "../StudioSideBar";
import styles from "./DragMedia.module.css";


const DragMedia: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <Navbar className={styles.maincomp}>
                <Container fluid>
                    <Navbar.Brand className={styles.mainname}>Gallery</Navbar.Brand>
                    <Form className="d-flex">
                        <Button className={styles.collectionbtn} variant="custom">Add Photos</Button>
                        <Button className={styles.collectionbtn} variant="custom">Add Videos</Button>
                    </Form>
                </Container>
            </Navbar>
            <div className={styles.addmedia}>
                <p className={styles.nomedia}>
                    Drag photos here
                </p>
                <Button className={styles.dragbtn} variant="custom">Select photos from your computer</Button>

            </div>
        </Container>
    );
};

export default DragMedia;
