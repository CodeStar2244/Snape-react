import { useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"

interface Props {
    activeTab: string;
}



const NavBarComponent = () => {

    console.log("nav bar render===================");
    return (

        <Nav id="navbar" variant="tabs" className={styles.navpadding} defaultActiveKey="/home">
            {/* <Container> */}
            <Nav.Link eventKey="link-1">
                <Link to="/home">
                    <div className={styles.home} >
                        <i className="fa-regular fa-house setcolor"></i>
                        <p>Home</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-2">
                <Link to="/studiomanagement">
                    <div className={styles.home}>
                        <i className="fa-regular fa-video setcolor"></i>
                        <p>Studio Management</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-3">
                <Link to="/gallery">
                    <div className={styles.home}>
                        <i className="fa-regular setcolor fa-grid-2"></i>
                        <p>Gallery</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-4">
                <Link to="/asset-registry">
                    <div className={styles.home}>
                        <i className="fa-regular fa-folder setcolor"></i>
                        <p>Asset Registry</p>
                    </div>
                </Link>
            </Nav.Link >

            <Nav.Link eventKey="link-5">
                <Link to="/music">
                    <div className={styles.home}>
                        <i className="fa-regular fa-circle-play setcolor"></i>
                        <p >Music</p>
                    </div>
                </Link>
            </Nav.Link>
            {/* </Container> */}
        </Nav >

    );
};

export default NavBarComponent;