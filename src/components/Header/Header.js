import React from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { StyledHeader } from "./Header.style";
import {
  GiftIcon,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
} from "../../utils/Images";

const { Search } = Input;

function Header() {
  const onSearch = (value) => console.log(value);
  return (
    <StyledHeader>
      <Search
        placeholder="Search here..."
        onSearch={onSearch}
        size="large"
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <div className="right-side">
        <div className="notifications">
          <div style={{ backgroundColor: " rgba(45, 156, 219, 0.15)" }}>
            <NotificationIcon />
            <span style={{ backgroundColor: "#2D9CDB" }}>12</span>
          </div>
          <div style={{ backgroundColor: " rgba(45, 156, 219, 0.15)" }}>
            <MessageIcon />
            <span style={{ backgroundColor: "#2D9CDB" }}>12</span>
          </div>
          <div style={{ backgroundColor: "rgba(94, 108, 147, 0.15)" }}>
            <GiftIcon />
            <span style={{ backgroundColor: "#5E6C93" }}>12</span>
          </div>
          <div style={{ backgroundColor: "rgba(255, 91, 91, 0.15)" }}>
            <SettingsIcon />
            <span style={{ backgroundColor: "#FF5B5B" }}>12</span>
          </div>
        </div>
        <div className="vertical-devider"></div>
        <Link to="/restaurants/profile">
          <div className="user-profile">
            <h3>Hello, Samantha</h3>
            <div className="user-img">
              <img
                src="https://cdn.pixabay.com/photo/2022/05/22/12/08/baby-7213274__340.jpg"
                alt="user-image"
              />
            </div>
          </div>{" "}
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
