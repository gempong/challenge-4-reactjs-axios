import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import defaultImage from "../assets/img/car.png";

const { Title } = Typography;

function Card(props) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <div className="car-card">
      <img src={props.image || defaultImage} alt={props.name || "Image"} />
      <Title level={4}>
        {props.name || "Name"}/{props.category || "Category"}
      </Title>
      <span className="price">{numberFormat(props.price)} / Hari</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="car-details">
        <span>
          <UserOutlined /> 4 orang
        </span>
        <span>
          <SettingOutlined /> Manual
        </span>
        <span>
          <CalendarOutlined /> Tahun 2020
        </span>
      </div>
      <Link to={`/detail/${props.id}`}>Pilih Mobil</Link>
    </div>
  );
}

export default Card;
