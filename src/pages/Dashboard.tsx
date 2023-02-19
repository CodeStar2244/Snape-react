import { FunctionComponent } from "react";
import TopBarComponent from "../components/TopBarComponent";
import { Button } from "react-bootstrap";
import NavBarComponent from "../components/NavbarComponent";
import PhotographyCard from "../components/PhotographyCard";
import styles from "./Dashboard.module.css"

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.homedashboard}>
      <TopBarComponent/>
      <NavBarComponent/>      
      <div className={styles.bottomsection} id="bottomSection">
        <section className={styles.leftcontainer}>
          <div className={styles.cardsParent}>
            <div className={styles.cards}>
              <div className={styles.clientsParent}>
                <div className={styles.clients}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.clientsGroup}>
                      <div className={styles.clients1}>Clients</div>
                      <div className={styles.last7Days}>Last 7 days</div>
                      <div className={styles.div}>4</div>
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
                    <div className={styles.revenueParent}>
                      <div className={styles.revenue1}>Revenue</div>
                      <div className={styles.last7Days1}>Last 7 days</div>
                      <div className={styles.r8000}>R 8 000</div>
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
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                    <div className={styles.arumiNelsonParent}>
                      <div className={styles.arumiNelson}>Arumi Nelson</div>
                      <div className={styles.am}>08.00 - 08.30 am</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                    <div className={styles.arumiNelsonParent}>
                      <div className={styles.arumiNelson}>Arumi Nelson</div>
                      <div className={styles.am}>08.00 - 08.30 am</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="../mask-group1@2x.png"
                    />
                    <div className={styles.arumiNelsonParent}>
                      <div className={styles.arumiNelson}>Arumi Nelson</div>
                      <div className={styles.am}>08.00 - 08.30 am</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.rightcontainer}>
          <div className={styles.rightcontainerInner}>
            <div className={styles.frameGroup}>
              <div className={styles.upcomingBookingsParent}>
                <div className={styles.upcomingBookings}>Upcoming Bookings</div>
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild} />
                  <div className={styles.september2021Parent}>
                    <div className={styles.september2021}>September 2021</div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupItem} />
                      </div>
                    </div>
                    <img
                      className={styles.expandLeftLightIcon}
                      alt=""
                      src="../expand-left-light.svg"
                    />
                    <div className={styles.groupFrame}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupInner} />
                      </div>
                    </div>
                    <img
                      className={styles.expandRightLightIcon}
                      alt=""
                      src="../expand-right-light.svg"
                    />
                  </div>
                  <div className={styles.groupParent1}>
                    <div className={styles.monWrapper}>
                      <div className={styles.mon}>Mon</div>
                    </div>
                    <div className={styles.tueWrapper}>
                      <div className={styles.tue}>Tue</div>
                    </div>
                    <div className={styles.wedWrapper}>
                      <div className={styles.wed}>Wed</div>
                    </div>
                    <div className={styles.friWrapper}>
                      <div className={styles.fri}>Fri</div>
                    </div>
                    <div className={styles.satWrapper}>
                      <div className={styles.sat}>Sat</div>
                    </div>
                    <div className={styles.sunWrapper}>
                      <div className={styles.sun}>Sun</div>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>27</div>
                    <div className={styles.div2}>28</div>
                    <div className={styles.div3}>29</div>
                    <div className={styles.div4}>30</div>
                    <div className={styles.div5}>31</div>
                    <div className={styles.div6}>1</div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div7}>2</div>
                    <div className={styles.div8}>3</div>
                    <div className={styles.div9}>4</div>
                    <div className={styles.div10}>5</div>
                    <div className={styles.div11}>6</div>
                    <div className={styles.div12}>7</div>
                  </div>
                  <div className={styles.container}>
                    <div className={styles.div13}>8</div>
                    <div className={styles.div14}>9</div>
                    <div className={styles.div15}>10</div>
                    <div className={styles.div16}>11</div>
                    <div className={styles.div17}>12</div>
                    <div className={styles.div18}>13</div>
                  </div>
                  <div className={styles.parent1}>
                    <div className={styles.div19}>14</div>
                    <div className={styles.div20}>15</div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild1} />
                      <div className={styles.div21}>16</div>
                    </div>
                    <div className={styles.div22}>17</div>
                    <div className={styles.div23}>18</div>
                    <div className={styles.div24}>19</div>
                  </div>
                  <div className={styles.parent2}>
                    <div className={styles.div25}>20</div>
                    <div className={styles.div26}>21</div>
                    <div className={styles.div27}>22</div>
                    <div className={styles.div28}>23</div>
                    <div className={styles.div29}>24</div>
                    <div className={styles.div30}>25</div>
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div31}>26</div>
                    <div className={styles.div32}>27</div>
                    <div className={styles.div33}>28</div>
                    <div className={styles.div34}>29</div>
                    <div className={styles.div35}>30</div>
                    <div className={styles.div36}>31</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.monday16Sept2021Parent}>
                  <div className={styles.monday16Sept}>
                    Monday, 16 Sept 2021
                  </div>
                  <button className={styles.groupButton}>
                    <Button
                      className={styles.rectangleButton}
                      variant="contained"
                      color="primary"
                    >
                      Button
                    </Button>
                    <div className={styles.customers}>150 Customers</div>
                  </button>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameParent3}>
                        <div className={styles.maskGroupGroup}>
                          <img
                            className={styles.maskGroupIcon3}
                            alt=""
                            src="../mask-group4@2x.png"
                          />
                          <div className={styles.arumiNelsonGroup}>
                            <div className={styles.arumiNelson}>
                              Arumi Nelson
                            </div>
                            <div className={styles.am}>08.00 - 08.30 am</div>
                          </div>
                        </div>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="../group-103.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild1} />
                      <div className={styles.groupParent2}>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="../group-1031.svg"
                        />
                        <div className={styles.maskGroupContainer}>
                          <img
                            className={styles.maskGroupIcon4}
                            alt=""
                            src="../mask-group5@2x.png"
                          />
                          <div className={styles.groupWrapper1}>
                            <div className={styles.wiliamMarchelGroup}>
                              <div className={styles.wiliamMarchel}>
                                Wiliam Marchel
                              </div>
                              <div className={styles.am1}>08.30 - 09.10 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
