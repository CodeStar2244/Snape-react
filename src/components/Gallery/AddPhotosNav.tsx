import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Navbar, Form } from "react-bootstrap";
import StudioSideBar from "../StudioSideBar";
import styles from "./AddPhotosNav.module.css";


const AddPhotosNav: FunctionComponent = () => {
    return (
        <Navbar className={styles.maincomp}>
            <Container fluid>
                <Navbar.Brand className={styles.mainname}>Gallery</Navbar.Brand>
                <Form className="d-flex">
                    <Button className={styles.collectionbtn} variant="custom">Add Photos</Button>
                    <Button className={styles.collectionbtn} variant="custom">Add Videos</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default AddPhotosNav;
