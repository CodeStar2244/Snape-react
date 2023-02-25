import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";
import StudioSideBar from "./StudioSideBar";
import styles from "./NavLayout.module.css"

interface Props {
    children: JSX.Element;
    activeTab:string;
}

const NavLayoutWithSideBar = ({ children ,activeTab }: Props) => {
    return (
        <div className={styles.maincomp}>
            <Container fluid >
                <TopBarComponent />
                <NavBarComponent activeTab={activeTab} />
                <Row>
                    <Col xl={3} lg={3} sm={3}>
                        <StudioSideBar />
                    </Col>
                    <Col xl={9} lg={9} sm={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavLayoutWithSideBar;