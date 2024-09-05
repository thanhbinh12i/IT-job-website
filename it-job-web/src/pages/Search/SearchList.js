import { useEffect, useState } from "react";
import { getAllCompany } from "../../services/companyServices";
import { Col, Row } from "antd";
import JobItem from "../../components/JobItem";

function SearchList(props) {
      const { data = [] } = props;
      const [dataFinal, setDataFinal] = useState([]);
      useEffect(() => {
            const fetchApi = async () => {
                  const company = await getAllCompany();
                  const newData = data.map((item) => {
                        const infoCompany = company.find(
                              (itemCompany) => itemCompany.id === item.idCompany && itemCompany
                        );
                        return {
                              infoCompany: infoCompany,
                              ...item,
                        }
                  });
                  setDataFinal(newData);
            }
            fetchApi();
      }, [])
      return (
            <>
                  {dataFinal.length > 0 ? (
                        <div className="mt-20">
                              <Row gutter={[20,20]}>
                                    {dataFinal.map((item) => (
                                          <Col span={8} key={item.id}>
                                                <JobItem item={item}/>
                                          </Col>
                                    ))}
                              </Row>
                        </div>
                  ) : (
                        <div className="mt-20">Không tìm thấy công việc nào</div>
                  )}
            </>
      )
}
export default SearchList;