import React, { useState, useCallback } from "react";
import { Modal, Input, Form, message } from "antd";
import { CREATE_FOOD } from "../../services/food.service";
import PropTypes from "prop-types";
import { t } from "../../utils";

export default function FoodAdd({ isVisible, hideModal, fetchData }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    price: 0,
    description: "",
    size: [],
    status: "",
    category: [],
    prepareTime: 0,
    active: false,
    img: "",
    rating: [],
    toppings: [],
    ingredients: [],
    isFeatured: false,
    featuredExpiresAt: null,
    featuredStartsAt: null,
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    const { name, description } = inputValues;
    if (!name || !description) {
      return message.error(t("Please fill all fields"));
    }
    const { data } = await CREATE_FOOD({ ...inputValues });

    if (data) {
      message.success(t("added successfully"));
      fetchData();
      hideModal();
    }
  };

  return (
    <Modal
      title={t("Add Food")}
      style={{ top: 20 }}
      visible={isVisible}
      okText={t("Create Food")}
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
        <Form.Item label={t("Price")}>
          <Input
            name="price"
            type="number"
            value={inputValues.price}
            onChange={handleInputChange}
            required
          />
        </Form.Item>
        <Form.Item label={t("Price")}>
          <Input
            name="price"
            type="number"
            value={inputValues.price}
            onChange={handleInputChange}
            required
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

FoodAdd.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
