import styled from "styled-components";

const StyledCategory = styled.section`
  .card-inner {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 24px;

    .card {
      min-width: 220px;
      flex: 1;
      padding: 24px;
      background: #fbfafa;
      box-shadow: 3px 3px 15px #a9a9a975;
      border-radius: 10px;
      text-align: center;

      div {
        display: flex;
        column-gap: 15px;
        justify-content: center;
      }
      button {
        width: 90px;
      }
    }
  }
`;

export default StyledCategory;
