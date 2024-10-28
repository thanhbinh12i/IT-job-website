import { useEffect, useState } from "react";
import { Card } from "antd";
import { getCookie } from "../../helpers/cookie";
import { getDetailCompany } from "../../services/companyServices";

function InfoCompany(){
      const idCompany = getCookie("id");
      const [info, setInfo] = useState();

      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getDetailCompany(idCompany);
                  if(response){
                        setInfo(response);
                  }
            }
            fetchApi();
      },[idCompany])
      return (
            <>
            {info && (
                  <Card title="Thông tin công ty" size="small">
                        <div className="mb-10">
                              Tên công ty: <strong>{info.companyName}</strong>
                        </div>
                        <div className="mb-10">
                              Email : <strong>{info.email}</strong>
                        </div>
                        <div className="mb-10">
                              Số điện thoại: <strong>{info.phone}</strong>
                        </div>
                        <div className="mb-10">
                              Số nhân viên: <strong>{info.quantityPeople}</strong>
                        </div>
                  </Card>
            )}
            </>
      )
}
export default InfoCompany;