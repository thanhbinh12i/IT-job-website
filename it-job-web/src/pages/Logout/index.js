import { useNavigate } from "react-router-dom";
import { deleteAllCookie } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout(){
      const navigate = useNavigate();
      const dispatch = useDispatch();

      deleteAllCookie();
      useEffect(()=>{
            dispatch(checkLogin(false));
            navigate("/login");
      },[])
      return (
            <></>
      )
      return (
            <>
            
            </>
      )
}
export default Logout;