import React from "react";
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

function Dashboard() {
  const data = [
    {
      icon: <TotalOrdersIcon />,
      title: "Total Orders",
      dataIndex: 45,
    },
    {
      icon: <TotalDeliveredIcon />,
      title: "Total Delivered",
      dataIndex: 45,
    },
    {
      icon: <TotalCancelledIcon />,
      title: "Total Cancelled",
      dataIndex: 45,
    },
    {
      icon: <TotalRevenueIcon />,
      title: "Total Revenue",
      dataIndex: "$45",
    },
  ];

  return (
    <StyledDashboard>
      <PageHeader title={t("Dashboard")} />
      <Row gutter={20}>
        {data.map((item, index) => (
          <Col sm={{span: 12}} xl={{span: 6}} >
            <Card key={index} {...item} />
          </Col>
        ))}
      </Row>
    </StyledDashboard>
  );
}

export default Dashboard;
