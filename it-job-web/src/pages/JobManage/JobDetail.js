import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobServices";
import { Tag } from "antd";

function JobDetailAdmin() {
      const params = useParams();
      const [data, setData] = useState();
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getDetailJob(params.id);
                  if (response) {
                        setData(response)
                  }
            }
            fetchApi();
      }, [])
      return (
            <>
                  {data && (
                        <>
                              <h1>{data.name}</h1>
                              <div className="mb-20">
                                    <span>Trạng thái: </span>
                                    {data.status ? (
                                          <Tag color="green">Đang bật</Tag>
                                    ) : (
                                          <Tag color="red">Đang tắt</Tag>
                                    )}
                              </div>
                              <div className="mb-20">
                                    <span>Tags: </span>
                                    {
                                          (data.tags || []).map((item, index) => (
                                                <Tag color="blue" className="mb-5" key={index}>
                                                      {item}
                                                </Tag>
                                          ))
                                    }
                              </div>
                              <div className="mb-20">
                                    Mức lương: <strong>{data.salary}</strong>
                              </div>
                              <div className="mb-20">
                                    Ngày tạo: <strong>{data.createAt}</strong>
                              </div>
                              <div className="mb-20">
                              Cập nhật: <strong>{data.updateAt}</strong>
                              </div>
                              <div className="mb-20">
                                    <span>Thành phố: </span>
                                    {
                                          (data.city || []).map((item, index) => (
                                                <Tag color="orange" className="mb-5" key={index}>
                                                      {item}
                                                </Tag>
                                          ))
                                    }
                              </div>
                              <div className="mb-20">
                                    <p>Mô tả: </p>
                                    {data.description}
                              </div>
                        </>
                  )}
            </>
      )
}
export default JobDetailAdmin;