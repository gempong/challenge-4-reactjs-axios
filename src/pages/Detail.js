import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Col, Row, Typography, Skeleton } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import Container from "../components/Container";
import Search from "../components/Search";

function Detail() {
  const [state, setState] = useState({ car: null });
  const { id } = useParams();

  const { Title } = Typography;

  async function getAllCar() {
    await axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        const data = res.data;
        setState({ car: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  React.useEffect(() => {
    getAllCar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Fragment>
      <section className="banner-section banner-internal"></section>
      <section className="search-wrapper">
        <Container>
          <Search
            title={true}
            detail={true}
            width={"100%"}
          />
        </Container>
      </section>
      <section className="car-result-wrapper">
        <Container>
          <Row gutter={24}>
            <Col span={15}>
              <div className="car-detail-content">
                <Title level={4}>Tentang Paket</Title>
                <Title level={5}>Include</Title>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <Title level={5}>Exclude</Title>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <Title level={4}>Refund, Reschedule, Overtime</Title>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
              <Link
                className="btn-primary"
                style={{ marginTop: "24px", float: "right" }}
                to={"/"}
              >
                Lanjutkan Pembayaran
              </Link>
            </Col>
            <Col span={9}>
              {!state.car && <Skeleton active />}
              {!!state.car && (
                <div className="car-detail-card">
                  <img
                    src={state.car && state.car.image}
                    alt={state.car && state.car.name}
                  />
                  <Title level={4}>
                    {state.car && state.car.name}/
                    {state.car && state.car.category}
                  </Title>
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
                  <div className="price">
                    <span>Total</span>
                    <span>{state.car && numberFormat(state.car.price)}</span>
                  </div>
                  <Link
                    className="btn-primary"
                    style={{ textAlign: "center", display: "block" }}
                    to={"/"}
                  >
                    Lanjutkan Pembayaran
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Detail;
