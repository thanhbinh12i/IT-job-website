import { Button, Col, Form, Input, message, Row, Select, Switch } from "antd";
import { getCookie } from "../../helpers/cookie";
import { useEffect, useState } from "react";
import { getListTag } from "../../services/tagServices";
import { getTimeCurrent } from "../../helpers/getTime";
import { getListCity } from "../../services/cityServices";
import { createJob } from "../../services/jobServices";
const { TextArea } = Input;

function CreateJob() {
      const idCompany = getCookie("id");
      const [form] = Form.useForm();
      const [tags, setTags] = useState([]);
      const [city, setCity] = useState([]);
      const [mess, contextHolder] = message.useMessage();

      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListTag();
                  if (response) {
                        setTags(response);
                  }
            }
            fetchApi();
      }, []);
      useEffect(() => {
            const fetchApi = async () => {
                  const response = await getListCity();
                  if (response) {
                        setCity(response);
                  }
            }
            fetchApi();
      }, []);
      const handleFinish = async (values) => {
            values.idCompany = idCompany;
            values.createAt = getTimeCurrent();
            const response = await createJob(values);
            if (response) {
                  form.resetFields();
                  mess.open({
                        type: "success",
                        content: "Tạo job mới thành công!",
                        duration: 5
                  })
            } else {
                  mess.open({
                        type: "error",
                        content: "Tạo job mới không thành công!",
                        duration: 3
                  })
            }
      }
      return (
            <>
                  {contextHolder}

                  <h1>Tạo job mới</h1>
                  <Form onFinish={handleFinish} layout="vertical" form={form}>
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
                                                Tạo mới
                                          </Button>
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </>
      )
}
export default CreateJob;