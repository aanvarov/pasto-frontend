import styled from "styled-components";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

export const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${pxToRem(36)};
  .page-header__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${pxToRem(8)};
    h3 {
      margin: 0;
      font-size: ${pxToRem(20)};
      font-weight: 700;
      color: ${COLORS.black};
    }
  }
  .page__header-btns-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .page__header-pdf-btn {
    font-size: 25px;
    cursor: pointer;
    fill: #f40f02;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${pxToRem(10)};
  }
`;
