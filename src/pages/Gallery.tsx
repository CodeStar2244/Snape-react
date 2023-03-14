import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryNav from "../components/Gallery/GalleryNav";
import Layout from "../components/Layout";
import NavLayout from "../components/Layout";
import Constants from "../Config/Constants";
import styles from "./Gallery.module.css";

const Gallery: FunctionComponent = () => {
    return (
        <Layout>
            <>
                <GalleryNav />
                <GalleryGrid />
            </>
        </Layout>
    );
};

export default Gallery;
