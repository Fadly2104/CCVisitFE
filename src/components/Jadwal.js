import { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, InputGroup, Button, ButtonGroup, ToggleButton, Table, Row, Col } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import moment from 'moment/moment';

const ItemsPerPage = {
  xs: 3, // Handphone: 3 data per halaman
  sm: 6, // Layar Pad: 6 data per halaman
  xl: 9, // Desktop: 9 data per halaman
};

export default function Jadwal() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://44cc-101-255-166-178.ngrok-free.app/api/Peminjaman', {
          headers: {
            'ngrok-skip-browser-warning': true,
          },
        })
        .then((postData) => {
          // reshaping the array
          const customHeadings = postData.data.map((item) => ({
            idPeminjaman: item.idPeminjaman,
            idRuangan: item.idRuangan,
            ticket: item.ticket,
            namaRuangan: item.ruangan.namaRuangan,
            namaPIC: item.namaPIC,
            email: item.email,
            noHp: item.noHp,
            jumlahTamu: item.jumlahTamu,
            startTime: item.startTime,
            endTime: item.endTime,
            keperluan: item.keperluan,
            status: item.status,
          }));
          setData(customHeadings);

          // Menghitung total halaman berdasarkan jumlah total item dan item per halaman
          setTotalPages(Math.ceil(customHeadings.length / ItemsPerPage[getCurrentBreakpoint()]));
        });
    };
    fetchData();
  }, [currentPage]);

  const getCurrentBreakpoint = () => {
    const width = window.innerWidth;

    if (width < 576) {
      return 'xs';
    } else if (width < 1200) {
      return 'sm';
    } else {
      return 'xl';
    }
  };

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowSize;
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / ItemsPerPage[getCurrentBreakpoint()]));
    setCurrentPage(1);
  }, [windowSize, data]);
  

  return (
    <>
      <div className='jadwal'>
        <Header />
        <div className='container'>
          <Card id='cardjad' className='mt-3 pb-3'>
            <Card.Body>
              <h2 className='text-center' id='foreg'>
                Informasi Peminjaman
              </h2>

              <Row>
                {data
                  .slice(
                    (currentPage - 1) * ItemsPerPage[getCurrentBreakpoint()],
                    currentPage * ItemsPerPage[getCurrentBreakpoint()]
                  )
                  .map((item) => (
                    <Col key={item.idPeminjaman} xl={4} xs={12} sm={6}>
                      <Card className='mx-0 mt-5'>
                        <Card.Header>Peminjaman No. {item.ticket}</Card.Header>
                        <Card.Body>
                          <Table>
                            <thead>
                              <tr>
                                <td className='jatem'>Nama PIC</td>
                                <td className='jatem'>: {item.namaPIC}</td>
                              </tr>
                              <tr>
                                <td className='jatem'>Ruangan</td>
                                <td className='jatem'>: {item.namaRuangan}</td>
                              </tr>
                              <tr>
                                <td className='jatem'>Status</td>
                                <td className='jatem'>: {item.status}</td>
                              </tr>
                              <tr>
                                <td className='jatem'>
                                  Waktu
                                </td>
                                <td className='jatem'>
                                  : {moment(item.startTime).format('h:mm')} ~ {moment(item.endTime).format('h:mm')}
                                </td>
                              </tr>
                            </thead>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
              {/* Menambahkan navigasi pagination */}
              <div className='pagination'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div>&nbsp;</div>
      </div>
    </>
  );
}