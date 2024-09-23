import { Button, Col, Form, Input, message, Modal, Row, Select, Switch, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { getListTag } from "../../services/tagServices";
import { getListCity } from "../../services/cityServices";
import { getTimeCurrent } from "../../helpers/getTime";
import { updateJob } from "../../services/jobServices";
import { EditOutlined } from "@ant-design/icons"
const { TextArea } = Input;

function EditJob(props) {
      const { record, onReload } = props;
      const [form] = Form.useForm();
      const [tags, setTags] = useState([]);
      const [city, setCity] = useState([]);
      const [mess, contextHolder] = message.useMessage();
      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
            setIsModalOpen(true);
      }
      const closeModal = () => {
            setIsModalOpen(false);
      }
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListTag();
                  if (response) {
                        setTags(response);
                  }
            }
            fetchApi();
      }, [])
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListCity();
                  if (response) {
                        setCity(response);
                  }
            }
            fetchApi();
      }, [])
      const handleFinish = async (values) => {
            values.updateAt = getTimeCurrent();
            const response = await updateJob(record.id, values);
            if (response) {
                  setIsModalOpen(false);
                  onReload();
                  mess.open({
                        type: "success",
                        content: "Cập nhật thành công!",
                        duration: 5
                  })
            } else {
                  mess.open({
                        type: "error",
                        content: "Cập nhật không thành công!",
                        duration: 3
                  })
            }
      }
      return (
            <>
                  {contextHolder}
                  <Tooltip title="Chỉnh sửa">
                        <Button onClick={showModal} className="ml-5" icon={<EditOutlined />} type="primary"></Button>
                        <Modal open={isModalOpen} onCancel={closeModal} title="Chỉnh sửa job" footer={null}>
                              <Form onFinish={handleFinish} layout="vertical" form={form} initialValues={record}>
                                    <Row gutter={20}>
                                          <Col span={24}>
                                                <Form.Item label="Tên job" name="name">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={16}>
                                                <Form.Item label="Tags" name="tags">
                                                      <Select mode="multiple" options={tags} />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Mức lương" name="salary">
                                                      <Input addonAfter="$" />
                                                </Form.Item>
                                          </Col>
                                          <Col span={16}>
                                                <Form.Item label="Thành phố" name="city">
                                                      <Select mode="multiple" options={city} />
                                                </Form.Item>
                                          </Col>
                                          <Col span={24}>
                                                <Form.Item label="Mô tả" name="description">
                                                      <TextArea rows={16} />
                                                </Form.Item>
                                          </Col>
                                          <Col span={24}>
                                                <Form.Item valuePropName="checked" label="Trạng thái" name="status">
                                                      <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
                                                </Form.Item>
                                          </Col>
                                          <Col span={24}>
                                                <Form.Item>
                                                      <Button type="primary" htmlType="submit">
                                                            Cập nhật
                                                      </Button>
                                                </Form.Item>
                                          </Col>
                                    </Row>
                              </Form>

                        </Modal>
                  </Tooltip>
            </>
      )
}
export default EditJob;