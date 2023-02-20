import { FunctionComponent, useCallback } from "react";
import { Container, Form, Image } from "react-bootstrap";
import styles from "./LoginForm.module.css";

const LoginForm: FunctionComponent = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <Form className={styles.artboard134x81Parent}>
      <Image
        className={styles.artboard134x81}
        alt=""
        src="../artboard-134x8-1@2x.png"
      />
      <h3 className={styles.studioManagementSuite}>
        Studio Management Suite Login
      </h3>
      <Form.Group className={styles.client}>
        <Form.Label className={styles.emailAddress}>Email Address</Form.Label>
        <Form.Control className={styles.form} type="email" required />
      </Form.Group>
      <Form.Group className={styles.client}>
        <Form.Label className={styles.emailAddress}>Password</Form.Label>
        <Form.Control className={styles.form} type="password" required />
      </Form.Group>
      {/* <Form.Group className={styles.rememberMeWrapper}> */}
      <Form.Check
        className={styles.rememberMe}
        type={"checkbox"}
        id={`default-${"checkbox"}`}
        label={`Remember me`}
      />
      {/* <div className={styles.rememberMe}>Remember me</div> */}
      {/* </Form.Group> */}
      <Form.Label className={styles.lostPassword}>Lost Password</Form.Label>
      {/* <Form.Group className={styles.buttonParent}> */}
      <button className={styles.buttonChild} onClick={onRectangleClick}>Login</button>
      {/* <div className={styles.login}>Login</div> */}
      {/* </Form.Group> */}
      <div
        className={styles.onyRegisteredPhotographers}
      >{`Ony Registered Photographers & Videographers Can Login`}</div>
      <a className={styles.downloadAppTo} target="_blank">
        Download App To Register
      </a>
    </Form>
  );
};

export default LoginForm;
