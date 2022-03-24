import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUsergroupAdd,
  AiOutlinePlusCircle,
  AiOutlineShop,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { t } from "../../utils";

import { BiCategory, BiDumbbell } from "react-icons/bi";

import { StyledPageHeader } from "./PageHeader.style";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

const ICONS = {
  //   AiOutlineFilePdf: <AiOutlineFilePdf fill="#F40F02" />,
  //   AiOutlineUsergroupAdd: (
  //     <AiOutlineUsergroupAdd size={pxToRem(24)} color={COLORS.grey} />
  //   ),
  //   AiOutlineShop: <AiOutlineShop size={pxToRem(24)} color={COLORS.grey} />,
  //   BiDumbbell: <BiDumbbell size={pxToRem(24)} color={COLORS.grey} />,
  BiCategory: <BiCategory size={pxToRem(24)} color={COLORS.grey} />,
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
