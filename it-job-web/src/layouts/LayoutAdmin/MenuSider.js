import { Menu } from "antd";
import {AppstoreOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
function MenuSider() {
      const items = [
            {
                  label: <Link to="/admin">Tổng quan</Link>,
                  icon: <AppstoreOutlined />,
                  key: "/admin"
            },
            {
                  label: <Link to="/info-company">Thông tin công ty</Link>,
                  icon: <AppstoreOutlined />,
                  key: "/info-company"
            },
            {
                  label: <Link to="/job-manage">Quản lý việc làm</Link>,
                  icon: <AppstoreOutlined />,
                  key: "/job-manage"
            },
            {
                  label: <Link to="/cv-manage">Quản lý CV</Link>,
                  icon: <AppstoreOutlined />,
                  key: "/cv-manage"
            }
      ]
      return (
            <>
                  <Menu
                        mode="inline"
                        items={items}
                        defaultSelectedKeys={['/']}
                        defaultOpenKeys={["admin"]}
                  />
            </>
      )
}
export default MenuSider;