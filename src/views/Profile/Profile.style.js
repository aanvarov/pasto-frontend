import styled from "styled-components";

export const StyledProfile = styled.div`
  margin: 0px;
  .user-block {
    width: 100%;
    max-width: 650px;
    .user-table {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
      tr {
        height: 65px;
      }
      td {
        border-bottom: 1px solid #ddd;
        padding: 8px;
      }
      th {
        border-bottom: 1px solid #ddd;
        padding: 8px;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04aa6d;
        color: white;
      }
    }
  }
`;
