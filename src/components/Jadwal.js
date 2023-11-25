import { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, InputGroup, Button, ButtonGroup, ToggleButton, Table } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import moment from 'moment/moment';

export default function Jadwal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () =>{
     axios.get('https://1354-114-129-21-140.ngrok-free.app/api/Peminjaman',{
        headers:{
            'ngrok-skip-browser-warning': true
        }
     }).then(postData => {
  
     // reshaping the array
     const customHeadings = postData.data.map(item=>({
        "idPeminjaman": item.idPeminjaman,
        "idRuangan": item.idRuangan,
        "ticket": item.ticket,
        "namaRuangan": item.ruangan.namaRuangan,
        "namaPIC": item.namaPIC,
        "email": item.email,
        "noHp": item.noHp,
        "jumlahTamu": item.jumlahTamu,
        "startTime": item.startTime,
        "endTime": item.endTime,
        "keperluan": item.keperluan,
        "status": item.status,
     }))
     setData(customHeadings)
      // console.log(customHeadings);
     })
    }
    fetchData()
  }, []) 

// axios.get('https://e2b7-114-129-21-140.ngrok-free.app/api/Peminjaman',{
//     headers:{
//         'ngrok-skip-browser-warning': true
//     },
// }).then(res => console.log(res.data));


  
  const today = moment();
  const endOfWeek = today.endOf('week').format('yyyy-MM-DDT00:00');

//   const waw = data.map((yo) => yo.startTime);

//   const foDate = moment(data.startTime).format('DD-MM-yyyy, h:mm');

// //   console.log(waw);

  return (
    <>
    <div className='jadwal'>
    <Header/>
        <div className='container'>
        <Card id='cardjad' className='mt-3 pb-3'>
          <Card.Body>
            <h2 className='text-center' id='foreg'>Informasi Peminjaman</h2>
                
            <div className='row'>
            {data.map((item)=>{
              return (
                <div className='col-4' key={item.idPeminjaman}>
                    <Card className='mx-2 mt-5'>
                        <Card.Header>Peminjaman No. {item.ticket}</Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>
                                            Nama PIC:
                                        </td>
                                        <td>
                                            {item.namaPIC}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Ruangan:
                                        </td>
                                        <td>
                                            {item.namaRuangan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Status:
                                        </td>
                                        <td>
                                            {item.status}
                                        </td>
                                    </tr>
                                </thead>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
                )
            })}
            </div>

            </Card.Body>
        </Card>
        </div>

        <div>&nbsp;</div>
    </div>
    </>
  );
}
