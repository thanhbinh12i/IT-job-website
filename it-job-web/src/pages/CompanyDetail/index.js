import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailCompany } from "../../services/companyServices";
import { getListJob } from "../../services/jobServices";
import { Col, Row } from "antd";
import JobItem from "../../components/JobItem";

function CompanyDetail() {
      const params = useParams();
      const [infoCompany, setInfoCompany] = useState();
      const [jobs, setJobs] = useState([]);
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getDetailCompany(params.id);
                  setInfoCompany(response);
            }
            fetchApi();
      }, []);
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListJob(params.id);
                  setJobs(response);
            }
            fetchApi();
      }, []);
      return (
            <>
                  {infoCompany && (
                        <>
                              <h1>{infoCompany.companyName}</h1>
                              <div className="mb-10">
                                    Công ty: <strong>{infoCompany.companyName}</strong>
                              </div>
                              <div className="mb-10">
                                    Số điện thoại: <strong>{infoCompany.phone}</strong>
                              </div>
                              <div className="mb-10">
                                    Số nhân sự: <strong>{infoCompany.quantityPeople}</strong>
                              </div>
                              <div className="mb-10">
                                    Địa chỉ: <strong>{infoCompany.address}</strong>
                              </div>
                              <div className="mb-10">
                                    Thời gian làm việc: <strong>{infoCompany.workingTime}</strong>
                              </div>
                              <div className="mb-10">
                                    Website: <strong>{infoCompany.website}</strong>
                              </div>
                              <div className="mb-10">Mô tả ngắn: </div>
                              <div className="mb-20">
                                    {infoCompany.description}
                              </div>
                              <div className="mb-10">Mô tả chi tiết: </div>
                              <div className="mb-20">
                                    {infoCompany.website}
                              </div>
                              <div className="mb-10">Danh sách các job: </div>
                              <div className="mb-20">
                                    <Row gutter={[20, 20]}>
                                          {jobs.map((item) => (
                                                <Col span={8} key={item.id}>
                                                      <JobItem item={item} />
                                                </Col>
                                          ))}
                                    </Row>
                              </div>
                        </>


                  )}
            </>
      )
}
export default CompanyDetail;