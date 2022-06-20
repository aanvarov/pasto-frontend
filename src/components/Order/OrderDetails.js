import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Steps, Select, Table } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PageHeader from "../../components/PageHeader";
import OrderDetailsStyle from "./OrderDetailsStyle";
import Map from "./Map";
import Profile from "../../assets/images/profile.jpg";
import WhiteDelivery from "../../assets/images/svg/delivery-white.svg";
import PhoneIcon from "../../assets/images/svg/phone-icon.svg";
import DelivryIcon from "../../assets/images/svg/delivry-icon.svg";

const { Step } = Steps;
const { Option } = Select;

function OrderDetails() {
  const locstion = useLocation();
  const state = locstion.state;
  const [data, setData] = useState(state.items);

  console.log(state);

  const columns = [
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
      render: (text) => (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
        >
          <img
            width={87}
            src={text.img}
            alt="product"
            style={{ borderRadius: "10px" }}
          />
          <div>
            <h3>{text.name}</h3>
          </div>
        </div>
      ),
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      render: (text, record) => record.length,
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

  const handleStatusChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <OrderDetailsStyle>
      <PageHeader
        title={`Order Details ${state.orderId}`}
        children={
          <>
            <Button
              danger
              size="large"
              //   onClick={onClick}
              //   icon={<AiOutlinePlusCircle />}
            >
              Cancel Order
            </Button>
            <Select
              size="large"
              defaultValue="pending"
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
            <h2>Wahyu Adi Kurniawan</h2>
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
            <Steps progressDot current={1} direction="vertical">
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </div>
        </div>
        <div className="order_block--lg">
          <div className="items-inner">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="map-inner">
            <Map
              origin={{ lat: 41.316441, lng: 69.294861 }}
              destination={{ lat: 39.647099, lng: 66.960289 }}
              data={[
                { lat: 41.316441, lng: 69.294861 },
                { lat: 39.647099, lng: 66.960289 },
              ]}
            />
            <h2>Delivery by</h2>
            <div className="driver">
              <div className="driver-card">
                <img src={Profile} alt="driver-image" />
                <div>
                  <h2>Kevin Hobs Jr.</h2>
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
                    <h3>7:01</h3>
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
