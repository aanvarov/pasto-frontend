import React, { useState, useCallback, useEffect, Suspense, lazy } from "react";
import { Button, message, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import StyledCategory from "./Category.style";
import { t } from "../../utils";
import {
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
} from "../../services/category.service";

const AddModal = lazy(() => import("../../components/Category/CategoryAdd"));
const EditModal = lazy(() => import("../../components/Category/CategoryEdit"));

function Category() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [edit, setEdit] = useState(false);

  const fetchData = async () => {
    const data = await FETCH_CATEGORIES();
    if (data) {
      setData(data);
    }
  };

  const handleEditModal = (data) => {
    setEdit(true);
    setSelectedEquipment(data);
  };

  const handleHideEditModal = () => {
    setEdit(false);
    setSelectedEquipment(null);
  };

  const handleHideModal = useCallback(() => {
    setShow(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setShow(true);
  }, []);

  const handleDeleteCategory = async (item) => {
    const data = await DELETE_CATEGORY(item?._id);
    if (data) {
      fetchData();
      message.success(t("Equipment deleted successfully"));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledCategory>
      <PageHeader
        btnLabel={t("Add Category")}
        iconName="BiCategory"
        title="Category"
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
      {edit && selectedEquipment ? (
        <Suspense fallback="Loading...">
          <EditModal
            isVisible={edit}
            fetchData={fetchData}
            data={selectedEquipment}
            hideModal={handleHideEditModal}
          />
        </Suspense>
      ) : null}
      <div className="card-inner">
        {data?.map((item) => (
          <div key={item?._id} className="card">
            <h2>{item?.name}</h2>
            <p>{item?.description}</p>
            <div>
              <Button
                type="primary"
                ghost
                onClick={() => handleEditModal(item)}
              >
                View
              </Button>
              <Popconfirm
                title={"Are you delete this category?"}
                onConfirm={() => handleDeleteCategory(item)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
            </div>
          </div>
        ))}
      </div>
    </StyledCategory>
  );
}

export default Category;
