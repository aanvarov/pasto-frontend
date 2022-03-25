import styled from "styled-components";
import { COLORS } from "../../constants";

const StyledFoods = styled.section`
  .card-inner {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 24px;

    .card {
      min-width: 336px;
      height: 480px;
      flex: 1;
      background: #fbfafa;
      box-shadow: 3px 3px 15px #a9a9a975;
      border-radius: 8px;
      text-align: center;

      img {
        width: 100%;
        max-height: 220px;
        min-height: 220px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
      }
      .card__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
        padding-top: 10px;
      }
      h2 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
      }
      p {
        height: 60px;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
      }
      .price {
        font-size: 36px;
        color: ${COLORS.main};
        margin-bottom: 20px;
      }
      button {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
      }
    }
  }
`;

export default StyledFoods;
