import { width } from "@mui/system";
import { FunctionComponent } from "react";
import { Button, Col, Container, Dropdown, Form, FormLabel, Image, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import CustomDropdownItem from "./CustomDropdownItem";
import styles from "./Design.module.css"
import DisplayCollection from "./DisplayCollection";
import DisplayCover from "./DisplayCover";

const DesignSideScreen: FunctionComponent = () => {
    return (
        <>
            <Col lg={8} md={8} sm={8} className={styles.viewpoint}>
                <div className={styles.sidemain}>
                    <Navbar className={styles.sidenav} variant="light">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link className={styles.navname} href="#home">Cover</Nav.Link>
                                <Nav.Link className={styles.navname} href="#pricing">Collection</Nav.Link>
                            </Nav>
                            <Nav className="">
                                <Nav.Link className={styles.navname} href="#home"><i className="fa-regular fa-image sidescreennav"></i>Cover</Nav.Link>
                                <Nav.Link className={styles.navname} href="#pricing"><i className="fa-solid fa-circle-dot sidescreennav"></i>Focal Point</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    {/* <DisplayCover /> */}
                    <DisplayCollection />
                </div>

            </Col>
        </>
    );
};

export default DesignSideScreen;
