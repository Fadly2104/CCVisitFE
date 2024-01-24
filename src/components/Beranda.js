import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Carousel, Row, Col, Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import UNTR from '../assets/untr.png';
import B2 from '../assets/b2.jpg'
import './Style.css';
import Chart from './Chart';
import CC1 from '../assets/cc1.jpg';
import CC2 from '../assets/cc2.jpg';
import CC3 from '../assets/cc3.jpg';
import CC4 from '../assets/cc4.jpg';
import CC5 from '../assets/cc5.jpg';
import CC6 from '../assets/cc6.jpg';
import Scroll from './Scroll';

//
export default function Beranda() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  function getNumberOfColumns() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768 && screenWidth < 1400) {
      return 3;
    } else if (screenWidth >= 576 && screenWidth < 768) {
      return 2;
    } else if (screenWidth >= 280 && screenWidth < 576) {
      return 1;
    } else {
      return 3; // Jumlah default kolom, bisa disesuaikan
    }
  }
  
  function getImagesForSlide(slideIndex, colIndex) {
    const images = [CC1, CC2, CC3, CC4, CC5, CC6];
    const itemsPerSlide = getNumberOfColumns();
  
    const startIndex = (slideIndex * itemsPerSlide) + colIndex;
    const endIndex = startIndex + 1;
  
    return images.slice(startIndex, endIndex);
  }

  function getNumberOfIndicators() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768 && screenWidth < 1200) {
      return 2;
    } else if (screenWidth >= 576 && screenWidth < 768) {
      return 3;
    } else if (screenWidth >= 280 && screenWidth < 576) {
      return 6;
    } else {
      return 2; // Jumlah default indikator, bisa disesuaikan
    }
  }    

  return (
    <>
    <Scroll />
    <div className="B1" style={{backgroundImage: `url(${UNTR})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: 700
                            }}>  
    <Header />

        <Container fluid>
          <Row id='rowlp'>
            <div className='Tx1 col-12 text-center'>
                <h1 className='TextBrn' id='judullp'>Selamat datang di UT Command Center </h1>
            </div>

            <Row className='button text-center' id='btnmar'>
                {/* Layout untuk semua ukuran layar (di bawah dan di atas 768px) */}
                <Col xs={{ span: 11, offset: 1 }} md={{ span: 3}} style={{ marginBottom: '15px', marginInlineStart: 'auto' }}>
                    <Link to="/registrasi">
                    <Button className="BtnBrn" id='btnlp-1' variant='dark' type="button">
                        <h3 className='plp'>REGISTRASI</h3>
                    </Button>
                    </Link>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} md={{ span: 3, offset: 0}} style={{ marginBottom: '15px' }}>
                    <Link to="/jadwal">
                    <Button className="BtnBrn" id='btnlp-2' variant='dark' type="button">
                        <h3 className='plp'>JADWAL</h3>
                    </Button>
                    </Link>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} md={{ span: 3, offset: 0}} style={{ marginInlineEnd: 'auto'}}>
                    <Link to="/timsurvey">
                    <Button className="BtnBrn" id='btnlp-3' variant='dark' type="button">
                        <h3 className='plp'>REVIEW</h3>
                    </Button>
                    </Link>
                </Col>
                </Row>
            </Row>
        </Container>
    </div>

    <div className='B2' id='bg2'>
      <Container fluid className='pt-5'>
        <Row>
          <Col xl={6} xs={12} className='colbg2'>
          </Col>

          <Col xl={6} xs={12}>
            <h1 style={{ fontWeight: 700 }}>UT COMMAND CENTER</h1>
            <p className='mt-4' style={{ fontSize: 20, fontWeight: 400 }}>
              UT Command Center merupakan fasilitas yang dikembangkan sebagai pusat kendali operasional untuk memastikan dan meningkatkan kepuasan pelanggan atas produk dan layanan UT. Fitur yang sudah dikembangkan dalam UT Command Center adalah Parts Order Tracking, Customer Equipment Monitoring dan Customer Handling Management.
            </p>

            <p className='mt-3' style={{ fontSize: 20, fontWeight: 400 }}>
              Sejalan dengan strategi 3D (Differentiation, Diversification and Digitalization), UT Command Center merupakan inisiatif strategis untuk memperkuat diferensiasi terhadap para kompetitor, di tengah kondisi persaingan yang dinamis dan perkembangan teknologi yang sangat pesat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <div className='B3'>
  <Container style={{marginTop: 50}}>
    <Row>

      <Col lg={6}>
        <Card id='Carhed'>
          <Card.Body>
            <h1 id='Unite'>Latar Belakang</h1>
          </Card.Body>
        </Card>

        <Card id='cardb3'>
          <Card.Body className='cardbo3'>
            <ul id='ulca'>
              <li>Peningkatan kepuasan pelanggan atas layanan UT product support</li>
              <li className='mt-5'>Mendorong tercapainya operation excellence pada operational UT</li>
              <li className='mt-5'>Memberikan added value kepada pelanggan dengan adanya UT Command Center</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={6}>
        <Card id='Carhed-2'>
          <Card.Body>
            <h1 id='Unite'>TUJUAN</h1>
          </Card.Body>
        </Card>

        <Card id='cardb3' className='cardb3v2'>
          <Card.Body className='cardbo3'>
            <ul id='ulca'>
              <li>Memberikan dukungan maksimal terhadap aktivitas operasional di cabang dan site dengan cara mengidentifikasi dan menyelesaikan masalah dengan cepat dan tepat</li>
              <li className='mt-5'>Memberikan rekomendasi perbaikan berkelanjutan atas proses bisnis yang ada</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col md={12}>
        <Card id='Carhedcen'>
          <Card.Body>
            <h1 id='Unite'>VISI & MISI</h1>
          </Card.Body>
        </Card>

        <Card id='cardb4'>
          <Card.Body>
            <h3 id='ctex' className='text-center'>
              United Tractors Command Center sebagai lokomotif dari operation UT untuk mencapai satu tujuan yaitu meningkatkan kepuasan pelanggan
            </h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col md={12}>
        <Card id='Carhedcen'>
            <Card.Body>
                <h1 id='Unite'>MILESTONE</h1>
            </Card.Body>
        </Card>

        <Card id='cardb4'>
                <div id='blockchart'>
                    <Chart />
                </div>
              <Card.Body>
                <Row>
                    <Col sm={2} id='chadesc1'>
                      <h5 className='trial'>2019</h5>
                        <h6 className='chadesft'>United Tractors Command Center dibuat</h6>
                    </Col>
                    <Col sm={2} id='chadesc2'>
                      <h5 className='trial'>2020</h5>
                        <h6 className='chadesft'>Menguatkan pondasi operasi dari Command Center</h6>
                    </Col>
                    <Col sm={2} id='chadesc3'>
                      <h5 className='trial'>2021</h5>
                        <h6 className='chadesft'>Memperkuat operasi Command Center untuk mencakup banyak klien dan memuaskannya</h6>
                    </Col>
                    <Col sm={2} id='chadesc4'>
                      <h5 className='trial'>2022</h5>
                        <h6 className='chadesft'>Fokus pada impact dan merancang mode kerja baru</h6>
                    </Col>
                    <Col sm={2} id='chadesc5'>
                      <h5 className='trial'>2023</h5>
                        <h6 className='chadesft'>Menaikan performa dan impact lewat LOCOMOTIVE</h6>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Card.Body>
        </Card>
      </Col>
    </Row>

      <Row id='galeri'>
      <Carousel
        id='carousel'
        data-bs-theme="dark"
        activeIndex={index}
        onSelect={handleSelect}
        indicators={window.innerWidth >= 768}
      >
        {[...Array(getNumberOfIndicators())].map((_, i) => (
          <Carousel.Item key={i}>
            <Row>
              {[...Array(getNumberOfColumns())].map((_, colIndex) => (
                <Col key={colIndex}>
                  {getImagesForSlide(i, colIndex).map((img, imgIndex) => (
                    <img key={imgIndex} id='caroimg' src={img} alt={`Slide ${i + 1}`} />
                  ))}
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>
    
  </Container>

    <div id='footer'>
        <Footer />
    </div>

    </div>
    </>
  );
}