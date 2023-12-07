import { Container, Navbar, Button, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
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
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={Fut} id="footimg"></img>
                        <div className="row">
                            <h5 id="fontkuning">PT United Tractors Tbk</h5>
                        </div>
                        <div className="row">
                            <h6 style={{fontFamily: "fantasy", color: `#ffffff`}}>Jl. Raya Bekasi Km 22,</h6>
                            <h6 style={{fontFamily: "fantasy", color: `#ffffff`}}>Cakung, Jakarta Timur </h6>
                            <h6 style={{fontFamily: "fantasy", color: `#ffffff`}}>Indonesia, 13910</h6>
                            <h6 style={{fontFamily: "fantasy", color: `#ffffff`}}>Phone +62 21 2457 9999</h6>
                        </div>
                    </div>
                    <div className="col-4">
                            <h6 className="text-center" style={{fontFamily: "fantasy", color: `#ffffff`, marginTop: 300}}>© 2023 United Tractors all right reserved.</h6>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-2"></div>
                            <div className="col-2" style={{marginTop: 270}}>
                              <Link to="https://www.youtube.com/@unitedtractors">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                                  <div>
                                    <FaSquareYoutube />
                                  </div>
                                </IconContext.Provider>
                              </Link>
                            </div>
                            <div className="col-2" style={{marginTop: 270}}>
                              <Link to="https://web.facebook.com/ptunitedtractorstbk">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                                  <div>
                                    <FaFacebookSquare />
                                  </div>
                                </IconContext.Provider>
                              </Link>
                            </div>
                            <div className="col-2" style={{marginTop: 270}}>
                              <Link to="https://www.instagram.com/unitedtractorsofficial/">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                                  <div>
                                    <FaInstagramSquare />
                                  </div>
                                </IconContext.Provider>
                              </Link>
                            </div>
                            <div className="col-2" style={{marginTop: 270}}>
                              <Link to="https://www.linkedin.com/company/unitedtractors/">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "50px" }}>
                                  <div>
                                    <RxLinkedinLogo />
                                  </div>
                                </IconContext.Provider>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}