import styled from "styled-components";

const OrderDetailsStyle = styled.section`
  .order_inner-blocks {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 40px;
  }
  .order_block--sm {
    min-width: 25%;
    flex: 1;

    .profile {
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: 0px 0px 10px lightgrey;
      border-radius: 16px;

      img {
        width: 160px;
        border-radius: 50%;
        margin-bottom: 15px;
      }
      .profile_note {
        margin-top: 30px;
        text-align: left;
        border-radius: 16px;
        color: white;
        background: #5e6c93;

        .profile_body {
          padding: 30px;
          padding-bottom: 0;

          h2 {
            font-size: 24px;
            color: white;
            font-weight: bolder;
          }
        }
        .profile_address {
          padding: 16px;
          padding-bottom: 0;
          display: flex;
          align-items: center;
          column-gap: 10px;
          background: #2d9cdb;
          border-radius: 16px;

          img {
            width: 49px;
            margin: 0;
          }
        }
      }
    }
    .history {
      margin-top: 40px;
      padding: 30px;
      box-shadow: 0px 0px 10px lightgrey;
      border-radius: 16px;
    }
  }
  .order_block--lg {
    min-width: 65%;
    flex: 1;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #00b074;
    color: white;
  }
  .ant-select-arrow {
    color: white;
  }
  @media (max-width: 1106px) {
    .order_inner-blocks {
      flex-direction: column;
    }
  }
`;

export default OrderDetailsStyle;
