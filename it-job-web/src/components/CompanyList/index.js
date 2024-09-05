import { useEffect, useState } from "react";
import { getAllCompany } from "../../services/companyServices";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

function CompanyList() {
      const [data, setData] = useState([]);
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getAllCompany();
                  if (response) {
                        setData(response);
                  }
            }
            fetchApi();
      }, [])
      return (
            <>
                  <h2>Danh sách một số công ty</h2>
                  <Row gutter={[20, 20]}>
                        {data.map((item) => (
                              <Col span={8} key={item.id}>
                                    <Link to={`company/${item.id}`}>
                                          <Card>
                                                <div className="mb-10">
                                                      Công ty: <strong>{item.companyName}</strong>
                                                </div>
                                                <div className="mb-10">
                                                      Số nhân sự: <strong>{item.quantityPeople}</strong>
                                                </div>
                                                <div className="mb-10">
                                                      Địa chỉ: <strong>{item.address}</strong>
                                                </div>
                                          </Card>
                                    </Link>
                              </Col>
                        ))}
                  </Row>
                  <Link to="/company">
                        <Button className="mt-20">Xem thêm</Button>
                  </Link>
            </>
      )
}
export default CompanyList;