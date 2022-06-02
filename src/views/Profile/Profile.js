import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import PageHeader from "../../components/PageHeader";
import { EditeIcon } from "../../utils/Images";
import { StyledProfile } from "./Profile.style";
import { t } from "../../utils";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function Profile() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <StyledProfile>
      <PageHeader title={t("My Profile")} />
      <div className="user_img">
      </div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "firstName"]}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "lastName"]}
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phone"]}
          label="Phone number"
          rules={[{ required: true }]}
        >
          <Input placeholder="+998995556677" />
        </Form.Item>
        {/* <Form.Item
          name={["user", "password"]}
          label="Password"
          rules={[
            {
              type: "password",
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        <Form.Item
          name={["user", "password"]}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledProfile>
  );
}

export default Profile;
