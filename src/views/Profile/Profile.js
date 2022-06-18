import React, { useState, useCallback, useEffect } from "react";
import { Typography } from "antd";
import PageHeader from "../../components/PageHeader";
import { StyledProfile } from "./Profile.style";
import { t } from "../../utils";
import { GET_USER } from "../../services/profile.service";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;
export default function Profile() {
  const restaurant = useSelector((state) => state.account.restaurant);
  // const [user, setUser] = useState({
  //   firstName: "John",
  //   lastName: "Doe",
  //   password: "456123",
  //   phone: "123456789",
  //   email: "john@example.com",
  //   address: "31 The Green London",
  // });

  // const fetchUser = async () => {
  //   const data = await GET_USER();
  //   if (data) {
  //     setUser(data);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);
  return (
    <StyledProfile>
      <PageHeader title={t("My Profile")} />
      <div className="user-block">
        <Title level={3}>User info</Title>
        <table className="user-table">
          <tr>
            <td>
              <Text>Restaurant name:</Text>
            </td>
            <td>
              <Text strong>{restaurant?.name}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Email:</Text>
            </td>
            <td>
              <Text strong>{restaurant?.email}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Phone:</Text>
            </td>
            <td>
              <Text strong>{restaurant?.phone}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Address:</Text>
            </td>
            <td>
              <Text strong>{restaurant?.address}</Text>
            </td>
          </tr>
        </table>
      </div>
    </StyledProfile>
  );
}
