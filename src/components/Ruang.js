import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import Header from './Header';
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillClockCircle } from 'react-icons/ai'
import Swal from "sweetalert2";
import axios from 'axios';
import moment from 'moment';

export default function Tamu() {

  const [data, setData] = useState([])

  const [swalProps, setSwalProps] = useState({});

  const [ruang, setRuang] = useState(1);
  
  const fasilitas = ["TV LED 64'", "AC", "Kursi (20)", "Speaker"];

  const arrayFasilitas = fasilitas.map((fas) => <li key={fas}>{fas}</li>);

  const location = useLocation();
  console.log(location.state);

  var available = 1;

  function handleClick(){
    Swal.fire({  
      title: 'Success',  
      type: 'success',  
      text: 'Your work has been saved.',
      icon: "success",
      confirmButtonText: "OK",
    }).then(function() {
      window.location.href = '/';  
    }); 
}

// console.log(ruang);
useEffect(() => {
  const fetchData = () =>{
   axios.get('https://localhost:7286/api/Ruangan').then(postData => {

   // reshaping the array
   const customHeadings = postData.data.map(item=>({
     "idRuangan": item.idRuangan,
     "namaRuangan": item.namaRuangan,
     "kapasitas": item.kapasitas,
     "availability": item.availability,
   }))
   setData(customHeadings)
    // console.log(customHeadings);
   })
  }
  fetchData()
}, [])  

const wee = data.map((png) => png );

// console.log(wee[ruang - 1]);

const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');

const today = moment();
const endOfWeek = today.endOf('week').format('yyyy-MM-DDT00:00');

const handleSubmit = e => {
  // Prevent the default submit and page reload
  e.preventDefault()
  try {
  axios.post('https://localhost:7286/api/Peminjaman', {
      idTamu: location.state.idTamu,
        tamu: {
          namaTamu: '',
          emailTamu: '',
          kepentingan: ''
        },
          idRuangan: ruang,
        ruangan: {
          namaRuangan: '',
          kapasitas: '',
          availability: true
        },
        startTime: location.state.startTime,
        endTime: location.state.endTime
  });
  } catch (error) {
    console.log({error});
  }
  
}

const handleChange = event => {
  // console.log(event.target.value);
  setRuang(event.target.value);
};

  return (
    <>
    <div className='registrasi'>
    <Header/>
        <div className='container'>
        <Card id='cardreg' className='mt-3 mb-3'>
          <Card.Body>
            <h2 className='text-center' id='foreg'>PILIH RUANG</h2>
                
            <Form id='form' action="" method="post" onSubmit={handleSubmit}>
                <Form.Group md="4" controlId="validationCustom01">
                    <div className='row'>
                        <div className='col-6'>
                            <Form.Label>Ruangan</Form.Label>
                            <Form.Select id='formgroup' onChange={handleChange} name="ruang" aria-label="Default select example">
                              <option value={1}>Ruang Collaboration</option>
                              <option value={2}>Ruang Express</option>
                            </Form.Select>
                        </div>
                        <div className='col-6'>
                            <div style={{marginTop: 30, marginInlineStart: 50}}>
                                {(function() {
                                  if (available === 1) {
                                    return <h3><AiFillCheckCircle /> TERSEDIA</h3>;
                                  } else {
                                    return <h3><AiFillClockCircle /> DIPESAN</h3>;
                                  }
                                })()}
                            </div>
                        </div>
                    </div>
                </Form.Group>
                
                <div className='mt-4'>
                    <h6>Fasilitas</h6>
                    <ul>{arrayFasilitas}</ul>
                </div>

                <Form.Group md="4" className='mt-4'>
                  <h6><b>Waktu Berkunjung</b></h6>
                  <div className='row'>
                    <div className='col-4'>
                      <Form.Label>Mulai</Form.Label>
                      {/* <Flatpickr
                        required
                        options={{ time_24hr: true, enableTime: true, dateFormat: "Y-M-d H:i", }}
                        id='formgroup'
                        name="startTime"
                        value={startTime}
                        onChange={setStartTime}
                      /> */}
                      <Form.Control
                        required
                        type="datetime-local"
                        placeholder=""
                        id='formgroup'
                        name="startTime"
                        value={startTime}
                        min={endOfWeek}
                        onChange={e => setStartTime(e.target.value)}
                        />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </div>
                    <div className='col-4'>
                    </div>
                    <div className='col-4'>
                      <Form.Label>Selesai</Form.Label>
                      {/* <Flatpickr
                        required
                        options={{ time_24hr: true, enableTime: true, }}
                        id='formgroup'
                        name="endTime"
                        value={endTime}
                        onChange={setEndTime}
                      /> */}
                      <Form.Control
                        required
                        type="datetime-local"
                        placeholder=""
                        id='formgroup'
                        name="endTime"
                        value={endTime}
                        min={startTime}
                        onChange={e => setEndTime(e.target.value)}
                        />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </div>
                  </div>
                </Form.Group>

                <div className='button text-center' style={{marginTop: 35}}>
                    {(function() {
                      if (available === 1) {
                        return <Button className="ms-5 BtnBrn" variant='dark' style={{width: "20%", backgroundColor: '#FDCD04', borderRadius: 30}} type="submit" onClick={handleClick}>
                                  <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>SUBMIT</h3>
                              </Button>
                      } else {
                        return <Button className="ms-5 BtnBrn" variant='dark' style={{width: "20%", backgroundColor: '#FDCD04', borderRadius: 30}} type="button" onClick={handleClick} disabled>
                                    <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>SUBMIT</h3>
                                </Button>
                      }
                    })()}
                      
                {/* <SweetAlert2 {...swalProps}>
                </SweetAlert2> */}
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
