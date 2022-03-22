import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import StyledSignUp from "./Auth.style";
import { updateRestaurant } from "../../store/auth/reducer";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../../services/auth.service";
import { t } from "../../utils";

export default function SignUp() {
  const [inputValues, setInputValues] = useState({
    password: "",
    passwordConfirmation: "",
    phone: "",
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const userData = await SIGN_UP(inputValues);

    if (userData) {
      const { token, data } = userData;
      dispatch(updateRestaurant({ token, ...data }));
    }
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  return (
    <StyledSignUp>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <h1>{t("Sign Up")}</h1>
        <Form.Item
          label={t("Name")}
          rules={[
            {
              required: true,
              message: t("Please input your name!"),
            },
          ]}
        >
          <Input
            size="large"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label={t("Phone")}>
          <Input
            size="large"
            name="phone"
            value={inputValues.phone}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label={t("Email")}
          rules={[
            {
              required: true,
              message: t("Please input your email!"),
            },
          ]}
        >
          <Input
            size="large"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={t("Password")}
          rules={[
            {
              required: true,
              message: t("Please input your password!"),
            },
          ]}
          hasFeedback
        >
          <Input.Password
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
            autoComplete="new-password"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="passwordConfirmation"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            name="passwordConfirmation"
            value={inputValues.passwordConfirmation}
            onChange={handleInputChange}
            size="large"
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            {t("Sign Up")}
          </Button>
          <p>
            <span style={{ color: "white" }}>
              {t("Do you have an account ?")}
            </span>{" "}
            <Link to="/sign-in">{t("Sign In")}</Link>
          </p>
        </Form.Item>
      </Form>
    </StyledSignUp>
  );
}
