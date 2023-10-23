import { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, Form, InputGroup, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import moment from 'moment/moment';

export default function Team() {

  const Navigate = useNavigate();
  const [namaRekan, setNamaRekan] = useState();
  const [namaRekanTim, setNamaRekanTim] = useState(['']);

  const location = useLocation();
  
  const handleRekan = e => {
    e.preventDefault()
    try {
      axios.post(`https://localhost:7286/api/Tamu`, {
        namaTamu: namaRekan,
        emailTamu: "",
        noTelepon: ""
    }).then((res) => {
        setNamaRekanTim(e.target.value)
        Navigate("", {
            state:{
                idTamu: res.data.idTamu,
                namaTamu : res.data.namaTamu,
            }
          });
          console.log(res);
    });
    } catch (error) {
        console.log({error});
    }
  }

  
  function handleArray(e) {
    setNamaRekanTim(e.target.value)
  }
  
  console.log(namaRekanTim);
//   const handleSubmit = e => {
//     // Prevent the default submit and page reload
//     e.preventDefault()
//     try {
//       axios.post(`https://localhost:7286/api/Team/${location.state.idTamu}`, {
//         nama: "string",
//         idTamu: {
//           namaTamu: "string",
//           emailTamu: "string",
//           noTelepon: "string"
//         }
//     }).then((res) => {
//     Navigate("/ruang", {
//         state:{
//           idTamu: res.data.idTamu
//         }
//       })});
//       // window.location = "/beranda"  
      

//     } catch (error) {
//       console.log({error});
//     }
    
//   }

  return (
    <>
    <div className='registrasi'>
    <Header/>
        <div className='container'>
        <Card id='cardreg' className='mt-3 pb-3'>
          <Card.Body>
            <h2 className='text-center mb-5' id='foreg'>PILIH ROMBONGAN ANDA</h2>
                
            <Form id='form' action='' method='post' onSubmit={handleRekan}>
                <Form.Group md="4">
                {/* <Form.Label>Nama</Form.Label> */}
                <InputGroup className="mb-3">
                  <Form.Control
                    required
                    className='mt-4'
                    type="text"
                    placeholder="Nama Lengkap"
                    id='formgroup'
                    name="namaRekan"
                    value={namaRekan}
                    onChange={e => [setNamaRekan(e.target.value)]}
                  />
                  <Button variant="dark" className='mt-4' type="submit" style={{width: "10%", backgroundColor: '#FDCD04'}}>
                    <span style={{color: 'black'}}>TAMBAH</span>
                  </Button>
                </InputGroup>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form>

            <Card style={{width: 570, marginInline: 'auto', backgroundColor: '#D9D9D9'}}>
              <Card.Body>
                <ul>
                  <li>Akhenaten</li>
                  <li>Imhotep</li>
                  <li>Tutankhamun</li>
                  <li>{namaRekanTim}</li>
                </ul>
              </Card.Body>
            </Card>
              
                <div className='button text-center' style={{marginTop: 49}}>
                  {/* <Link to="/ruang"> */}
                      <Button className="ms-5 BtnBrn" variant='dark' style={{width: "20%", backgroundColor: '#FDCD04', borderRadius: 30}}>
                          <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>LANJUTKAN</h3>
                      </Button>
                  {/* </Link> */}
                </div>


            </Card.Body>
        </Card>
        </div>

        <div>&nbsp;</div>
    </div>
    </>
  );
}
