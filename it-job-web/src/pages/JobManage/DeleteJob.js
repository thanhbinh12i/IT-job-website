import { Button, Popconfirm, Tooltip } from "antd";
import {DeleteOutlined} from "@ant-design/icons"
import { deleteJob } from "../../services/jobServices";

function DeleteJob(props){
      const {record, onReload} = props;
      const handleDelete = async () => {
            const response = await deleteJob(record.id);
            if(response){
                  onReload();
            }
      }
      return (
            <>
            <Tooltip title="Xóa">
                  <Popconfirm title="Bạn chắc chắn có muốn xóa không?" onConfirm={handleDelete}>
                        <Button className="ml-5" danger ghost icon={<DeleteOutlined />}></Button>
                  </Popconfirm>
            </Tooltip>
            </>
      )
}
export default DeleteJob;