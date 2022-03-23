import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import StyledSignUp from "./Auth.style";
import { SIGN_UP } from "../../services/auth.service";
import { t } from "../../utils";
import Logo from "../../assets/images/svg/logo.svg";

export default function SignUp() {
  const [inputValues, setInputValues] = useState({
    password: "123456",
    passwordConfirmation: "123456",
    phone: "+998903119996",
    name: "KFC",
    email: "test@mail.ru",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userData = await SIGN_UP(inputValues);

    if (userData) {
      navigate("/restaurants/sign-in", { state: userData });
    }
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  return (
    <StyledSignUp>
      <div className="container">
        <div className="auth__inner">
          <div className="auth__block">
            <img src={Logo} alt="pasto" />
            <h2>Sign Up</h2>
            <p>
              Let’s get you of set up so you can start creating your fint
              onboarding experinece
            </p>
          </div>
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
            <h2>{t("Welcome")}!</h2>
            <p>{t("Sign up to your account to continue")}</p>
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
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
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
              <Button
                size="large"
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
              >
                {t("Sign Up")}
              </Button>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                <span>{t("Do you have an account ?")}</span>{" "}
                <Link to="/restaurants/sign-in">{t("Sign In")}</Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledSignUp>
  );
}
