import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Navbar, Form } from "react-bootstrap";
import StudioSideBar from "../StudioSideBar";
import AddPhotosNav from "./AddPhotosNav";
import styles from "./UploadView.module.css";


const UploadView: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <AddPhotosNav />
            <div className={styles.maincomp}>
                <div className={styles.totalmedia}>
                    <p className={styles.totalcount}>Photos | 10</p>
                    <p className={styles.totalcount}>Videos | 09</p>
                </div>
                <Row>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample.jpeg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample.jpeg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample.jpeg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample.jpeg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={4} sm={6}>
                        <div className={styles.imgdiv}>
                            <Image img-responsive className={styles.myimage} src="../../../sample.jpeg" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default UploadView;
