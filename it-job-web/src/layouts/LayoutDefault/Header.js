
import logo from "./logo.jpg"
import { Link, NavLink } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";

function Header() {
      const token = getCookie("token");
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
                              {token ? (
                                    <>
                                          <NavLink to="/admin">Quản lý</NavLink>
                                          <NavLink to="/logout">Đăng xuất</NavLink>
                                    </>

                              ) : (
                                    <>
                                          <NavLink to="/login">Đăng nhập</NavLink>
                                          <NavLink to="/register">Đăng ký</NavLink>
                                    </>
                              )}
                        </div>

                  </header>
            </>
      )
}
export default Header;