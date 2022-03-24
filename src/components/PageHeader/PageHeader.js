import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { t } from "../../utils";

import { StyledPageHeader } from "./PageHeader.style";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

const ICONS = {
  BiCategory: <BiCategory size={pxToRem(24)} color={COLORS.grey} />,
  IoFastFoodOutline: (
    <IoFastFoodOutline size={pxToRem(24)} color={COLORS.grey} />
  ),
};

export default function PageHeader({
  title,
  btnLabel,
  onClick,
  data,
  iconName = "BiCategory",
  hideButton = false,
  children,
}) {
  const navigate = useNavigate();

  return (
    <StyledPageHeader className="page-header">
      <div className="page-header__title">
        {ICONS[iconName]}
        <h3>{`${data?.length ?? ""} ${t(title)}`}</h3>
      </div>
      <div className="page__header-btns-wrapper">
        {!hideButton && btnLabel ? (
          <Button
            type="primary"
            size="large"
            onClick={onClick}
            icon={<AiOutlinePlusCircle />}
          >
            {btnLabel}
          </Button>
        ) : null}
        {children}
      </div>
    </StyledPageHeader>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  // btnLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconName: PropTypes.oneOf(["BiCategory"]),
  hideButton: PropTypes.bool,
};
