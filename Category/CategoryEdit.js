import React, { useState, useCallback } from "react";
import { Modal, Input, Form, message } from "antd";
import PropTypes from "prop-types";
import { UPDATE_CATEGORY } from "../../services/category.service";
import { t } from "../../utils";

export default function CategoryEdit({
  isVisible,
  hideModal,
  fetchData,
  data = {},
}) {
  const [inputValues, setInputValues] = useState({
    ...data,
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    const { _id, ...rest } = inputValues;

    const data = await UPDATE_CATEGORY(_id, { ...rest });

    if (data) {
      message.success(t("Category updated successfully"));
      fetchData();
      hideModal();
    }
  };

  return (
    <Modal
      title={t("Update Category")}
      style={{ top: 20 }}
      visible={isVisible}
      okText={t("Update Category")}
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

CategoryEdit.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
