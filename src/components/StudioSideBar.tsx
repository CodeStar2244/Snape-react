import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import styles from "./StudioSideBar.module.css";


const StudioSideBar: FunctionComponent = () => {
    return (
        <div className={styles.maincomponent}>
            <div>
                <p className={styles.sidemaintitle}>Tebogo Wedding</p>
            </div>
            <div className={styles.datepreview}>
                <p className={styles.datesection}>
                    January 6th, 2023
                </p>
                <p className={styles.previewsection}>
                    Preview
                </p>
            </div>
            <div className={styles.covermain}>
                <div className={styles.coverinside}>
                    <button className={styles.coverbtn}>Change Cover</button>
                </div>
            </div>
            <div className={styles.settingtab}>
                <button className={styles.settingbtn}>
                    <img className={styles.groupIcon} alt="" src="../group.svg" />
                </button>
            </div>
            <p className={styles.settings}>Settings</p>
            <Nav defaultActiveKey="/home" className="flex-column">
                <button className={styles.navbutton}>
                    <Link to="studiomanagement">
                        <img className={styles.groupIcon} alt="" src="../group.svg" />
                        <p className={styles.settingname}> Collection Settings</p>
                    </Link>
                </button>
                <button className={styles.navbutton}>
                    <img className={styles.groupIcon} alt="" src="../group.svg" />
                    <p className={styles.settingname}> Design</p>
                </button>
                <button className={styles.navbutton}>
                    <img className={styles.groupIcon} alt="" src="../group.svg" />
                    <p className={styles.settingname}> Privacy</p>
                </button>
                <button className={styles.navbutton}>
                    <img className={styles.groupIcon} alt="" src="../group.svg" />
                    <p className={styles.settingname}> Download</p>
                </button>
            </Nav>
            <div>
                <p className={styles.datepreview}>
                    <button className={styles.previewbtn}>Preview</button>
                    <button className={styles.publishbtn}>Publish</button>
                </p>
            </div>
        </div>
    );
};

export default StudioSideBar;
