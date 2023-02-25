import { useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"

interface Props {
    activeTab: string;
}



const NavBarComponent = ({ activeTab }: Props) => {

    return (
        <Nav id="navbar" className={styles.navpadding}>
            {/* <Container> */}
            <Nav.Link>
                <Link to="/">
                    <div className={styles.home} >
                        <i className="fa-regular fa-house setcolor"></i>
                        <p>Home</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link >
                <Link to="/studiomanagement">
                    <div className={styles.home}>
                        <i className="fa-regular fa-video setcolor"></i>
                        <p>Studio Management</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link >
                <Link to="/gallery">
                    <div className={styles.home}>
                        <i className="fa-regular setcolor fa-grid-2"></i>
                        <p>Gallery</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link to="/asset-registry">
                    <div className={styles.home}>
                        <i className="fa-regular fa-folder setcolor"></i>
                        <p>Asset Registry</p>
                    </div>
                </Link>
            </Nav.Link >

            <Nav.Link >
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