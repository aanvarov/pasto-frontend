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

    .items-inner,
    .map-inner {
      margin-bottom: 40px;
      box-shadow: 0px 0px 10px lightgrey;
      border-radius: 16px;
    }
    .map-inner {
      padding: 20px;
      margin: 0;

      h2 {
        margin: 20px 0;
        font-size: 18px;
      }
      .driver {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 20px;

        .driver-card {
          display: flex;
          align-items: center;
          column-gap: 15px;
          flex: 1;

          h2 {
            margin: 0;
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
          img {
            width: 68px;
            border-radius: 50%;
          }
        }
        .driver-data {
          display: flex;
          column-gap: 15px;
          align-items: center;
          flex-wrap: wrap;
          flex: 1;
          min-width: 430px;

          .card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 15px;
            border-radius: 16px;
            column-gap: 15px;
            border: 1px solid #2d9cdb;

            p,
            h3 {
              margin: 0;
            }
            p {
              font-size: 14px;
              color: #a7a7a7;
            }
          }
        }
      }
    }
    .ant-table-thead > tr > th {
      background: #00b074;
      color: #fff;
    }
    .ant-table-pagination.ant-pagination {
      display: none;
    }
    .ant-table-thead
      > tr
      > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
      width: 0;
    }
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
