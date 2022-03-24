import React, { useState, useCallback, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import StyledCategory from "./Category.style";
import { t } from "../../utils";
import { FETCH_CATEGORIES } from "../../services/category.service";

const AddModal = lazy(() => import("../../components/Category/CategoryAdd"));

function Category() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await FETCH_CATEGORIES();
    if (data) {
      setData(data);
    }
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
    </StyledCategory>
  );
}

export default Category;
