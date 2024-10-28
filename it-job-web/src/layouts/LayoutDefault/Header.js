import logo from "./logo.jpg"
import { Link, NavLink } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";
import { Avatar, Button, Dropdown, Menu, Space, Typography } from "antd"
import { useSelector } from "react-redux";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { getDetailCompany } from "../../services/companyServices";
import { useEffect, useState } from "react";

function Header() {
      const id = getCookie("id");
      const isLoggedIn = useSelector((state) => state.loginReducer);
      const [user, setUser] = useState({});
      useEffect(() => {
            const fetchUserProfile = async () => {
                  if (id) {
                        const response = await getDetailCompany(id);
                        if (response) {
                              setUser(response);
                        }
                  }
            }
            fetchUserProfile();
      }, [id])
      const userMenu = (
            <Menu>
                  <Menu.Item key="profile" icon={<UserOutlined />} className="profile-item">
                        <Link to="/admin">Trang quản lí</Link>
                  </Menu.Item>
                  <Menu.Item key="logout" icon={<LogoutOutlined />} className="logout-item">
                        <NavLink to="/logout">Đăng xuất</NavLink>
                  </Menu.Item>
            </Menu>
      );
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
                              {isLoggedIn ? (
                                    <>
                                          <Dropdown
                                                overlay={userMenu}
                                                trigger={['click']}
                                                overlayClassName="user-profile"
                                                placement="bottomRight"
                                                align={{ offset: [0, 4] }}
                                          >
                                                <Space className="user-profile__button">
                                                      <Avatar icon={<UserOutlined />} />
                                                      <div>
                                                            <Typography.Text className="username">
                                                                  {user.companyName}
                                                            </Typography.Text>
                                                            <Typography.Text className="email">
                                                                  {user.email}
                                                            </Typography.Text>
                                                      </div>
                                                </Space>
                                          </Dropdown>

                                    </>

                              ) : (
                                    <>
                                          <NavLink to="/login">
                                                <Button>Đăng nhập</Button>
                                          </NavLink>
                                          <NavLink to="/register">
                                                <Button>Đăng ký</Button>
                                          </NavLink>
                                    </>
                              )}
                        </div>

                  </header>
            </>
      )
}
export default Header;