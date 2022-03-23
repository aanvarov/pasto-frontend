import styled from "styled-components";
import AuthBg from "../../assets/images/svg/auth-bg.svg";
import { pxToRem } from "../../utils";

const StyledAuth = styled.section`
  background: url(${AuthBg});
  background-repeat: no-repeat;
  background-size: cover;

  .auth__inner {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;
  }
  .auth__block {
    text-align: center;
    width: 40%;

    h2 {
      margin: 16px 0;
      font-size: ${pxToRem(32)};
      font-weight: bolder;
    }
    p {
      font-size: ${pxToRem(20)};
    }
  }
  form {
    width: 50%;

    h2 {
      margin-bottom: 0;
      font-size: ${pxToRem(32)};
      font-weight: bolder;
    }
    p {
      font-size: ${pxToRem(20)};
    }
    .ant-form-item {
      margin-bottom: ${pxToRem(15)};
    }
    button {
      width: 100%;
    }
    .ant-col-offset-8 {
      margin-left: 0;
    }
  }
`;

export default StyledAuth;
