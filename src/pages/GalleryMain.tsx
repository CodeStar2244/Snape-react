import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryNav from "../components/Gallery/GalleryNav";
import NavLayout from "../components/NavLayout";
import styles from "./Gallery.module.css";

const GalleryMain: FunctionComponent = () => {
    return (
        <>
            <GalleryNav />
            <div className={styles.collectioncount}>
                <p className={styles.collectioncountdis}>
                    6 collections
                </p>
            </div>
            <GalleryGrid />
        </>
    );
};

export default GalleryMain;
