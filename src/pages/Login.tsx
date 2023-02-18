import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <Container className={styles.login}>
      <Row>
        <Col>
          <Image fluid className={styles.frame151} alt="" src="../frame-15-1.svg" />
        </Col>
        <Col>
          <LoginForm />
        </Col>
        <Col>
          <Image fluid className={styles.frame141} alt="" src="../frame-14-1.svg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
