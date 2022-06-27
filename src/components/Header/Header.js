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
import Profile from "../../assets/images/profile.jpg";
import { useSelector } from "react-redux";

const { Search } = Input;
function Header() {
  const onSearch = (value) => console.log(value);
  const restaurant = useSelector((state) => state.account.restaurant);
  return (
    <StyledHeader>
      <Search
        placeholder="Search here..."
        onSearch={onSearch}
        size="large"
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <div className="right-side">
        <div style={{ background: "none" }} className="vertical-devider"></div>
        <Link to="/restaurants/profile">
          <div className="user-profile">
            <h3>Hello, {restaurant?.name}</h3>
            <div className="user-img">
              <img src={Profile} alt="user-image" />
            </div>
          </div>
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
