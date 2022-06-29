import React, { useState, useCallback } from "react";
import { Modal, Input, Form, message, TimePicker } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";
import { updateRestaurant } from "../../store/auth/reducer";
import { UPDATE_RESTAURANT } from "../../services/restaurant.service";
import PropTypes from "prop-types";
import { t } from "../../utils";

export default function RestaurantEdit({ isVisible, hideModal, data = {} }) {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    ...data,
  });
  const address = data?.geoLocation?.split(",");
  const [lat, setLat] = useState(address?.[0] || "");
  const [long, setLong] = useState(address?.[1] || "");

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleAddressChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "lat") {
      setLat(value);
    } else if (name === "long") {
      setLong(value);
    }
  }, []);

  const handleTimeChange = (time, timeString, name) => {
    if (name == "openHour") {
      setInputValues((state) => ({ ...state, openHour: timeString }));
    } else {
      setInputValues((state) => ({ ...state, closeHour: timeString }));
    }
  };

  const handleSubmit = async () => {
    const { _id, ...rest } = inputValues;
    console.log(lat, long);
    const data = await UPDATE_RESTAURANT(_id, {
      ...rest,
      geoLocation: `${lat},${long}`,
    });

    if (data) {
      message.success(t("Restaurant updated successfully"));
      dispatch(updateRestaurant(data));
      hideModal();
    }
  };

  return (
    <Modal
      title={t("Update Restaurant")}
      style={{ top: 20 }}
      visible={isVisible}
      okText={t("Update Restaurant")}
      cancelText={t("Cancel")}
      onOk={handleSubmit}
      centered
      onCancel={hideModal}
    >
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="on"
        layout="vertical"
      >
        <Form.Item label={t("Name")}>
          <Input
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            required
          />
        </Form.Item>
        <Form.Item label={t("Email")}>
          <Input
            name="email"
            type="text"
            value={inputValues.email}
            onChange={handleInputChange}
            required
          />
        </Form.Item>
        <Form.Item label={t("Phone")}>
          <Input
            name="email"
            type="text"
            value={inputValues.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Item>
        <Form.Item label={t("Latitude")}>
          <Input
            name="lat"
            type="text"
            value={lat}
            onChange={handleAddressChange}
            required
          />
        </Form.Item>
        <Form.Item label={t("Longitude")}>
          <Input
            name="long"
            type="text"
            value={long}
            onChange={handleAddressChange}
            required
          />
        </Form.Item>
        <Form.Item label={t("Image")}>
          <Input
            name="imgUrl"
            type="text"
            value={inputValues.imgUrl}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label={t("Open Hour")}>
          <TimePicker
            style={{ width: "100%" }}
            onChange={() => handleTimeChange("openHour")}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
        <Form.Item label={t("Close Hour")}>
          <TimePicker
            style={{ width: "100%" }}
            onChange={() => handleTimeChange("closeHour")}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

RestaurantEdit.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
