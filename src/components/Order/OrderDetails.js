import React, { useState } from "react";
import { Button, Steps, Select, Table } from "antd";
import PageHeader from "../../components/PageHeader";
import OrderDetailsStyle from "./OrderDetailsStyle";
import Map from "./Map";
import Profile from "../../assets/images/profile.jpg";
import WhiteDelivery from "../../assets/images/svg/delivery-white.svg";

const { Step } = Steps;
const { Option } = Select;

function OrderDetails(props) {
  //   const { id } = props?.match?.params;
  const [data, setData] = useState({});

  const itemsData = [
    {
      img: Profile,
      name: "Watermelon juice with ice",
      rate: 4,
      reviews: 44,
      qty: 3,
      price: "$25",
      totalPrice: "$75",
    },
  ];

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
            style={{ borderRadius: "10px" }}
          />
          <div>
            <h3>{record.name}</h3>
            <p>{`(${record.reviews} reviews)`}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
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
  ];

  const handleStatusChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <OrderDetailsStyle>
      <PageHeader
        title={`Order Details #`}
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
            <img src={Profile} alt="" />
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
            <Table columns={columns} dataSource={itemsData} pagination={{}} />
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
                <img src={WhiteDelivery} alt="driver-image" />
                <div>
                  <h2>Kevin Hobs Jr.</h2>
                  <p>ID-412455</p>
                </div>
              </div>
              <div className="driver-data">
                <div className="card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderDetailsStyle>
  );
}

export default OrderDetails;
