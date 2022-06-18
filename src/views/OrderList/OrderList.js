import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { StyledOrderList } from "./OrderList.style";
import Pageheader from "../../components/PageHeader";
import { FETCH_ORDERS } from "../../services/orders.service";
import { io } from "socket.io-client";
import { t } from "../../utils";

function OrderList() {
  const [data, setData] = useState([
    {
      id: 1,
      date: "25/09/2021",
      customer_name: "Amalea Trigwell",
      location: "2271 Talisman Court",
      amount: "$148.84",
      order_status: "cancelled",
    },
    {
      id: 2,
      date: "28/08/2021",
      customer_name: "Leodora Grut",
      location: "2 Ridgeview Trail",
      amount: "$142.17",
      order_status: "delivered",
    },
    {
      id: 3,
      date: "16/01/2022",
      customer_name: "Brandise Feldbrin",
      location: "78360 Morrow Terrace",
      amount: "$66.39",
      order_status: "ready",
    },
    {
      id: 4,
      date: "02/05/2022",
      customer_name: "Aron Nertney",
      location: "2164 Westridge Avenue",
      amount: "$82.42",
      order_status: "pending",
    },
    {
      id: 5,
      date: "06/01/2022",
      customer_name: "Clim Grigorushkin",
      location: "3743 Eastwood Drive",
      amount: "$130.89",
      order_status: "cancelled",
    },
    {
      id: 6,
      date: "25/01/2022",
      customer_name: "Shepperd Boustead",
      location: "97282 Dapin Pass",
      amount: "$112.87",
      order_status: "delivered",
    },
    {
      id: 7,
      date: "11/02/2022",
      customer_name: "Elbertine De Castri",
      location: "9 Pawling Park",
      amount: "$137.42",
      order_status: "pending",
    },
    {
      id: 8,
      date: "27/05/2021",
      customer_name: "Adelaide Panketh",
      location: "48617 Utah Center",
      amount: "$135.88",
      order_status: "ready",
    },
    {
      id: 9,
      date: "25/09/2021",
      customer_name: "Thatcher Acton",
      location: "31457 Brickson Park Avenue",
      amount: "$72.99",
      order_status: "pending",
    },
    {
      id: 10,
      date: "24/07/2021",
      customer_name: "Benedicto Hoffman",
      location: "2 Glacier Hill Court",
      amount: "$145.26",
      order_status: "cancelled",
    },
    {
      id: 11,
      date: "25/09/2021",
      customer_name: "Amalea Trigwell",
      location: "2271 Talisman Court",
      amount: "$148.84",
      order_status: "cancelled",
    },
    {
      id: 12,
      date: "28/08/2021",
      customer_name: "Leodora Grut",
      location: "2 Ridgeview Trail",
      amount: "$142.17",
      order_status: "delivered",
    },
    {
      id: 13,
      date: "16/01/2022",
      customer_name: "Brandise Feldbrin",
      location: "78360 Morrow Terrace",
      amount: "$66.39",
      order_status: "ready",
    },
    {
      id: 14,
      date: "02/05/2022",
      customer_name: "Aron Nertney",
      location: "2164 Westridge Avenue",
      amount: "$82.42",
      order_status: "pending",
    },
    {
      id: 15,
      date: "06/01/2022",
      customer_name: "Clim Grigorushkin",
      location: "3743 Eastwood Drive",
      amount: "$130.89",
      order_status: "cancelled",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    const data = await FETCH_ORDERS();
    if (data) {
      console.log("orders", data);
      setOrders(data);
      setData(data);
    }
    setLoading(false);
  };

  const updateOrder = (order) => {
    console.log("updateOrder", order);
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Customer Name",
      dataIndex: "customer",
      key: "customer",
      render: (text) => text.firstName + " " + text.lastName,
    },
    {
      title: "Location ",
      dataIndex: "customer",
      key: "customer",
      render: (text) => text.address,
    },
    {
      title: "Amount ",
      dataIndex: "total",
      key: "total",
      render: (text) => `${text} UZS`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (text == "pending" ? "New Order" : "On Delivery"),
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      render: (text) =>
        text == "pending" ? <button onClick={updateOrder}>Accept Order</button> : "On Delivery",
    },
  ];

  const fakeColumns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    {
      title: "Location ",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Amount ",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `${text} UZS`,
    },
    {
      title: "Status",
      dataIndex: "order_status",
      key: "order_status",
      render: (text) => (text == "pending" ? "New Order" : "On Delivery"),
    },
  ];

  // useEffect(() => {
  //   getData();
  //   const socket = io("http://localhost:3001", { transports: ["websocket"] });
  //   socket.on("connect", () => {
  //     console.log(socket.id);
  //     socket.on("eshak", (data) => {
  //       console.log("sdsdsd", data);
  //       getData();
  //     });
  //   });
  // }, []);

  return (
    <StyledOrderList>
      <Pageheader title={t("Orders")} iconName="OrderListIcon" data={data} />
      <div>
        <Table
          columns={fakeColumns}
          // loading={loading}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => navigate(`/restaurants/orders/${record.id}`),
            };
          }}
          dataSource={data}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
