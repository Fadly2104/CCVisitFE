import { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, InputGroup, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import moment from 'moment/moment';

export default function Registrasi() {
  const kep = [
    {
      label: "Meeting",
      value: "Meeting",
    },
    {
      label: "Weekly Check In",
      value: "Weekly Check In",
    }
  ];

  const Navigate = useNavigate();
  const [namaPIC, setNamaPIC] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');

  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    try {
      Navigate("/ruang", {
        state:{
          namaPIC: namaPIC,
          email: email,
          noHp: noHp,
        }
      });
      // window.location = "/beranda"  
      

    } catch (error) {
      console.log({error});
    }
    
  }
  
  const today = moment();
  const endOfWeek = today.endOf('week').format('yyyy-MM-DDT00:00');

  // console.log(endOfWeek);

  return (
    <>
    <div className='registrasi'>
    <Header/>
        <div className='container'>
        <Card id='cardreg' className='mt-3 pb-3'>
          <Card.Body>
            <h2 className='text-center' id='foreg'>REGISTRASI</h2>
                
            <Form id='form' action='' method='post' onSubmit={handleSubmit}>
                <Form.Group md="4">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nama Lengkap"
                    id='formgroup'
                    name="namaPIC"
                    value={namaPIC}
                    onChange={e => setNamaPIC(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group md="4" className='mt-4'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email"
                    id='formgroup'
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group md="4" className='mt-4'>
                  <Form.Label>No. Telepon</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="No. Telepon"
                    id='formgroup'
                    name="noHp"
                    value={noHp}
                    onChange={e => setNoHp(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <div className='button text-center' style={{marginTop: 49}}>
                  {/* <Link to="/ruang"> */}
                      <Button className="ms-5 BtnBrn" variant='dark' style={{width: "20%", backgroundColor: '#FDCD04', borderRadius: 30}} type="submit">
                          <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>LANJUTKAN</h3>
                      </Button>
                  {/* </Link> */}
                </div>

            </Form>

            </Card.Body>
        </Card>
        </div>

        <div>&nbsp;</div>
    </div>
    </>
  );
}
