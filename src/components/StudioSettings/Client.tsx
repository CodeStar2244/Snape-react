import { Col, Image, Row, Table } from 'react-bootstrap';
import styles from './Client.module.css'
import DashboardUpcoming from './DashboardUpcoming';
import ClientPayment from './ClientPayment';

const Client: any = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.dashboard}>Clients</div>
            <Table striped className="mt-4" size="md" responsive="md">
                <thead>
                    <tr className={styles.tableheading}>
                        <td>Client Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Created</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../sample2.jpg`}
                                />
                                Sample Client
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>sample@gmail.com</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>0000 0000</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Row className={styles.clientpayment}>
                <Col xl={8} lg={8}>
                    <h6>Payments</h6>
                    <ClientPayment />
                </Col>
                <Col xl={4} lg={4}>
                    <h6>Upcoming Sessions</h6>
                    <DashboardUpcoming />
                </Col>
            </Row>

        </div>
    )
}

export default Client;