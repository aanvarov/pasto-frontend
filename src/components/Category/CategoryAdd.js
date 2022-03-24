import React, { useState, useCallback } from "react";
import { Modal, Input, Form, message } from "antd";
import { CREATE_CATEGORY } from "../../services/category.service";
import PropTypes from "prop-types";
import { t } from "../../utils";

export default function CategoryAdd({ isVisible, hideModal, fetchData }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
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
    const { data } = await CREATE_CATEGORY({ ...inputValues });

    if (data) {
      message.success(t("added successfully"));
      fetchData();
      hideModal();
    }
  };

  return (
    <Modal
      title={t("Add Category")}
      style={{ top: 20 }}
      visible={isVisible}
      okText={t("Create Category")}
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
        <Form.Item label={t("Description")}>
          <Input
            name="description"
            value={inputValues.description}
            onChange={handleInputChange}
            required
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

CategoryAdd.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
