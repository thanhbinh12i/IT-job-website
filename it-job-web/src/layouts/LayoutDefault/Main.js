import { Outlet } from "react-router-dom"

function Main(){
      return (
            <>
            <main className="layout-default__main">
                  <div className="container">
                        <Outlet />
                  </div>
            </main>
            </>
      )
}
export default Main;