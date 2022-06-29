import React, { useState, useCallback, useEffect } from "react";
import { Modal, Input, Form, message, Select } from "antd";
import PropTypes from "prop-types";
import { UPDATE_FOOD } from "../../services/food.service";
import { FETCH_CATEGORIES } from "../../services/category.service";
import { t } from "../../utils";

const { TextArea } = Input;
const { Option } = Select;

export default function FoodEdit({
  isVisible,
  hideModal,
  fetchData,
  data = {},
}) {
  const [inputValues, setInputValues] = useState({
    ...data,
  });
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const data = await FETCH_CATEGORIES();

    if (data) {
      setCategories(data);
    }
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSelectChange = (value) => {
    setInputValues((state) => ({ ...state, category: [value] }));
  };

  const handleSubmit = async () => {
    const { _id, ...rest } = inputValues;

    const data = await UPDATE_FOOD(_id, { ...rest });

    if (data) {
      message.success(t("Food updated successfully"));
      fetchData();
      hideModal();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Modal
      title={t("Update Food")}
      style={{ top: 20 }}
      visible={isVisible}
      okText={t("Update Food")}
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
        <Form.Item label={t("Image")}>
          <Input
            name="img"
            value={inputValues.img}
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
        <Form.Item label={t("Category")}>
          <Select
            showSearch
            style={{ width: "100%" }}
            onChange={handleSelectChange}
            defaultValue={inputValues.category[0]._id}
            optionFilterProp="children"
          >
            {categories?.map((item) => (
              <Option key={item?._id} value={item?._id}>
                {item?.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={t("Description")}>
          <TextArea
            name="description"
            value={inputValues.description}
            placeholder="Description"
            rows={4}
            onChange={handleInputChange}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

FoodEdit.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
