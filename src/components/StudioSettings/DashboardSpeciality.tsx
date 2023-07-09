import styles from "./DashboardSpeciality.module.css";
import { Col, Image, Ratio, Row } from "react-bootstrap";

const DashboardSpeciality: any = () => {
    return (
        <>
            <Row className={styles.specialmain}>
                <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                        <div className={styles.imgdiv}>
                            <div className={styles.overlay}></div>
                            <Image className={styles.myimage} src="../../../special.png" />
                            <div className={styles.button} >Action</div>
                        </div>
                    </Ratio>
                </Col>

                <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                        <div className={styles.imgdiv}>
                            <div className={styles.overlay}></div>
                            <Image className={styles.myimage} src="../../../special2.png" />
                            <div className={styles.button} >Celebration</div>
                        </div>
                    </Ratio>
                </Col>

                <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                        <div className={styles.imgdiv}>
                            <div className={styles.overlay}></div>
                            <Image className={styles.myimage} src="../../../sample2.jpg" roundedCircle />
                            <div className={styles.button} >Family</div>
                        </div>
                    </Ratio>
                </Col>

                <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                        <div className={styles.imgdiv}>
                            <div className={styles.overlay}></div>
                            <Image className={styles.myimage} src="../../../special.png" />
                            <div className={styles.button} >Action</div>
                        </div>
                    </Ratio>
                </Col>

                <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                        <div className={styles.imgdiv}>
                            <div className={styles.overlay}></div>
                            <Image className={styles.myimage} src="../../../special2.png" />
                            <div className={styles.button} >Celebration</div>
                        </div>
                    </Ratio>
                </Col>

                <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                        <div className={styles.imgdiv}>
                            <div className={styles.overlay}></div>
                            <Image className={styles.myimage} src="../../../sample2.jpg" roundedCircle />
                            <div className={styles.button} >Family</div>
                        </div>
                    </Ratio>
                </Col>


            </Row>
            <div className={styles.editspecial}>
                <i className="fa-regular fa-pen specialediticon"></i>
                <span className={styles.editname}>
                    Edit My Specialities
                </span>
            </div>
        </>
    )
}

export default DashboardSpeciality