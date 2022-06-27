import React, { useState, useEffect } from "react";
import { Table, Tag, Button, Popover } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { StyledOrderList } from "./OrderList.style";
import Pageheader from "../../components/PageHeader";
import { FETCH_ORDERS, UPDATE_ORDER } from "../../services/orders.service";
import { t } from "../../utils";
import socket from "../../services/socket.service";
import moment from "moment";

function OrderList() {
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     date: "25/09/2021",
  //     customer_name: "Amalea Trigwell",
  //     location: "2271 Talisman Court",
  //     amount: "$148.84",
  //     order_status: "cancelled",
  //   },
  //   {
  //     id: 2,
  //     date: "28/08/2021",
  //     customer_name: "Leodora Grut",
  //     location: "2 Ridgeview Trail",
  //     amount: "$142.17",
  //     order_status: "delivered",
  //   },
  //   {
  //     id: 3,
  //     date: "16/01/2022",
  //     customer_name: "Brandise Feldbrin",
  //     location: "78360 Morrow Terrace",
  //     amount: "$66.39",
  //     order_status: "ready",
  //   },
  //   {
  //     id: 4,
  //     date: "02/05/2022",
  //     customer_name: "Aron Nertney",
  //     location: "2164 Westridge Avenue",
  //     amount: "$82.42",
  //     order_status: "pending",
  //   },
  //   {
  //     id: 5,
  //     date: "06/01/2022",
  //     customer_name: "Clim Grigorushkin",
  //     location: "3743 Eastwood Drive",
  //     amount: "$130.89",
  //     order_status: "cancelled",
  //   },
  //   {
  //     id: 6,
  //     date: "25/01/2022",
  //     customer_name: "Shepperd Boustead",
  //     location: "97282 Dapin Pass",
  //     amount: "$112.87",
  //     order_status: "delivered",
  //   },
  //   {
  //     id: 7,
  //     date: "11/02/2022",
  //     customer_name: "Elbertine De Castri",
  //     location: "9 Pawling Park",
  //     amount: "$137.42",
  //     order_status: "pending",
  //   },
  //   {
  //     id: 8,
  //     date: "27/05/2021",
  //     customer_name: "Adelaide Panketh",
  //     location: "48617 Utah Center",
  //     amount: "$135.88",
  //     order_status: "ready",
  //   },
  //   {
  //     id: 9,
  //     date: "25/09/2021",
  //     customer_name: "Thatcher Acton",
  //     location: "31457 Brickson Park Avenue",
  //     amount: "$72.99",
  //     order_status: "pending",
  //   },
  //   {
  //     id: 10,
  //     date: "24/07/2021",
  //     customer_name: "Benedicto Hoffman",
  //     location: "2 Glacier Hill Court",
  //     amount: "$145.26",
  //     order_status: "cancelled",
  //   },
  //   {
  //     id: 11,
  //     date: "25/09/2021",
  //     customer_name: "Amalea Trigwell",
  //     location: "2271 Talisman Court",
  //     amount: "$148.84",
  //     order_status: "cancelled",
  //   },
  //   {
  //     id: 12,
  //     date: "28/08/2021",
  //     customer_name: "Leodora Grut",
  //     location: "2 Ridgeview Trail",
  //     amount: "$142.17",
  //     order_status: "delivered",
  //   },
  //   {
  //     id: 13,
  //     date: "16/01/2022",
  //     customer_name: "Brandise Feldbrin",
  //     location: "78360 Morrow Terrace",
  //     amount: "$66.39",
  //     order_status: "ready",
  //   },
  //   {
  //     id: 14,
  //     date: "02/05/2022",
  //     customer_name: "Aron Nertney",
  //     location: "2164 Westridge Avenue",
  //     amount: "$82.42",
  //     order_status: "pending",
  //   },
  //   {
  //     id: 15,
  //     date: "06/01/2022",
  //     customer_name: "Clim Grigorushkin",
  //     location: "3743 Eastwood Drive",
  //     amount: "$130.89",
  //     order_status: "cancelled",
  //   },
  // ]);
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
    }
    setLoading(false);
  };

  const updateOrder = async (record, status) => {
    console.log("updateOrder", record);
    // update order status
    const data = await UPDATE_ORDER(record._id, { ...record, status });

    if (data) {
      console.log("res", data);
      getData();
      socket.emit("orderStatus");
    }
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
      render: (text) => moment(text).format("MMM D HH:MM"),
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
      render: (text) => `${text.toLocaleString("fi-FI")} UZS`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) =>
        text == "pending" ? (
          <div
            style={{
              background: "#FFF0ED",
              color: "#FF6D4D",
              textAlign: "center",
              padding: "10px 10px",
              borderRadius: "10px",
            }}
          >
            New Order
          </div>
        ) : text == "cancelled" ? (
          <div
            style={{
              background: "#ff5b5b40",
              color: "#FF5B5B",
              textAlign: "center",
              padding: "10px 10px",
              borderRadius: "10px",
            }}
          >
            Cancelled
          </div>
        ) : text == "delivered" ? (
          <div
            style={{
              background: "#D9F3EA",
              color: "#00B074",
              textAlign: "center",
              padding: "10px 10px",
              borderRadius: "10px",
            }}
          >
            Delivered
          </div>
        ) : (
          <div
            style={{
              background: "#DFF0FA",
              color: "#2D9CDB",
              textAlign: "center",
              padding: "10px 10px",
              borderRadius: "10px",
            }}
          >
            In Progress
          </div>
        ),
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Popover
          placement="bottom"
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Button
                type="primary"
                onClick={() => updateOrder(record, "ready")}
              >
                Accept Order
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => updateOrder(record, "cancelled")}
              >
                Cancel
              </Button>
            </div>
          }
          trigger="hover"
        >
          <Button>
            <FiMoreHorizontal size={20} />
          </Button>
        </Popover>
      ),
    },
  ];
  useEffect(() => {
    getData();
  }, []);

  socket.on("connect", () => {
    console.log(socket.id);
    socket.on("eshak", (data) => {
      console.log("sdsdsd", data);
      getData();
    });
  });

  return (
    <StyledOrderList>
      <Pageheader title={t("Orders")} iconName="OrderListIcon" data={orders} />
      <div>
        <Table
          columns={columns}
          loading={loading}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) =>
                navigate(`/restaurants/orders/${record._id}`, {
                  state: { ...record },
                }),
            };
          }}
          dataSource={orders}
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
