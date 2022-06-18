import React, { useState, useCallback, useEffect, lazy, Suspense } from "react";
import { Typography, Button } from "antd";
import PageHeader from "../../components/PageHeader";
import { StyledProfile } from "./Profile.style";
import { t } from "../../utils";
import { GET_USER } from "../../services/profile.service";
import { useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";

const EditModal = lazy(() => import("../../components/Profile/ProfileEdit"));

const { Title, Text } = Typography;
export default function Profile() {
  const restaurant = useSelector((state) => state.account.restaurant);
  const [edit, setEdit] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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

  const handleEditModal = (data) => {
    setEdit(true);
    setSelectedRestaurant(data);
  };

  const handleHideEditModal = () => {
    setEdit(false);
    setSelectedRestaurant(null);
  };

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
              <Text strong>{restaurant?.geoLocation}</Text>
            </td>
          </tr>
        </table>
        <Button
          type="primary"
          style={{ marginTop: 25, display: "flex" }}
          icon={<AiOutlineEdit size={18} style={{ marginRight: 5 }} />}
          onClick={() => handleEditModal(restaurant)}
        >
          Edit
        </Button>
      </div>
      {edit && selectedRestaurant ? (
        <Suspense fallback="Loading...">
          <EditModal
            isVisible={edit}
            data={selectedRestaurant}
            hideModal={handleHideEditModal}
          />
        </Suspense>
      ) : null}
    </StyledProfile>
  );
}
