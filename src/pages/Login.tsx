import { FunctionComponent } from "react";
import EmailAddressForm from "../components/EmailAddressForm";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <img className={styles.frame151} alt="" src="../frame-15-1.svg" />
      <EmailAddressForm />
      <img className={styles.frame141} alt="" src="../frame-14-1.svg" />
    </div>
  );
};

export default Login;
