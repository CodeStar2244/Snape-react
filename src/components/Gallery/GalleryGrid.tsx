import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import styles from "./GalleryHome.module.css";


const GalleryGrid: FunctionComponent = () => {
    return (
        <Row className={styles.maincomp}>
            <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
                <div className={styles.imgblock1}>
                    <div className={styles.imgdiv}>
                        <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                    </div>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgdiv}>
                    <Image className={styles.myimage} src="../../../sample.jpeg" />
                </div>
                <div className={styles.outertitle}>
                    <p className={styles.title}>Tebogo Wedding</p>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>January 6th,2023</p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>Publised</p>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgdiv}>
                    <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                </div>
                <div className={styles.outertitle}>
                    <p className={styles.title}>Tebogo Wedding</p>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>January 6th,2023</p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>Publised</p>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgdiv}>
                    <Image className={styles.myimage} src="../../../sample.jpeg" />
                </div>
                <div className={styles.outertitle}>
                    <p className={styles.title}>Tebogo Wedding</p>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>January 6th,2023</p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>Publised</p>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgdiv}>
                    <Image img-responsive className={styles.myimage} src="../../../sample2.jpg" />
                </div>
                <div className={styles.outertitle}>
                    <p className={styles.title}>Tebogo Wedding</p>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>January 6th,2023</p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>Publised</p>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgdiv}>
                    <Image className={styles.myimage} src="../../../sample.jpeg" />
                </div>
                <div className={styles.outertitle}>
                    <p className={styles.title}>Tebogo Wedding</p>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>January 6th,2023</p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>Publised</p>
                </div>
            </Col>
        </Row>
    );
};

export default GalleryGrid;
