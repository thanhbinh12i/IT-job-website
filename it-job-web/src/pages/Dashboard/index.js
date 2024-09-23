import { Col, Row } from "antd";
import CVStatistic from "./CVStatistic";
import JobStatistic from "./JobStatistic";
import InfoCompany from "./InfoCompany";

function Dashboard() {
      return (
            <>
                  <h1>Tổng quan</h1>
                  <Row gutter={[20, 20]}>
                        <Col span={8}>
                              <JobStatistic />
                        </Col>
                        <Col span={8}>
                              <CVStatistic />
                        </Col>
                        <Col span={8}>
                              <InfoCompany />
                        </Col>
                  </Row>
            </>
      )
}
export default Dashboard;