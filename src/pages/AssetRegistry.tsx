import { FunctionComponent } from "react";
import AssetLeftContainer from "../components/AssetRegistry/AssetLeftContainer";
import AssetDashboardMain from "../components/AssetRegistry/AssetDashboardMain";
import styles from "./AssetRegistry.module.css";
import NavLayout from "../components/Layout";
import Constants from "../Config/Constants";
import Layout from "../components/Layout";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Outlet,
} from "react-router-dom";

const AssetRegistry: FunctionComponent = () => {
  return (
    <Layout>
      <>
        <div className={styles.assetRegistry}>
          <section className={styles.bottomscreen}>
            <AssetLeftContainer />
            <Outlet/>
            
          </section>
        </div>
      </>
    </Layout>


  );
};

export default AssetRegistry;