import { FunctionComponent, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"
const NavBarComponent: FunctionComponent = () => {

  return (
    <Navbar id="navbar" className={styles.navpadding}>
      <Container>
        {/* <div className={styles.frameParent}> */}
        {/* <div className={styles.frameGroup} data-animate-on-scroll> */}
        <Nav.Link >
          <Link to="/">
            <img alt="" src="../homeIcon.svg" />
            <div className={styles.home}>Home</div>
            {/* <div className={styles.home}>Home</div> */}
          </Link>
        </Nav.Link>

        <Nav.Link >
          <Link to="/studiomanagement">
            <img alt="" src="../172629-camera-video-icon-1.svg" />
            <div className={styles.home}>Studio Management</div>
            {/* <div className={styles.home}>Home</div> */}
          </Link>
        </Nav.Link>

        <Nav.Link >
          <Link to="/collection-setting">
            <img alt="" src="../galleryIcon.svg" />
            <div className={styles.home}>Gallery</div>
            {/* <div className={styles.home}>Home</div> */}
          </Link>
        </Nav.Link>

        <Nav.Link >
          <Link to="/collection-setting">
            <img alt="" src="../folderIcon.svg" />
            <div className={styles.home}>Asset Registry</div>
            {/* <div className={styles.home}>Home</div> */}
          </Link>
        </Nav.Link>

        <Nav.Link >
          <Link to="/music">
            <img alt="" src="../musicIcon.svg" />
            <div className={styles.home}>Music</div>
            {/* <div className={styles.home}>Home</div> */}
          </Link>
        </Nav.Link>

        {/* </div> */}
        {/* </div> */}
      </Container>
    </Navbar>


  );
};

export default NavBarComponent;
