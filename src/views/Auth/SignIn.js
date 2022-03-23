import React, { useState, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import { SIGN_IN } from "../../services/auth.service";
import { Form, Input, Button } from "antd";
import StyledSignIn from "./Auth.style";
import { t } from "../../utils";
import { updateRestaurant } from "../../store/auth/reducer";
import { useDispatch } from "react-redux";
import Logo from "../../assets/images/svg/logo.svg";

export default function SignIn() {
  const location = useLocation();
  const [inputValues, setInputValues] = useState({
    password: "",
    phone: location?.state?.phone ?? "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const userData = await SIGN_IN(inputValues);

    if (userData) {
      const { accessToken, refreshToken, restaurant } = userData;
      dispatch(updateRestaurant({ accessToken, refreshToken, ...restaurant }));
    }
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  return (
    <StyledSignIn>
      <div className="container">
        <div className="auth__inner">
          <div className="auth__block">
            <img src={Logo} alt="pasto" />
            <h2>Sign In</h2>
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
            <p>{t("Sign in to your account to continue")}</p>
            <Form.Item label={t("Phone")}>
              <Input
                size="large"
                name="phone"
                value={inputValues.phone}
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
                {t("Sign In")}
              </Button>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                <span>{t("Do you want to create an account ?")}</span>{" "}
                <Link to="/restaurants/sign-up">{t("Sign Up")}</Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledSignIn>
  );
}
