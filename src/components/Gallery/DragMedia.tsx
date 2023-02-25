import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Navbar, Form } from "react-bootstrap";
import Constants from "../../Config/Constants";
import NavLayoutWithSideBar from "../NavLayoutWithSideBar";
import AddPhotosNav from "./AddPhotosNav";
import styles from "./DragMedia.module.css";


const DragMedia: FunctionComponent = () => {
    return (
        <NavLayoutWithSideBar activeTab={Constants.NavbarTabs.GALLARY}>
            <>
                <div className={styles.outermain}>
                    <AddPhotosNav />
                    <div className={styles.addmedia}>
                        <p className={styles.nomedia}>
                            Drag photos here
                        </p>
                        <Button className={styles.dragbtn} variant="custom">Select photos from your computer</Button>
                    </div>
                </div>
            </>
        </NavLayoutWithSideBar>
    );
};

export default DragMedia;