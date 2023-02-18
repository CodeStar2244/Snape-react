import { FunctionComponent } from "react";
import GridContainer from "../components/GridContainer";
import ImageComponent from "../components/ImageComponent";
import styles from "./DesignSettings.module.css";

const DesignSettings: FunctionComponent = () => {
  return (
    <div className={styles.designsettings}>
      <GridContainer />
      <ImageComponent />
    </div>
  );
};

export default DesignSettings;
