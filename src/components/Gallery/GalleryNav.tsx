import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./GalleryNav.module.css";

function GalleryNav() {
    return (
        <>
            <Navbar className={styles.maincomp}>
                <Container fluid>
                    <Navbar.Brand className={styles.mainname}>Collections</Navbar.Brand>
                    <Form className="d-flex">
                        <Button className={styles.collectionbtn} variant="custom">New Collection</Button>
                        <Button className={styles.searchbtn} variant="custom">
                            <img src='../../../group.svg' />
                        </Button>
                        <Button className={styles.searchbtn} variant="custom">
                            <img src='../../../group.svg' />
                        </Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default GalleryNav;