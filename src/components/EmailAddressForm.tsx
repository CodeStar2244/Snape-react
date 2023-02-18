import { FunctionComponent, useCallback } from "react";
import styles from "./EmailAddressForm.module.css";

const EmailAddressForm: FunctionComponent = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className={styles.artboard134x81Parent}>
      <img
        className={styles.artboard134x81}
        alt=""
        src="../artboard-134x8-11@2x.png"
      />
      <div className={styles.client}>
        <div className={styles.emailAddress}>Email Address</div>
        <input className={styles.form} type="email" required />
      </div>
      <div className={styles.company}>
        <div className={styles.emailAddress}>Password</div>
        <input className={styles.form1} type="password" required />
      </div>
      <div className={styles.buttonParent}>
        <button className={styles.button}>
          <div className={styles.buttonChild} onClick={onRectangleClick} />
        </button>
        <div className={styles.login}>Login</div>
      </div>
      <h3 className={styles.studioManagementSuite}>
        Studio Management Suite Login
      </h3>
      <div className={styles.rememberMeWrapper}>
        <div className={styles.rememberMe}>Remember me</div>
      </div>
      <div
        className={styles.onyRegisteredPhotographers}
      >{`Ony Registered Photographers & Videographers Can Login`}</div>
      <a className={styles.downloadAppTo} target="_blank">
        Download App To Register
      </a>
      <a className={styles.lostPassword}>Lost Password</a>
    </div>
  );
};

export default EmailAddressForm;
