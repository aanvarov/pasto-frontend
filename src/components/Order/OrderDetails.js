import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Steps, Select, Table } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  UPDATE_ORDER,
  FETCH_ORDER_DETAILS,
} from "../../services/orders.service";
import PageHeader from "../../components/PageHeader";
import OrderDetailsStyle from "./OrderDetailsStyle";
import Map from "./Map";
import Profile from "../../assets/images/profile.jpg";
import WhiteDelivery from "../../assets/images/svg/delivery-white.svg";
import PhoneIcon from "../../assets/images/svg/phone-icon.svg";
import DelivryIcon from "../../assets/images/svg/delivry-icon.svg";
import moment from "moment";

const { Step } = Steps;
const { Option } = Select;

function OrderDetails() {
  const location = useLocation();
  const { state } = location;
  const [order, setOrder] = useState({});
  const [data, setData] = useState(state.items);
  const deliveryLocation = state?.deliveryLocation?.split(",");
  const restaurantLocation = state?.restaurant?.geoLocation?.split(",");

  const items = {};
  data.forEach((food) => {
    if (!items[food._id]) {
      items[food._id] = {
        id: food._id,
        name: food.name,
        price: food.price,
        img: food.img,
        quantity: 0,
      };
    }
    items[food._id].quantity += 1;
    items[food._id].totalPrice = food.price * items[food._id].quantity;
  });
  const foodItems = Object.values(items);

  const fetchOrder = async () => {
    const data = await FETCH_ORDER_DETAILS(location.state._id);
    if (data) {
      setOrder(data);
    }
  };

  const columns = [
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
      render: (text, record) => (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
        >
          <img
            width={87}
            src={record.img}
            alt="product"
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <div>
            <h3>{record.name}</h3>
          </div>
        </div>
      ),
    },
    {
      title: "Qty",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "",
      dataIndex: "action",
      render: () => (
        <AiOutlineCloseCircle
          style={{ cursor: "pointer" }}
          size="24"
          color="#FF5B5B"
        />
      ),
    },
  ];

  const handleStatusChange = async (value) => {
    const data = await UPDATE_ORDER(state._id, { ...order, status: value });
    setOrder(data);
  };

  const handleCancelOrder = async () => {
    const data = await UPDATE_ORDER(state._id, {
      ...order,
      status: "cancelled",
    });
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <OrderDetailsStyle>
      <PageHeader
        title={`Order Details ${state.orderId}`}
        children={
          <>
            <Button danger size="large" onClick={handleCancelOrder} icon="">
              Cancel Order
            </Button>
            <Select
              size="large"
              defaultValue={order?.status ? order.status : state.status}
              onChange={handleStatusChange}
            >
              <Option value="pending">New Order</Option>
              <Option value="ready">On Delivery</Option>
              <Option value="delivered">Delivered</Option>
            </Select>
          </>
        }
      />
      <div className="order_inner-blocks">
        <div className="order_block--sm">
          <div className="profile">
            <img src={Profile} alt="customer-image" />
            <h2>
              {state.customer?.firstName} {state.customer?.lastName}
            </h2>
            <Button type="primary">Customer</Button>
            <div className="profile_note">
              <div className="profile_body">
                <h2>Note Order</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="profile_address">
                <img src={WhiteDelivery} alt="driver-image" />
                <p>6 The Avenue, London EC50 4GN</p>
              </div>
            </div>
          </div>
          <div className="history">
            <h2>History</h2>
            <Steps
              progressDot
              current={
                order.status == "pending" ? 0 : order.status == "ready" ? 1 : 2
              }
              direction="vertical"
            >
              <Step
                title="Order Created"
                description={moment(order.createdAt).format(
                  "MMMM D YYYY, h:mm"
                )}
              />
              <Step
                title="On Delivery"
                description={moment(order.updatedAt).format(
                  "MMMM D YYYY, h:mm"
                )}
              />
              <Step
                title="Delivered"
                description={
                  order.status == "delivered"
                    ? moment(order.updatedAt).format("MMMM D YYYY, h:mm")
                    : "-"
                }
              />
            </Steps>
          </div>
        </div>
        <div className="order_block--lg">
          <div className="items-inner">
            <Table columns={columns} dataSource={foodItems} />
          </div>
          <div className="map-inner">
            <Map
              origin={{
                lat: parseInt(restaurantLocation[0]),
                lng: parseInt(restaurantLocation[1]),
              }}
              destination={{
                lat: parseInt(deliveryLocation[0]),
                lng: parseInt(deliveryLocation[1]),
              }}
              data={[
                {
                  lat: parseInt(restaurantLocation[0]),
                  lng: parseInt(restaurantLocation[1]),
                },
                {
                  lat: parseInt(deliveryLocation[0]),
                  lng: parseInt(deliveryLocation[1]),
                },
              ]}
            />
            <h2>Delivery by</h2>
            <div className="driver">
              <div className="driver-card">
                <img src={Profile} alt="driver-image" />
                <div>
                  <h2>Abror Anvarov</h2>
                  <p>ID-412455</p>
                </div>
              </div>
              <div className="driver-data">
                <div className="card">
                  <img src={PhoneIcon} alt="phone-icon" />
                  <div>
                    <p>Phone number</p>
                    <h3>+1-202-555-0182</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={DelivryIcon} alt="delivery-icon" />
                  <div>
                    <p>Delivery time</p>
                    <h3>{moment(order.estimatedTime).format("LT")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderDetailsStyle>
  );
}

export default OrderDetails;
