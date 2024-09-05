import { Button } from "antd";
import logo from "./logo.jpg"
import { Link } from "react-router-dom";

function Header() {
      return (
            <>
                  <header className="layout-default__header">
                        <div className="layout-default__header-left">
                              <Link to="/">
                                    <img src={logo} alt="Logo" className="logo" />
                              </Link>

                        </div>
                        <div className="layout-default__header-center">
                              <h1>IT Job Portal</h1>
                        </div>
                        <div className="layout-default__header-right">
                              <Button type="primary" className="btn btn-login">Login</Button>
                              <Button className="btn btn-signup">Sign Up</Button>
                        </div>

                  </header>
            </>
      )
}
export default Header;