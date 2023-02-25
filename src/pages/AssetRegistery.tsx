import { FunctionComponent } from "react";
import AssetLeftContainer from "../components/AssetLeftContainer";
import AssetDashboardMain from "../components/AssetDashboardMain";
import styles from "./AssetRegistery.module.css";
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";

const AssetRegistry: FunctionComponent = () => {
  return (
    <div className={styles.assetRegistry}>
        <TopBarComponent/>
        <NavBarComponent/>
    <section className={styles.bottomscreen}>
        <AssetLeftContainer />
        <AssetDashboardMain />
      </section>
    </div>
  );
};

export default AssetRegistry;
