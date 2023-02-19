import { FunctionComponent, useCallback } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./CollectionsDiv.module.css";

const CollectionsDiv: FunctionComponent = () => {
  const onGroupContainer6Click = useCallback(() => {
    // Please sync "Add New Collection" to the project
  }, []);

  return (

    <Navbar>
      <Container className={styles.collectioncontainer}>
        <Navbar.Brand >
          Collections
        </Navbar.Brand>
        <Nav.Link className={styles.newCollection}>
          <button className={styles.groupChild}>
            + New Collection
          </button>
        </Nav.Link>

      </Container>
    </Navbar >
  );
};

export default CollectionsDiv;
