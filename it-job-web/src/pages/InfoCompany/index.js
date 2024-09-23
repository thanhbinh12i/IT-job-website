import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { Button, Card, Col, Form, Input, InputNumber, message, Row } from "antd";
import { editCompany, getDetailCompany } from "../../services/companyServices";
const { TextArea } = Input;

function InfoCompany() {
      const idCompany = getCookie("id");
      const [info, setInfo] = useState();
      const [isEdit, setIsEdit] = useState(false);
      const [form] = Form.useForm();
      const [mess, contextHolder] = message.useMessage();

      const fetchApi = async () => {
            const response = await getDetailCompany(idCompany);
            if (response) {
                  setInfo(response);
            }
      }
      useEffect(() => {
            fetchApi();
      }, [])
      const handleFinish = async (values) => {
            const response = await editCompany(idCompany, values);
            if (response) {
                  mess.success("Cập nhật thành công!");
                  fetchApi();
                  setIsEdit(false);
            }
      }
      const handleCancel = () => {
            setIsEdit(false);
            form.resetFields();
      }
      const handleEdit = () => {
            setIsEdit(true);
      }
      return (
            <>
                  {contextHolder}
                  {info && (
                        <Card title="Thông tin công ty" extra={
                              !isEdit ? (<Button onClick={handleEdit}> Chỉnh sửa</Button>) : (<Button onClick={handleCancel}>Hủy</Button>)
                        }>
                              <Form layout="vertical" onFinish={handleFinish} initialValues={info} form={form} disabled={!isEdit}>
                                    <Row gutter={20}>
                                          <Col span={24}>
                                                <Form.Item label="Tên công ty" name="companyName">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Email" name="email">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Số điện thoại" name="phone">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Địa chỉ" name="address  ">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Số lượng nhân sự" name="quantityPeople">
                                                      <InputNumber className="w-100" />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Thời gian làm việc" name="workingTime">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={8}>
                                                <Form.Item label="Link Website" name="website">
                                                      <Input />
                                                </Form.Item>
                                          </Col>
                                          <Col span={24}>
                                                <Form.Item label="Mô tả ngắn" name="description">
                                                      <TextArea rows={4} />
                                                </Form.Item>
                                          </Col>
                                          <Col span={24}>
                                                <Form.Item label="Thông tin chi tiết" name="detail">
                                                      <TextArea rows={16} />
                                                </Form.Item>
                                          </Col>
                                          {isEdit && (
                                                <Col span={24}>
                                                      <Form.Item>
                                                            <Button type="primary" htmlType="submit">Cập nhật</Button>
                                                            <Button onClick={handleCancel}>Hủy</Button>
                                                      </Form.Item>
                                                </Col>
                                          )}
                                    </Row>
                              </Form>
                        </Card>
                  )}
            </>
      )
}
export default InfoCompany;