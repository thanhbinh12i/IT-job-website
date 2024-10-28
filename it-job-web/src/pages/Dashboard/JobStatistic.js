import { useEffect, useState } from "react";
import { getListJob } from "../../services/jobServices";
import { Card } from "antd";
import { getCookie } from "../../helpers/cookie";

function JobStatistic(){
      const idCompany = getCookie("id");
      const [data, setData] = useState();
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListJob(idCompany);
                  if(response){
                        let obj = {
                              total: 0,
                              statusTrue: 0,
                              statusFalse: 0,
                        };
                        obj.total = response.length;
                        response.forEach((item) => {
                              item.status ? obj.statusTrue++ : obj.statusFalse++;
                        });
                        setData(obj);
                  }
            }
            fetchApi();
      },[idCompany])
      return (
            <>
            {data && (
                  <Card title="Job">
                        <div className="mb-10">
                              Số lượng job: <strong>{data.total}</strong>
                        </div>
                        <div className="mb-10">
                              Job đang bật: <strong>{data.statusTrue}</strong>
                        </div>
                        <div className="mb-10">
                             Job đang tắt đọc: <strong>{data.statusFalse}</strong>
                        </div>
                  </Card>
            )}
            </>
      )
}
export default JobStatistic;