import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getListCV } from "../../services/cvServices";
import { Link } from "react-router-dom";
import { Button, Tag, Tooltip, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons"
import DeleteCV from "./DeleteCV";
import { getDetailJob } from "../../services/jobServices";
function CVList(props) {
      const idCompany = getCookie("id");
      const { className = "" } = props;
      const [listCV, setListCV] = useState([]);
      const fetchApi = async () => {
            const response = await getListCV(idCompany);
            let result = [];
            for (let i = 0; i < response.length; i++) {
                  const object = {
                        ...response[i],
                        nameJob: ""
                  }

                  const job = await getDetailJob(response[i].idJob);
                  object.nameJob = job.name;
                  result.push(object);
            }
            setListCV(result.reverse());
      }
      useEffect(() => {
            fetchApi();
            // eslint-disable-next-line
      }, [idCompany])
      const handleReload = () => {
            fetchApi();
      }
      const column = [
            {
                  title: "Tên job",
                  dataIndex: "nameJob",
                  key: "nameJob"
            },
            {
                  title: "Họ tên",
                  dataIndex: "name",
                  key: "name"
            },
            {
                  title: "Số điện thoại",
                  dataIndex: "phone",
                  key: "phone"
            },
            {
                  title: "Email",
                  dataIndex: "email",
                  key: "email"
            },
            {
                  title: "Ngày gửi",
                  key: "time",
                  render: (_, record) => (
                        <>{record.createAt}</>
                  )
            },
            {
                  title: "Trạng thái",
                  dataIndex: "statusRead",
                  key: "statusRead",
                  render: (_, record) => (
                        <>
                              {record.statusRead ? (
                                    <Tag color="green">Đã đọc</Tag>
                              ) : (
                                    <Tag color="gray">Chưa đọc</Tag>
                              )}
                        </>
                  )
            },
            {
                  title: "Hành động",
                  key: "actions",
                  render: (_, record) => (
                        <>
                              <Link to={`/detail-cv/${record.id}`}>
                                    <Tooltip title="Xem chi tiết">
                                          <Button icon={<EyeOutlined />}></Button>
                                    </Tooltip>
                              </Link>
                              <DeleteCV record={record} onReload={handleReload} />
                        </>
                  )
            }

      ]

      return (
            <>
                  <div className={className}>
                        <Table dataSource={listCV} columns={column} rowKey="id" />
                  </div>
            </>
      )
}
export default CVList;