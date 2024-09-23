import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { changeStatusCV, getDetailCV } from "../../services/cvServices";
import { getDetailJob } from "../../services/jobServices";

function CVDetail(){
      const params = useParams();
      const [cv, setSV] = useState();
      const [job, setJob] = useState();
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getDetailCV(params.id);
                  if(response){
                        const responseJob = await getDetailJob(response.idJob);
                        if(responseJob){
                              setSV(response);
                              setJob(responseJob);
                        }
                  }
                  changeStatusCV(params.id, {statusRead: true});
            }
            fetchApi();
      })
      return (
            <></>
      )
}
export default CVDetail;