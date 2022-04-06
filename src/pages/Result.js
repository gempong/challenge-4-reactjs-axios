import React, { Fragment, useState } from "react";
import axios from "axios";

import { Col, Row, Skeleton } from "antd";

import Container from "../components/Container";
import Search from "../components/Search";
import Card from "../components/Card";

function Loading(){
  return (
  <Col span={8}>
    <Skeleton active style={{marginBottom: '50px'}}>
    </Skeleton>
  </Col>
  )
}

function Result() {
  const [state, setState] = useState({ car: null });

  async function getAllCar() {
    await axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car`)
      .then((res) => {
        const data = res.data;
        setState({ car: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getAllCar();
  }, []);

  const dummyCar = [];

  for (let i = 1; i <= 9; i++) {
    dummyCar.push(Loading());
  }

  return (
    <Fragment>
      <section className="banner-section banner-internal"></section>
      <section className="search-wrapper">
        <Container>
          <Search
            title={true}
            edit={true}
            width={"100%"}
          />
        </Container>
      </section>
      <section className="car-result-wrapper">
        <Container>
          <Row gutter={24}>
            {!state.car && dummyCar}
            {!!state.car &&
              state.car.map((item, index) => (
                <Col span={8} key={index}>
                  <Card
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    id={item.id}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Result;
