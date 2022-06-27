import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import PageHeader from "../../components/PageHeader";
import { t } from "../../utils";
import {
  TotalOrdersIcon,
  TotalDeliveredIcon,
  TotalCancelledIcon,
  TotalRevenueIcon,
} from "../../utils/Images";
import Card from "./Card";
import { StyledDashboard } from "./Dashboard.style";
import { FETCH_ORDERS } from "../../services/orders.service";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const data = await FETCH_ORDERS();

    if (data) {
      setOrders(data);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const data = [
    {
      icon: <TotalOrdersIcon />,
      title: "Total Orders",
      dataIndex: orders.length,
    },
    {
      icon: <TotalDeliveredIcon />,
      title: "Total Delivered",
      dataIndex: orders.filter((item) => item.status == "delivered").length,
    },
    {
      icon: <TotalCancelledIcon />,
      title: "Total Cancelled",
      dataIndex: orders.filter((item) => item.status == "cancelled").length,
    },
    {
      icon: <TotalRevenueIcon />,
      title: "Total Revenue",
      dataIndex: `${orders
        .filter((item) => item.status == "delivered")
        .reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.total + 1000000,
          0
        )
        .toLocaleString("fi-FI")}`,
    },
  ];

  return (
    <StyledDashboard>
      <PageHeader title={t("Dashboard")} />
      <Row gutter={20}>
        {data.map((item, index) => (
          <Col sm={{ span: 24 }} md={{ span: 12 }} xl={{ span: 12 }}>
            <Card key={index} {...item} />
          </Col>
        ))}
      </Row>
    </StyledDashboard>
  );
}

export default Dashboard;
