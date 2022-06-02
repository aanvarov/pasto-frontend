import styled from "styled-components";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

export const StyledCard = styled.div`
  background-color: ${COLORS.white};
  padding: 35px 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  .text_block{
    margin-left: ${pxToRem(25)};
    h3{
      font-size: ${pxToRem(40)};
      font-weight: 700;
      color: ${COLORS.darkBlue};
      line-height: ${pxToRem(15)}
    }
  }
  @media screen and (max-width: 992px) {
    .text_block{
      h3{
        font-size: ${pxToRem(28)};
      }
    }
  }
`;
