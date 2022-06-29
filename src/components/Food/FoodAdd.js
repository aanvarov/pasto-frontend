import React, { useState, useCallback, useEffect } from "react";
import { Modal, Input, Form, message, Select } from "antd";
import { CREATE_FOOD } from "../../services/food.service";
import PropTypes from "prop-types";
import { t } from "../../utils";
import { FETCH_CATEGORIES } from "../../services/category.service";

const { Option } = Select;
const { TextArea } = Input;
export default function FoodAdd({ isVisible, hideModal, fetchData }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    price: 0,
    description: "",
    category: [],
    img: "",
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
    const { name, description, price, category, img } = inputValues;
    if (!name || !description || !price || !category || !img) {
      return message.error(t("Please fill all fields"));
    }
    const data = await CREATE_FOOD({ ...inputValues });

    if (data) {
      message.success(t("Successfully created!"));
      fetchData();
      hideModal();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
            defaultValue="Choose category"
            onChange={handleSelectChange}
            value={inputValues.category}
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

FoodAdd.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
