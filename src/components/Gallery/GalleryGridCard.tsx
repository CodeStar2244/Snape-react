import { useState } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Ratio, NavDropdown } from "react-bootstrap";
import CreateCollectionModal from "../Modal/CreateCollectionModal";
import styles from "./GalleryGrid.module.css";
const GalleryGridCard = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
            <div className={styles.imgblock}>
                <Ratio aspectRatio='16x9'>
                    <Image className={styles.myimage} src="../../../sample2.jpg" />
                </Ratio>
                <div className={styles.outertitle}>
                    <p className={styles.title}>Tebogo Wedding</p>
                    <NavDropdown
                        title={<i className="fa-regular fa-ellipsis setcolorgallery galleryicon"></i>} className={styles.navdropdown} id="collasible-nav-dropdown gallerydropdown">
                        <NavDropdown.Item onClick={() => setModalShow(true)} >
                            <div className={styles.navicons}>
                                <i className="fa-sharp fa-regular navicons fa-pencil"></i>
                                <div className={styles.navtags}>Quick Edit</div>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <div className={styles.navicons}>
                                <i className="fa-solid navicons fa-link"></i>
                                <div className={styles.navtags}>Get Direct Link</div>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <div className={styles.navicons}>
                                <i className="fa-solid navicons fa-trash-can"></i>
                                <div className={styles.navtags}>Delete Collection</div>
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>January 6th,2023</p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>Publised</p>
                </div>
            </div>
            <CreateCollectionModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                createNew={false}
            />
        </Col>
    )
}

export default GalleryGridCard