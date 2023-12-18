import { Container, Row, Col, Navbar, Button, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import './Style.css';
import { Link } from "react-router-dom";
import Fut from '../assets/ftr.png'
import { IconContext } from "react-icons";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareYoutube } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';

export default function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 4, offset:0 }}>
                        <img src={Fut} id="footimg"></img>
                        <div className="row">
                            <h5 id="fontkuning">PT United Tractors Tbk</h5>
                        </div>
                        <div className="row">
                            <h6 id='fots'>Jl. Raya Bekasi Km 22,</h6>
                            <h6 id='fots'>Cakung, Jakarta Timur </h6>
                            <h6 id='fots'>Indonesia, 13910</h6>
                            <h6 id='fots'>Phone +62 21 2457 9999</h6>
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 3 }} sm={{ span: 12, order: 3 }} md={{ span: 4, offset: 0, order:2}}>
                            <h6 className="text-center" id='hak'>© 2023 United Tractors all right reserved.</h6>
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 4, order: 3}}>
                    <Row>
                      <Col xs={{ span: 3 }} sm={{ span: 1}} md={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 4 }} id="iconf" className="ico">
                        <Link to="https://www.youtube.com/@unitedtractors">
                          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                            <div>
                              <FaSquareYoutube />
                            </div>
                          </IconContext.Provider>
                        </Link>
                      </Col>
                      <Col xs={{ span: 3 }} sm={{ span: 1}} md={{ span: 1, offset: 2 }} lg={{ span: 1, offset: 1 }} id="iconf">
                        <Link to="https://web.facebook.com/ptunitedtractorstbk">
                          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                            <div>
                              <FaFacebookSquare />
                            </div>
                          </IconContext.Provider>
                        </Link>
                      </Col>
                      <Col xs={{ span: 3 }} sm={{ span: 1}} md={{ span: 1, offset: 2 }} lg={{ span: 1, offset: 1 }} id="iconf">
                        <Link to="https://www.instagram.com/unitedtractorsofficial/">
                          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                            <div>
                              <FaInstagramSquare />
                            </div>
                          </IconContext.Provider>
                        </Link>
                      </Col>
                      <Col xs={{ span: 3 }} sm={{ span: 2}} md={{ span: 1, offset: 2 }} lg={{ span: 1, offset: 1 }} id="iconf">
                        <Link to="https://www.linkedin.com/company/unitedtractors/">
                          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                            <div>
                              <RxLinkedinLogo />
                            </div>
                          </IconContext.Provider>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </Container>
        </>
    )   
}