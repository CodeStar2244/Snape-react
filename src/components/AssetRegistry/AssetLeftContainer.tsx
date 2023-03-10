import { FunctionComponent, useCallback } from "react";
import styles from "./AssetLeftContainer.module.css";
import $ from 'jquery';
import { Link } from "react-router-dom";

const AssetLeftContainer: FunctionComponent = () => {
  const onMyDevicesClick = useCallback(() => {
    // Please sync "Add Device" to the project
  }, []);
  const hideSideBar = ()=>{
    $("#leftContainer").css({left:'-100%' , display:"block"})
       

  }

  return (
    <section className={`${styles.assetleftcontainer}`} id="leftContainer">
      <div className={styles.leftDivCancel} onClick={hideSideBar}> <i className="fa-solid fa-xl fa-xmark"></i></div>
     
      <div className={styles.buttoncontainres}>
  
        <button className={styles.leftDivButton}>
          <i className="fa-regular fa-house setcolorwhite"></i>
          <Link to="">
          
          <div className={styles.leftDivButtonTextWhite}>Dashboard</div>
          </Link>
          
        </button>
     
        <button className={styles.leftDivButtonWithoutColor} onClick={onMyDevicesClick}>
          <i className="fa-light fa-envelope setcolor"></i>
        <Link to="device-list">
          <div className={styles.leftDivButtonText}>My Devices</div>
        </Link>
        </button>

        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-user setcolor"></i>
          <div className={styles.leftDivButtonText}>Get Cover</div>
        </button>
        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-circle-dollar setcolor"></i>
          <Link to="for-sale">
          <div className={styles.leftDivButtonText}>Products For Sale</div>
          </Link>
        </button>
        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-grid-2 setcolor"></i>
          <div className={styles.leftDivButtonText}>Products For Rent</div>
        </button>
      </div>
    </section>
  );
};

export default AssetLeftContainer;