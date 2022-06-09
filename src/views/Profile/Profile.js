import React, { useState, useCallback, useEffect } from "react";
import { Typography } from "antd";
import PageHeader from "../../components/PageHeader";
import { StyledProfile } from "./Profile.style";
import { t } from "../../utils";
import { GET_USER } from "../../services/profile.service";

const { Title, Text } = Typography;
export default function Profile() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    password: "456123",
    phone: "123456789",
    email: "john@example.com",
    address: "31 The Green London",
  });

  const fetchUser = async () => {
    const data = await GET_USER();
    if (data) {
      setUser(data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <StyledProfile>
      <PageHeader title={t("My Profile")} />
      <div className="user-block">
        <Title level={3}>User info</Title>
        <table className="user-table">
          <tr>
            <td>
              <Text>First name:</Text>
            </td>
            <td>
              <Text strong>{user?.firstName}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Last name:</Text>
            </td>
            <td>
              <Text strong>{user?.lastName}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Email:</Text>
            </td>
            <td>
              <Text strong>{user?.email}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Phone:</Text>
            </td>
            <td>
              <Text strong>{user?.phone}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Address:</Text>
            </td>
            <td>
              <Text strong>{user?.address}</Text>
            </td>
          </tr>
        </table>
      </div>
    </StyledProfile>
  );
}
