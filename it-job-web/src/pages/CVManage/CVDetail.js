import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { changeStatusCV, getDetailCV } from "../../services/cvServices";
import { getDetailJob } from "../../services/jobServices";
import GoBack from "../../components/Goback";
import { Card, Tag } from "antd";

function CVDetail() {
      const params = useParams();
      const [dataCv, setDataCv] = useState([]);
      const [dataJob, setDataJob] = useState([]);
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getDetailCV(params.id);
                  if (response) {
                        const responseJob = await getDetailJob(response.idJob);
                        if (responseJob) {
                              setDataCv(response);
                              setDataJob(responseJob);
                        }
                  }
                  changeStatusCV(params.id, { statusRead: true });
            }
            fetchApi();
      })
      return (
            <>
                  <GoBack />
                  <Card
                        title={"Ứng viên: " + dataCv.name}
                  >
                        <div className="mb-5">Ngày gửi: <strong>{dataCv.createAt}</strong> </div>
                        <div className="mb-5">Số điện thoại: <strong>{dataCv.phone}</strong> </div>
                        <div className="mb-5">Số điện thoại: <strong>{dataCv.phone}</strong> </div>
                        <div className="mb-5">Số điện thoại: <strong>{dataCv.phone}</strong> </div>
                        <div className="mb-5">Email: <strong>{dataCv.email}</strong> </div>
                        <div className="mb-5">Thành phố ứng tuyển: <strong>{dataCv.city}</strong> </div>
                        <div className="mb-5"> Giới thiệu bản thân: </div>
                        <div className="mb-5">{dataCv.description}</div>
                        <div className="mb-5">Link project: </div>
                        <div className="mb-5">{dataCv.linkProject}</div>
                  </Card>
                  <br />
                  <br />
                  <Card
                        title={"Thông tin job: " + dataJob.name}
                  >
                        <div className="mb-5">Tags: {dataJob.tags && (
                              <>
                                    {dataJob.tags.map((item, index) => (
                                          <Tag color="blue" key={index}>{item}</Tag>
                                    ))}
                              </>
                        )} </div>
                        <div className="mb-5">Mức lương: <strong>{dataJob.salary}$</strong> </div>
                        <div className="mb-5">Mô tả: </div>
                        <div className="mb-5">{dataJob.description}</div>
                  </Card>
            </>
      )
}
export default CVDetail;