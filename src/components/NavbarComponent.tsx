import { FunctionComponent, useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"

const NavBarComponent: FunctionComponent = () => {
    console.log("navbar component run...............");

    return (
        <Navbar id="navbar" className={styles.navpadding}>
            <Container>
                <Nav.Link >
                    <Link to="/home">
                        <div className={styles.home}><i className="fa-regular fa-house setcolor"></i>Home</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/studiomanagement">
                        <div className={styles.home}><i className="fa-regular fa-video setcolor"></i>Studio Management</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/gallery">
                        <div className={styles.home}><i className="fa-regular setcolor fa-grid-2"></i>Gallery</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/collection-setting">
                        <div className={styles.home}><i className="fa-regular fa-folder setcolor"></i>Asset Registry</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/music">
                        <div className={styles.home}><i className="fa-regular fa-circle-play setcolor"></i>Music</div>
                    </Link>
                </Nav.Link>
            </Container>
        </Navbar>

    );
};

export default NavBarComponent;