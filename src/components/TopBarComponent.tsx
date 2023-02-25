import { FunctionComponent } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./TopBarComponent.module.css";

const TopBarComponent: FunctionComponent = () => {
    console.log("top bar rendr=================");

    return (
        <Navbar className={styles.topbar} id="headerTopbar">
            <div className={styles.artboard134x81Parent} id="innerHeader">
                <Image fluid
                    className={styles.artboard134x81}
                    alt=""
                    src="../snape_logo@2x.png"
                />
                <div className={styles.frameParent}>
                    <Nav.Link className={styles.iconset}>
                        <i className="fa-light setcolortopbar fa-bell"></i>
                    </Nav.Link>
                    <Nav.Link className={styles.iconset}>
                        <i className="fa-light setcolortopbar fa-gear"></i>
                    </Nav.Link>

                    <NavDropdown
                        title={
                            <Image fluid
                                className={styles.maskGroupIcon}
                                alt=""
                                src="../profile_image@2x.png"
                            />} className={styles.navdropdown} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={styles.iconset}>
                        <button className={styles.groupWrapper}>
                            <i className="fa-regular setcolortopbar fa-ellipsis-vertical"></i>
                        </button>
                    </Nav.Link>
                </div>
            </div>
        </Navbar >

    );
};

export default TopBarComponent;
