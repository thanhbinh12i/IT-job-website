import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons"
import JobList from "./JobList";

function JobManage() {
      return (
            <>
                  <h1>Danh sách việc làm</h1>
                  <Link to="/create-job">
                        <Button icon={<PlusOutlined />}>Tạo việc mới</Button>
                  </Link>
                  <JobList className="mt-20"/>
            </>
      )
}
export default JobManage;