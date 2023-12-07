import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import Header from './Header';
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillClockCircle } from 'react-icons/ai'
import Swal from "sweetalert2";
import axios from 'axios';
import moment from 'moment';

export default function Tamu() {

  const [data, setData] = useState([]);

  data.map((e, index) => {
    return{

    }
  });

  const [peminjaman, setPeminjaman] = useState([]);

  const [ruang, setRuang] = useState(1);

  const [keperluan, setKeperluan] = useState('Meeting');

  const [detailKeperluan, setDetailKeperluan] = useState('');

  const [fas, setFas] = useState();

  // const fa = () => {
  //   if (fas === 14) {
  //     return <span>20 - 24 Orang</span>;
  //   }
  //   if (fas === 15) {
  //     return <span>6 - 8 Orang</span>;
  //   }
  //   if (fas === 16) {
  //     return <span>14 - 15 Orang</span>;
  //   }
  //   if (fas === 17) {
  //     return <span>5 - 6 Orang</span>;
  //   } else {
  //     return <span><i>Silahkan memilih ruang terlebih dahulu</i></span>;
  //   }
  // };

  const location = useLocation();
  // console.log(location.state);

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
   axios.get('https://ddf0-112-215-170-214.ngrok-free.app/api/Ruangan', {
    headers:{
      'ngrok-skip-browser-warning': true
    }
   }).then(postData => {
    console.log(postData)
   // reshaping the array
   const customHeadings = postData.data.map(item=>({
     "idRuangan": item.idRuangan,
     "namaRuangan": item.namaRuangan,
     "kapasitas": item.kapasitas,
     "availability": item.availability,

   }))
   setData(customHeadings)
     
   })
  }
  fetchData()
}, [])  

  // axios.get('https:/1354-114-129-21-140.ngrok-free.app/api/Ruangan', {
  //     headers:{
  //       'ngrok-skip-browser-warning': true
  //     }
  //   }).then(res => console.log(res.data))
useEffect(() => {
  const fetchData = () =>{
   axios.get('https://ddf0-112-215-170-214.ngrok-free.app/api/Peminjaman', {
    headers:{
      'ngrok-skip-browser-warning': true
    }
   }).then(postPm => {

   // reshaping the array
   const pinjam = postPm.data.map(item=>({
    "idPeminjaman": item.idPeminjaman,
    "idRuangan": item.idRuangan,
    "namaPIC": item.namaPIC,
    "email": item.email,
    "noHp": item.noHp,
    "jumlahTamu": item.jumlahTamu,
    "status": item.status,
    "startTime": item.startTime,
    "endTime": item.endTime,
    "keperluan": item.keperluan,
    "detailKeperluan": item.detailKeperluan
   }))
   setPeminjaman(pinjam)
    // console.log(pinjam);
   })
  }
  fetchData()
}, [])

const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');
const [jumlahTamu, setJumlahTamu] = useState();
const status = 'On Request';

const today = moment();
const endOfDay = today.endOf('day').format('yyyy-MM-DDTh:mm');
// console.log(endOfDay);

const handleSubmit = e => {
  // Prevent the default submit and page reload
  e.preventDefault()
  try {
  axios.post('https://ddf0-112-215-170-214.ngrok-free.app/api/Peminjaman', {
    idRuangan: ruang,
    ticket: "",
    namaPIC: location.state.namaPIC,
    email: location.state.email,
    noHp: location.state.noHp,
    jumlahTamu: jumlahTamu,
    startTime: startTime,
    endTime: endTime,
    kepentingan: keperluan,
    detailKepentingan: detailKeperluan,
    status: status
  });
  } catch (error) {
    if (location.state == null) {
      Swal.fire({  
        title: 'Terjadi Kesalahan',
        text: 'Mohon untuk mengisi data PIC.',
        icon: "error",
        confirmButtonText: "OK",
      }).then(function() {
        window.location.href = '/registrasi';  
      }); 
    }
    // console.log({error});
  }
  
}

const min = 1;
const [max, setMax] = useState();
const [kapasitas, SetKapasitas] = useState();

window.addEventListener('click', function(event) {
  // Mendapatkan elemen yang diklik
  const clickedElement = event.target.value;
  console.log(clickedElement);

  data.forEach(o => {
    if (clickedElement == o.idRuangan) {
      SetKapasitas(parseInt(o.kapasitas))
      setMax(parseInt(o.kapasitas))
      setJumlahTamu(0)
    }
  });
})
const handleMinMax = (event) => {
  const value = parseInt(event.target.value, 10);

  // Pastikan nilai yang dimasukkan tidak melebihi kapasitas maksimal ruangan
  const nilaiTerbatas = Math.min(Math.max(value, 0), kapasitas);

  setJumlahTamu(nilaiTerbatas);
};

const   woo = data.map((dt) => dt.availability);
// console.log(woo[0]);
const [available, setAvailable] = useState(2);

// const handleChange = event => {
//   if (event.target.value == 14) {
//     setRuang(Number(event.target.value));
//     setMax(24)
//     setFas(1)
//     setAvailable(woo[0])
//   } if (event.target.value == 15) {
//     setRuang(Number(event.target.value));
//     setMax(8)
//     setFas(2)
//     setAvailable(woo[1])
//   } if (event.target.value == 16) {
//     setRuang(Number(event.target.value));
//     setMax(15)
//     setFas(3)
//     setAvailable(woo[2])
//   } if (event.target.value == 17) {
//     setRuang(Number(event.target.value));
//     setMax(6)
//     setFas(4)
//     setAvailable(woo[3])
//   }
//   console.log(Number(event.target.value));
// };

const handleKeperluan = event => {
  // console.log(event.target.value);
  setKeperluan(event.target.value);
};

const handleTime = event => {
  // console.log(moment(event.target.value).format('yyyy-MM-D'));
  setStartTime(event.target.value)

  const isFound = peminjaman.some(pm => {
    if (pm.idRuangan == ruang && moment(event.target.value).format('yyyy-MM-D') == moment(pm.startTime).format('yyyy-MM-D') && pm.status !== "Done" ) {
      return true;
    } else {
      return false;
    }
  })

  if (isFound) {
    console.log('✅');
    setAvailable(false)
  } else {
    console.log('⛔️');
    setAvailable(true)
  }
}

  return (
    <>
    <div className='ruang'>
    <Header/>
        <div className='container'>
        <Card id='cardregs' className='mb-3'>
          <Card.Body>
            <h2 className='text-center' id='foreg'>PILIH RUANG</h2>
                {console.log}
            <Form id='forms' action="" method="post" onSubmit={handleSubmit}>
                <Form.Group md="4" controlId="validationCustom01">
                    <div className='row'>
                        <div className='col-md-4'>
                            <Form.Label className='mt-2'>Ruangan</Form.Label>
                            <Form.Select id='formgroup' name="ruang" aria-label="Default select example" required>
                              <option value={0}>-- Pilih Ruangan --</option>
                              {data.map((d, index) => {
                                return(
                                  <option value={d.idRuangan} key={index}>{d.namaRuangan}</option>
                                )
                              })}
                              {/* <option value={1}>Ruang Collaboration</option>
                              <option value={2}>Ruang Synergy</option>
                              <option value={3}>Ruang Harmonize</option>
                              <option value={4}>Ruang Inspiring</option> */}
                            </Form.Select>
                        </div>
                        <div className='col-5'>
                            <div id='tanda'>
                                {(function() {
                                  if (available === true) {
                                    return <h3><AiFillCheckCircle style={{marginTop: 4}}/> TERSEDIA</h3>;
                                  } if (available === false) {
                                    return <h3><AiFillClockCircle style={{marginTop: 4}}/> BOOKED</h3>;
                                  }
                                })()}
                            </div>
                        </div>
                    </div>
                </Form.Group>
                
                <div className='row' id="kartu">
                  <div id='rows'>
                    <h6>Kapasitas:</h6>
                    <ul className='custom-spacing'>{kapasitas}</ul>
                    <Form.Label className='mt-2'>Jumlah Tamu</Form.Label>
                    <div>
                    <Form.Control
                      style={{width: 60, display: 'inline-block'}}
                      required
                      type="number"
                      placeholder=""
                      value={jumlahTamu}
                      id='formgroup'
                      name="jumlahTamu"
                      onChange={handleMinMax}
                    />
                    </div>
                  </div>
                  <div id='perlu'>
                    <Form.Label>Keperluan</Form.Label>
                    <Form.Select id='keperluan' onChange={handleKeperluan} name="ruang" aria-label="Default select example" required>
                      <option value={'Meeting'}>Meeting</option>
                      <option value={'Weekly Check In'}>Weekly Check In</option>
                    </Form.Select>
                    <Form.Label className='jarak-a'>Detail Keperluan</Form.Label>
                    <div>
                    <Form.Control
                      style={{width: 150, display: 'inline-block'}}
                      required
                      type="text"
                      placeholder="Rincian keperluan anda"
                      value={detailKeperluan}
                      id='formgroup'
                      name="detailKeperluan"
                      onChange={e => setDetailKeperluan(e.target.value)}
                    />
                    </div>
                  </div>
                </div>

                <Form.Group md="4" className='mt-4'>
                  <h6><b>Waktu Berkunjung</b></h6>
                  <div className='row' id='calendar'>
                    <div className='col-6'>
                      <Form.Label >Mulai</Form.Label>
                      {/* <Flatpickr
                        required
                        options={{ time_24hr: true, enableTime: true, dateFormat: "Y-M-d H:i", }}
                        id='formgroup'
                        name="startTime"
                        value={startTime}
                        onChange={e => setStartTime(e.target.value)}
                      /> */}
                      <Form.Control
                        required
                        type="datetime-local"
                        placeholder=""
                        id='formgroup'
                        name="startTime"
                        value={startTime}
                        min={endOfDay}
                        onChange={handleTime}
                        />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </div>
                    <div className='col-6'>
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
                      if (available === true) {
                        return <Button className="BtnBrn" variant='dark' style={{backgroundColor: '#FDCD04', borderRadius: 30}} type="submit" onClick={handleClick}>
                                  <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>SUBMIT</h3>
                              </Button>
                      } else {
                        return <Button className="BtnBrn" variant='dark' style={{backgroundColor: '#FDCD04', borderRadius: 30}} type="button" onClick={handleClick} disabled>
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
