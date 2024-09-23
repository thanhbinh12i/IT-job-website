import { Layout } from "antd";
import "./LayoutDefault.scss";
import logo from "../../images/logo.png";
import logoFold from "../../images/logo-fold.png";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MenuSider from "./MenuSider";
const { Sider, Content } = Layout;


function LayoutAdmin(){
      const [collapse, setCollapse] = useState(false);
      return (
            <>
            <Layout>
                        <header className="header">
                              <div className={"header__logo "  + (collapse && "header__logo--collapse")}>
                                    <img src={collapse ? logoFold : logo} alt="" />
                              </div>
                              <div className="header__nav">
                                    <div className="header__nav-left">
                                          <div className="header__collapse" onClick={() => setCollapse(!collapse)}>
                                                <MenuUnfoldOutlined />
                                          </div>
                                    </div>
                                    <div className="header__nav-right">
                                          <NavLink to="/">Trang chủ</NavLink>
                                          <NavLink to="/logout">Đăng xuất</NavLink>
                                    </div>
                              </div>
                        </header>
                        <Layout>
                              <Sider className="sider" collapsed={collapse} theme="light">
                                    <MenuSider />
                              </Sider>
                              <Content className="content">
                                    <Outlet />
                              </Content>
                        </Layout>
                  </Layout>
            </>
      )
}
export default LayoutAdmin;