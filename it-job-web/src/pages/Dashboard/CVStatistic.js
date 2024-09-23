import { useEffect, useState } from "react";
import { Card } from "antd";
import { getCookie } from "../../helpers/cookie";
import { getListCV } from "../../services/cvServices";

function CVStatistic(){
      const idCompany = getCookie("id");
      const [data, setData] = useState();
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListCV(idCompany);
                  if(response){
                        let obj = {
                              total: 0,
                              statusTrue: 0,
                              statusFalse: 0,
                        };
                        obj.total = response.length;
                        response.forEach((item) => {
                              item.statusRead ? obj.statusTrue++ : obj.statusFalse++;
                        });
                        setData(obj);
                  }
            }
            fetchApi();
      },[])
      return (
            <>
            {data && (
                  <Card title="CV">
                        <div>
                              Số lượng CV: <strong>{data.total}</strong>
                        </div>
                        <div>
                              CV chưa đọc: <strong>{data.statusTrue}</strong>
                        </div>
                        <div>
                              CV đã đọc: <strong>{data.statusFalse}</strong>
                        </div>
                  </Card>
            )}
            </>
      )
}
export default CVStatistic;