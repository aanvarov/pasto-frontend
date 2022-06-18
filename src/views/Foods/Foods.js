import React, { lazy, Suspense, useCallback, useState, useEffect } from "react";
import {
  message,
  Table,
  Image,
  Tabs,
  Button,
  Typography,
  Input,
  Dropdown,
  Menu,
  Popconfirm,
  Row,
  Col,
} from "antd";
import PageHeader from "../../components/PageHeader";
import StyledFoods from "./Foods.style";
import { t } from "../../utils";
import { FETCH_FOODS, DELETE_FOOD, UPDATE_STATUS_FOOD } from "../../services/food.service";
import {
  AiOutlineShoppingCart,
  AiOutlineMore,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import socketService from "../../services/socket.service";

const AddModal = lazy(() => import("../../components/Food/FoodAdd"));
const EditModal = lazy(() => import("../../components/Food/FoodEdit"));

function Foods() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedFood, setSelectedFood] = useState(null);
  const [edit, setEdit] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await FETCH_FOODS();
    if (data) {
      setData(data);
    }
    setLoading(false);
  };

  const handleEditModal = (data) => {
    setEdit(true);
    setSelectedFood(data);
  };

  const handleHideEditModal = () => {
    setEdit(false);
    setSelectedFood(null);
  };

  const handleHideModal = useCallback(() => {
    setShow(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setShow(true);
  }, []);

  const handleDeleteFood = async (item) => {
    try {
      const data = await DELETE_FOOD(item?._id);
      fetchData();
      message.success(t("Food deleted successfully"));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatusFood = async (item) => {
    try {
      const data = await UPDATE_STATUS_FOOD(
        item?._id,
        item?.status == "instock" ? { status: "outofstock" } : { status: "instock" }
      );
      fetchData();
      message.success(t("Food status updated successfully"));
      // socket.on("connect", () => {
      //   console.log(socket.id);
      // });
      socketService.emit("updateFood");
    } catch (err) {
      console.log(err);
    }
  };

  const menu = (item) => (
    <Menu>
      <Menu.Item key="0">
        <Button
          style={{ width: "100%" }}
          type="primary"
          ghost
          onClick={() => handleEditModal(item)}
        >
          Edit
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Popconfirm
          title={"Are you delete this food?"}
          onConfirm={() => handleDeleteFood(item)}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ width: "100%" }} type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledFoods>
      <PageHeader
        btnLabel={t("Add food")}
        iconName="IoFastFoodOutline"
        title={t("Foods")}
        data={data}
        onClick={handleShowModal}
      />
      {show ? (
        <Suspense fallback="Loading...">
          <AddModal isVisible={show} hideModal={handleHideModal} fetchData={fetchData} />
        </Suspense>
      ) : null}
      {edit && selectedFood ? (
        <Suspense fallback="Loading...">
          <EditModal
            isVisible={edit}
            fetchData={fetchData}
            data={selectedFood}
            hideModal={handleHideEditModal}
          />
        </Suspense>
      ) : null}
      <div className="card-inner">
        {data?.map((item) => (
          <div key={item?._id} className="card">
            {/* <Dropdown overlay={menu(item)} trigger={["click"]}>
              <Button
                className="ant-dropdown"
                onClick={(e) => e.preventDefault()}
              >
                <AiOutlineMore size={24} />
              </Button>
            </Dropdown> */}
            <div className="imageWrapper">
              {item?.status == "outofstock" && <div className="black-overlay"></div>}
              <img src={item?.img} alt={item?.name} />
            </div>
            <div className="card__body">
              <h2>{item?.name}</h2>
              <p>{item?.description}</p>
              <h2 className="price">
                {item?.price}
                <sub>uzs</sub>
              </h2>
              <h3>Status: {item?.status}</h3>
              <Row gutter={16} style={{ width: "100%" }}>
                <Col span={8}>
                  <Button
                    style={{ width: "100%" }}
                    size="large"
                    type="primary"
                    ghost
                    onClick={() => handleEditModal(item)}
                  >
                    <AiOutlineEdit size={25} /> Edit
                  </Button>
                </Col>
                <Col span={8}>
                  <Popconfirm
                    title={`Do you want to make ${
                      item?.status == "instock" ? "out of stock" : " in stock"
                    } ?`}
                    onConfirm={() => handleStatusFood(item)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button style={{ width: "100%" }} size="large" type="primary">
                      Make {item?.status == "instock" ? "out of stock" : " in stock"}
                    </Button>
                  </Popconfirm>
                </Col>
                <Col span={8}>
                  <Popconfirm
                    title={"Will you delete this food?"}
                    onConfirm={() => handleDeleteFood(item)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button style={{ width: "100%" }} size="large" type="primary" danger>
                      <AiOutlineDelete size={25} /> Delete
                    </Button>
                  </Popconfirm>
                </Col>
              </Row>
              {/* <Button size="large" type="primary">
                <AiOutlineShoppingCart size={20} /> Add to Card
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </StyledFoods>
  );
}

export default Foods;
