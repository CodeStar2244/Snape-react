import { FunctionComponent, useState } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import PhotographyCard from "../components/Dashboard/PhotographyCard";
import NavLayout from "../components/NavLayout";
import styles from "./Dashboard.module.css";
import Calender from "react-calendar";
import './Calender.css'
import TopBarComponent from "../components/TopBarComponent";
import NavBarComponent from "../components/NavbarComponent";
const Dashboard: FunctionComponent = () => {
  const [date, setDate] = useState(new Date());
  const varial = "hello"
  return (
    <>
      <div className={styles.bottomsection} id="bottomSection">
        <section className={styles.leftcontainer}>
          <div className={styles.cardsParent}>
            <div className={styles.cards}>
              <div className={styles.clientsParent}>
                <div className={styles.clients}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.clientsGroup}>
                      <h5>Clients</h5>
                      <h5>Last 7 days</h5>
                      <h5>4</h5>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="../rectangle-52.svg"
                      />
                      <img
                        className={styles.h38ch38bm0014iconset0111}
                        alt=""
                        src="../h38ch38bm0014iconset011-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <PhotographyCard
                  serviceType="Photography"
                  serviceOption="3"
                  serviceImageUrl="../7627479-app-photography-camera-cam-photo-icon-1@2x.png"
                  propBackgroundColor="#fa77ac"
                  propColor="#fff"
                  propColor1="#fff"
                  propColor2="#fff"
                  propWidth="16.68px"
                  propBackgroundColor1="#ff569a"
                  propTop="16.68px"
                  propHeight="28.92px"
                />
              </div>
              <div className={styles.videographyParent}>
                <PhotographyCard
                  serviceType="Videography"
                  serviceOption="1"
                  serviceImageUrl="../7627385-app-photography-cam-camera-video-icon-1@2x.png"
                  propBackgroundColor="#f2f2f2"
                  propColor="#080b23"
                  propColor1="#030303"
                  propColor2="#080b23"
                  propWidth="10.01px"
                  propBackgroundColor1="#fff"
                  propTop="8.9px"
                  propHeight="43.38px"
                />
                <div className={styles.clients}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameInner} />
                    <div className={styles.clientsGroup}>
                      <h5>Revenue</h5>
                      <h5>Last 7 days</h5>
                      <h5>R 8 000</h5>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.dFinance91}
                        alt=""
                        src="../3d-finance-9-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.recentCustomersParent}>
              <h3 className={styles.recentCustomers}>Recent Customers</h3>
              <div className={styles.recentCustomersGrid}>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>
                <div className={styles.recentCustomerDiv}>
                  <div className={styles.recentCustomersImgDiv}>
                    <img
                      className={styles.recentCustomersImg}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                  </div>

                  <div className={styles.recentCustomerNameDiv}>
                    <div className={styles.recentCustomerName}>Arumi Nelson</div>
                    <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>
        <section className={styles.rightcontainer}>
          <div className={styles.calenderDiv}>
            <Calender onChange={setDate} value={date} />

          </div>
          <div className={styles.rightcontainerInner}>

            {/* <div className={styles.upcomingBookingsParent}>
                <div className={styles.upcomingBookings}>Upcoming Bookings</div>
              </div> */}
            <div className={styles.frameParent1}>
              <div className={styles.monday16Sept2021Parent}>
                <div className={styles.monday16Sept}>
                  {date.toDateString()}
                </div>
                <button className={styles.groupButton}>
                  <button>
                    150 Customers
                  </button>
                </button>
              </div>
              <div className={styles.totalCustomers}>
                <div className={styles.customerBox}>
                  <div className={styles.customerLeftDiv}>
                    <img
                      className={styles.customerImage}
                      alt=""
                      src="../mask-group4@2x.png"
                    />
                    <div className={styles.customerData}>
                      <div className={styles.customerName}>
                        Arumi Nelson
                      </div>
                      <div className={styles.customerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.rightCustomerImage}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="../group-103.svg"
                    />
                  </div>

                </div>

                <div className={styles.customerBox}>
                  <div className={styles.customerLeftDiv}>
                    <img
                      className={styles.customerImage}
                      alt=""
                      src="../mask-group4@2x.png"
                    />
                    <div className={styles.customerData}>
                      <div className={styles.customerName}>
                        Arumi Nelson
                      </div>
                      <div className={styles.customerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.rightCustomerImage}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="../group-103.svg"
                    />
                  </div>

                </div>
                <div className={styles.customerBox}>
                  <div className={styles.customerLeftDiv}>
                    <img
                      className={styles.customerImage}
                      alt=""
                      src="../mask-group4@2x.png"
                    />
                    <div className={styles.customerData}>
                      <div className={styles.customerName}>
                        Arumi Nelson
                      </div>
                      <div className={styles.customerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.rightCustomerImage}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="../group-103.svg"
                    />
                  </div>

                </div>
                <div className={styles.customerBox}>
                  <div className={styles.customerLeftDiv}>
                    <img
                      className={styles.customerImage}
                      alt=""
                      src="../mask-group4@2x.png"
                    />
                    <div className={styles.customerData}>
                      <div className={styles.customerName}>
                        Arumi Nelson
                      </div>
                      <div className={styles.customerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.rightCustomerImage}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="../group-103.svg"
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
