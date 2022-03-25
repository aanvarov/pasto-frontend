import React, { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { message, Table, Image, Tabs, Button, Typography, Input } from "antd";
import PageHeader from "../../components/PageHeader";
import StyledFoods from "./Foods.style";
import { t } from "../../utils";
import { FETCH_FOODS } from "../../services/food.service";
import { AiOutlineShoppingCart } from "react-icons/ai";

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

  useEffect(() => {
    fetchData();
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
      {show ? (
        <Suspense fallback="Loading...">
          <AddModal
            isVisible={show}
            hideModal={handleHideModal}
            fetchData={fetchData}
          />
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
            <img src={item?.img} alt={item?.name} />
            <div className="card__body">
              <h2>{item?.name}</h2>
              <p>{item?.description}</p>
              <h2 className="price">
                {item?.price}
                <sub>uzs</sub>
              </h2>
              <Button
                onClick={() => handleEditModal(item)}
                size="large"
                type="primary"
              >
                <AiOutlineShoppingCart size={20} /> Add to Card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </StyledFoods>
  );
}

export default Foods;
