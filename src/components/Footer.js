import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Col, Row } from "antd";

import Logo from "../assets/img/logo.png";
import Container from "../components/Container";

function Footer() {
  return (
    <footer>
      <Container>
        <Row gutter={30}>
          <Col span={6}>
            <div className="address">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <a href="mailto:binarcarrental@gmail.com">
                binarcarrental@gmail.com
              </a>
              <a href="tel:081233334808">081-233-334-808</a>
            </div>
          </Col>
          <Col span={12}>
            <Row gutter={30}>
              <Col span={8}>
                <div className="footer-link">
                  <Link to={"/"}>Our Services</Link>
                  <Link to={"/"}>Why Us</Link>
                  <Link to={"/"}>Testimonial</Link>
                  <Link to={"/"}>FAQ</Link>
                </div>
              </Col>
              <Col span={16}>
                <div className="social">
                  <p>Connect with us</p>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 1.66663H12.5C11.395 1.66663 10.3352 2.10561 9.55376 2.88701C8.77236 3.66842 8.33337 4.72822 8.33337 5.83329V8.33329H5.83337V11.6666H8.33337V18.3333H11.6667V11.6666H14.1667L15 8.33329H11.6667V5.83329C11.6667 5.61228 11.7545 5.40032 11.9108 5.24404C12.0671 5.08776 12.279 4.99996 12.5 4.99996H15V1.66663Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1666 1.66663H5.83329C3.53211 1.66663 1.66663 3.53211 1.66663 5.83329V14.1666C1.66663 16.4678 3.53211 18.3333 5.83329 18.3333H14.1666C16.4678 18.3333 18.3333 16.4678 18.3333 14.1666V5.83329C18.3333 3.53211 16.4678 1.66663 14.1666 1.66663Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.3334 9.47501C13.4362 10.1685 13.3178 10.8769 12.9948 11.4992C12.6719 12.1215 12.161 12.6262 11.5347 12.9414C10.9085 13.2566 10.1987 13.3663 9.50653 13.2549C8.81431 13.1436 8.17484 12.8167 7.67907 12.321C7.1833 11.8252 6.85648 11.1857 6.7451 10.4935C6.63371 9.8013 6.74343 9.09159 7.05865 8.46532C7.37386 7.83905 7.87853 7.32812 8.50086 7.00521C9.12319 6.68229 9.8315 6.56383 10.525 6.66667C11.2325 6.77158 11.8874 7.10123 12.3931 7.60693C12.8988 8.11263 13.2285 8.76757 13.3334 9.47501Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M14.5834 5.41663H14.5917"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.1667 2.49996C18.3687 3.06285 17.4851 3.49338 16.55 3.77496C16.0482 3.19788 15.3812 2.78887 14.6392 2.60323C13.8973 2.41759 13.1163 2.46429 12.4018 2.737C11.6873 3.00972 11.0737 3.49529 10.6442 4.12805C10.2146 4.76082 9.98979 5.51024 10 6.27496V7.10829C8.53557 7.14626 7.08444 6.82147 5.77588 6.16283C4.46733 5.50419 3.34197 4.53215 2.50004 3.33329C2.50004 3.33329 -0.833292 10.8333 6.66671 14.1666C4.95048 15.3316 2.906 15.9157 0.833374 15.8333C8.33337 20 17.5 15.8333 17.5 6.24996C17.4993 6.01783 17.477 5.78629 17.4334 5.55829C18.2839 4.71953 18.8841 3.66055 19.1667 2.49996V2.49996Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:binarcarrental@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33329 3.33337H16.6666C17.5833 3.33337 18.3333 4.08337 18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00004C1.66663 4.08337 2.41663 3.33337 3.33329 3.33337Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M18.3333 5L9.99996 10.8333L1.66663 5"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitch.tv"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3333 9.16663V5.83329M17.5 1.66663H2.5V15H6.66667V18.3333L10 15H14.1667L17.5 11.6666V1.66663ZM9.16667 9.16663V5.83329V9.16663Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="copyright">
              <p>Copyright Binar 2022</p>
              <Link to={"/"}>
                <img className="navbar-brand" src={Logo} alt="Logo" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default withRouter(Footer);
