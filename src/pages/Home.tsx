import { FunctionComponent, useState } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import PhotographyCard from "../components/Dashboard/PhotographyCard";
import NavLayout from "../components/NavLayout";
import styles from "./Dashboard.module.css";
import Calender from "react-calendar";
import './Calender.css'
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import AddCollection from "../components/Gallery/AddCollection";
import Login from "./Login";
import Gallery from "./Gallery";
const Home: FunctionComponent = () => {
    const [date, setDate] = useState(new Date());
    const varial = "hello"
    return (
        <>
            <TopBarComponent />
            <NavBarComponent />
            <Routes>
                <Route path="home" element={<Dashboard />} />
                <Route path="studiomanagement" element={<Login />} />
                <Route path="gallery" element={<Gallery />} >
                    <Route path="newcollection" />
                </Route>
            </Routes>
        </>
    );
};

export default Home;
