import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
      const isLogin = true;
      return (
            <>
            {isLogin ? (<Outlet />) : (
                  <Navigate to="/login"/>
            )}
            </>
      )
}
export default PrivateRoutes;