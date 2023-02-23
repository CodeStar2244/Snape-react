import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import StudioSideBar from "../StudioSideBar";
import styles from "./AddCollection.module.css";
import AddMedia from "./AddMedia";
import DragMedia from "./DragMedia";
import UploadView from "./UploadView";


const AddCollection: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <Row>
                <Col xl={3} lg={3} sm={3}>
                    <StudioSideBar />
                </Col>
                <Col xl={9} lg={9} sm={9}>
                    {/* <AddMedia /> */}
                    <DragMedia />
                    {/* <UploadView /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default AddCollection;
