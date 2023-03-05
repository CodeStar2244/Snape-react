import {  Col ,  Row } from "react-bootstrap";
import Layout from "../components/Layout";
import AllMusic from "../components/Music/AllMusic";
import MusicLeftBarComponent from "../components/Music/MusicLeftBarComponent";
import MusicNav from "../components/Music/MusicNav";
import MusicSideComp from "../components/Music/MusicSideComp";
const MusicDownloads = () => {
  return (
    <Layout>
            <>
                <Row>
                    <Col md={3} lg={3} >
                        <MusicLeftBarComponent/>
                    </Col>
                    <Col md={9} lg={9} >
                        <MusicNav />
                        <AllMusic />
                    </Col>
                </Row>
            </>
        </Layout >
  )
}

export default MusicDownloads