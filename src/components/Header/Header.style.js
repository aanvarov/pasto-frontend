import styled from "styled-components";
import { COLORS } from "../../constants";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 25px;
  .notifications {
    display: flex;
    align-items: center;
    div {
      position: relative;
      padding: 10px;
      margin-right: 4px;
      margin-left: 4px;
      border-radius: 15px;
      svg {
        width: 21px;
        height: 21px;
      }
      span {
        position: absolute;
        width: 20px;
        text-align: center;
        height: 20px;
        font-size: 10px;
        font-weight: 400;
        color: ${COLORS.white};
        border-radius: 48px;
        top: -5px;
        left: 28px;
        border: 3px solid ${COLORS.white};
      }
    }
  }
  .right-side{
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .vertical-devider {
    width: 1px;
    height: 56px;
    background: ${COLORS.grey};
    border-radius: 8px;
  }
  .user-profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: ${COLORS.darkBlue};
    }
    .user-img {
      width: 56px;
      height: 56px;
      border-radius: 63px;
      background-color: ${COLORS.grey};
      position: relative;
      img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 63px;
      }
    }
  }

  @media only screen and (max-width: 1070px) {
    width: 100%;
    .notifications, .vertical-devider, .user-profile{
    display: none;
  }
}
`;
