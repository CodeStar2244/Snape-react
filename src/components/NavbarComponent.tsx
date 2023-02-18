import { FunctionComponent ,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"
const NavBarComponent: FunctionComponent = () => {
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add(styles.animate);
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, []);
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.frameParent}>
        {/* <section className={styles.vectorParent}>
          <div className={styles.frameItem} />
        </section> */}
        <div className={styles.frameGroup} data-animate-on-scroll>
          <Link className={styles.groupWrapper} to="/">
            <div className={styles.parent}>
              <img className={styles.icon} alt="" src="../homeIcon.svg" />
              <div className={styles.home}>Home</div>
            </div>
          </Link>
          <Link className={styles.cameraVideoIcon1Parent} to ="/studiomanagement" >
            <img
              className={styles.cameraVideoIcon1}
              alt=""
              src="../172629-camera-video-icon-1.svg"
            />
            <div className={styles.studioManagement}>Studio Management</div>
          </Link>
        
          <Link className={styles.cameraVideoIcon1Parent} to="/collection-setting">
            <img className={styles.frameInner} alt="" src="../galleryIcon.svg" />
            <div className={styles.gallery}>Gallery</div>
          </Link>
          <a className={styles.vectorGroup}>
            <img className={styles.vectorIcon} alt="" src="../folderIcon.svg" />
            <div className={styles.assetRegistryWrapper}>
              <div className={styles.assetRegistry}>Asset Registry</div>
            </div>
          </a>
          <a className={styles.groupContainer}>
            <img className={styles.groupIcon} alt="" src="../musicIcon.svg" />
            <div className={styles.musicWrapper}>
              <div className={styles.music}>Music</div>
            </div>
          </a>
        </div>
      </div>
    </nav>
    
   
  );
};

export default NavBarComponent;
