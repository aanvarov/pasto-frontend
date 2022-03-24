import React, { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { message, Table, Image, Tabs, Button, Typography, Input } from "antd";
import PageHeader from "../../components/PageHeader";
import StyledFoods from "./Foods.style";
import { t } from "../../utils";
import { FETCH_FOODS } from "../../services/food.service";

function Foods() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await FETCH_FOODS();
    if (data) {
      setData(data);
    }
    setLoading(false);
  };

  const handleHideModal = useCallback(() => {
    setShow(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <StyledFoods>
      <PageHeader
        btnLabel={t("Add Food")}
        iconName="IoFastFoodOutline"
        title="Food"
        data={data}
        onClick={handleShowModal}
      />
    </StyledFoods>
  );
}

export default Foods;
