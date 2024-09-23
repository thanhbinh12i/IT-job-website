import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie"
import { getListJob } from "../../services/jobServices";
import { Button, Table, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons"
import EditJob from "./EditJob";
import DeleteJob from "./DeleteJob";

function JobList(props) {
      const idCompany = getCookie("id");
      const { className = "" } = props;
      const [jobs, setJobs] = useState([]);
      const fetchApi = async () => {
            const response = await getListJob(idCompany);
            if (response) {
                  setJobs(response.reverse());
            }
      }
      useEffect(() => {
            fetchApi();
      }, [])
      const handleReload = () => {
            fetchApi();
      }
      const column = [
            {
                  title: "Tên job",
                  dataIndex: "name",
                  key: "name",
            },
            {
                  title: "Tags",
                  dataIndex: "tags",
                  key: "tags",
                  render: (_, record) =>
                        (record.tags || []).map((item, index) => (
                              <Tag color="blue" className="mb-5" key={index}>
                                    {item}
                              </Tag>
                        ))
            },
            {
                  title: "Mức lương",
                  dataIndex: "salary",
                  key: "salary",
            },
            {
                  title: "Thời gian",
                  key: "time",
                  render: (_, record) =>
                        <>
                              <small>Ngày tạo: {record.createAt}</small>
                              <br />
                              <small>Cập nhật: {record.updateAt}</small>
                        </>
            },
            {
                  title: "Trạng thái",
                  dataIndex: "status",
                  key: "status",
                  render: (_, record) => (
                        <>
                              {record.status ? (
                                    <Tag color="green">Đang bật</Tag>
                              ) : (
                                    <Tag color="red">Đang tắt</Tag>
                              )}
                        </>
                  )
            },
            {
                  title: "Hành động",
                  key: "actions",
                  render: (_, record) => (
                        <>
                              <Link to={`/detail-job/${record.id}`}>
                                    <Tooltip title="Xem chi tiết">
                                          <Button icon={<EyeOutlined />}></Button>
                                    </Tooltip>
                              </Link>
                              <EditJob record={record} onReload={handleReload}/>
                              <DeleteJob record={record} onReload={handleReload}/>
                        </>
                  )
            }
      ]
      return (
            <>
                  <div className={className}>
                        <Table dataSource={jobs} columns={column} rowKey="id" />
                  </div>
            </>
      )
}
export default JobList;
