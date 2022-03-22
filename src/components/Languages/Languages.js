import React, { useRef } from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import imageRu from "../../assets/images/sidebar/ru.svg";
import imageUz from "../../assets/images/sidebar/uz.svg";
import imageEn from "../../assets/images/sidebar/america.png";
import { t } from "../../utils";
import { changeLang } from "../../store/auth/reducer";

const Language = () => {
  const myAccount = useSelector((state) => state.account);
  const parentRef = useRef("");
  const dispatch = useDispatch();

  const handleLanguage = (lang) => {
    dispatch(changeLang(lang));
  };

  return (
    <Select
      value={myAccount?.lang || "uz"}
      className="language-list"
      size="large"
      dropdownClassName="language-items"
      dropdownStyle={{ minWidth: 150 }}
      ref={parentRef}
      dropdownAlign={{
        points: ["tl", "bl"],
        offset: [0, -200],
      }}
      onChange={handleLanguage}
    >
      <Select.Option value="uz">
        <img
          style={{ width: "40px", objectFit: "cover", marginRight: "5px" }}
          src={imageUz}
          className="flag"
          alt="UZB flag"
        />
        <span>{t("Uzbek")}</span>
      </Select.Option>
      <Select.Option value="en">
        <img
          style={{ width: "40px", objectFit: "cover", marginRight: "5px" }}
          src={imageEn}
          className="flag"
          alt="EN flag"
        />
        <span>{t("English")}</span>
      </Select.Option>
      <Select.Option value="ru">
        <img
          style={{ width: "40px", objectFit: "cover", marginRight: "5px" }}
          src={imageRu}
          className="flag"
          alt="RUS flag"
        />
        <span>{t("Russian")}</span>
      </Select.Option>
    </Select>
  );
};

export default Language;
