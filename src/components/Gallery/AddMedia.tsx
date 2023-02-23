import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Navbar, Form } from "react-bootstrap";
import StudioSideBar from "../StudioSideBar";
import styles from "./AddMedia.module.css";
import AddPhotosNav from "./AddPhotosNav";


const AddMedia: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <AddPhotosNav />
            <div className={styles.addmedia}>
                <p className={styles.nomedia}>
                    You have no media here
                </p>
                <Button className={styles.dragbtn} variant="custom">Add Media</Button>

            </div>
        </Container>
    );
};

export default AddMedia;
