/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../constants";
import { pxToRem } from "../utils";

export const StyledApp = styled.main`
  /* ----- Main Layout --- */
  .custom-sidebar {
    background-color: ${COLORS.lightGrey};
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    width: ${pxToRem(STYLING_CONFIGS.SIDEBAR_WIDTH)};
    z-index: 1000;
  }
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #main {
    background-color: #fff;
    padding-left: ${pxToRem(STYLING_CONFIGS.SIDEBAR_WIDTH)};
  }
  .profile {
    text-align: center;
    padding: ${pxToRem(30)} ${pxToRem(10)};
  }
  .sidebar-inner-wrapper {
    padding: ${pxToRem(10)} ${pxToRem(16)};
  }
  .profile-image img {
    width: ${pxToRem(44)};
    height: ${pxToRem(44)};
    object-fit: cover;
    border-radius: 50%;
    background-color: #e7e9eb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: ${pxToRem(7)};
  }
  #sidebar-menu {
    background-color: ${COLORS.lightGrey};
    border: none;
  }
  .sidebar-item {
    display: flex;
    align-items: center;
    padding: ${pxToRem(10)} !important;
    color: ${COLORS.text};
    border-radius: ${pxToRem(5)};
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: normal;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(18)};
    &:hover {
      background-color: ${COLORS.darkGrey};
      color: ${COLORS.text};
    }
  }
  .ant-menu-sub.ant-menu-inline {
    background-color: #eee;
  }
  .sidebar-item .ant-menu-item-icon,
  .ant-menu-submenu-title svg {
    width: ${pxToRem(30)} !important;
    min-width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    min-height: ${pxToRem(30)}!important;
  }
  #sidebar-menu .sidebar-item.ant-menu-item-selected {
    background-color: ${COLORS.darkGrey};
  }
  .submenu-item {
    padding-left: ${pxToRem(10)} !important;
    display: flex;
    align-items: center;
  }
  .submenu-item .ant-menu-item-icon,
  .ant-menu-item .ant-menu-item-icon {
    width: ${pxToRem(24)} !important;
    min-width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    min-height: ${pxToRem(24)} !important;
  }
  .ant-menu-submenu-title {
    padding-left: ${pxToRem(10)} !important;
    padding-top: ${pxToRem(10)};
    padding-bottom: ${pxToRem(10)};
    font-family: "Roboto-medium";
    font-size: ${pxToRem(14)};
    display: flex;
    align-items: center;
  }
  #sidebar-menu .sidebar-item.ant-menu-item-selected::after {
    border-right: none;
  }
  .language-list {
    margin: auto ${pxToRem(12)} ${pxToRem(20)};
    max-width: ${pxToRem(160)};
    align-self: center;
    & > .ant-select-selector {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none;
    }
    .ant-select-arrow {
      top: 50%;
      display: inline-block;
    }
    .ant-select-selection-item {
      line-height: ${pxToRem(42)} !important;
    }
    .ant-select-item.ant-select-item-option {
      height: ${pxToRem(42)};
      line-height: ${pxToRem(42)};
      padding: 0 ${pxToRem(10)};
      border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
      &:hover {
        background-color: #f6f6f8;
      }
    }
    .flag {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
      margin-right: ${pxToRem(7)};
      object-fit: cover;
      border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
      vertical-align: middle;
    }
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none !important;
  }
  .language-items {
    padding: ${pxToRem(8)} ${pxToRem(12)};
    background: #ffffff;
    border: ${pxToRem(1)} solid #d6d8da;
    box-sizing: border-box;
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(51, 51, 51, 0.08);
    border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
    .ant-select-item-option-selected {
      background-color: ${COLORS.darkGrey};
    }
    .ant-select-item-option {
      height: ${pxToRem(42)};
      line-height: ${pxToRem(42)};
      margin: ${pxToRem(3)} 0;
      padding: 0 ${pxToRem(10)};
      border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
      &:hover {
        background: #f6f6f8;
        border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
      }
    }
    .flag {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
      margin-right: ${pxToRem(7)};
      object-fit: cover;
      border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
      vertical-align: middle;
    }
  }
  #languages {
    .ant-select-arrow {
      right: ${pxToRem(20)};
    }
  }
  /* ---- Collapsed screen ----- */
  .ant-layout-sider-collapsed + #main {
    background-color: #fff;
    padding-left: ${pxToRem(80)};
  }
  .ant-layout-sider-collapsed .profile h4 {
    display: none;
  }
  .ant-layout-sider-collapsed #sidebar-menu {
    width: 100%;
  }
  .ant-layout-sider-collapsed .profile {
    padding: ${pxToRem(30)} 0;
  }
  .ant-layout-sider-collapsed .language-list {
    margin: auto ${pxToRem(12)} ${pxToRem(20)};
  }
  .ant-layout-sider-collapsed .language-list .ant-select-arrow {
    display: none;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item {
    padding-right: 0 !important;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item span {
    display: none;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item .flag {
    margin: 0;
  }
  .ant-layout-sider-collapsed .ant-menu-submenu-title > span {
    display: none;
  }
`;
