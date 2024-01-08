import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToggleButton, Form, Button } from 'react-bootstrap';
import axios from "axios";
import Header from './Header';
import './Style.css';

export default function TimSurvey() {

    const navigate = useNavigate();
    const [tim, setTim] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () =>{
         axios.get('https://dd8d-114-129-21-140.ngrok-free.app/api/Peminjaman', {
          headers:{
            'ngrok-skip-browser-warning': true
        }
     }).then(postData => {
        // console.log(postData);  
         // reshaping the array
         const customHeadings = postData.data.map(item=>({
            "idPeminjaman": item.idPeminjaman,
            "idRuangan": item.idRuangan,
            "ticket": item.ticket,
            "namaRuangan": item.namaRuangan,
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
    
      const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
        try {
            navigate('/survey',
            {
                state:{
                  idTim: tim,
                }
            })
        } catch (error) {
          console.log({error});
        }
        
      }

    const handleChange = event => {
        setTim(event.target.value)
        console.log(event.target.value);
    };

    const ww = data.map((d) => d.idPeminjaman)
    // console.log(ww);

  return (
    <>
    <div className='survey'>
        <Header/>

        <h1 className='text-center mt-3' style={{fontWeight: 700}}>Mohon pilih tim yang akan disurvey:</h1>

        <div className="text-center">
            <Form id='form' action="" method="post" onSubmit={handleSubmit}>
                <Form.Select id='formgroup' onChange={handleChange} style={{width: 400, marginInline: 'auto', marginTop: 50, marginBottom: 50}} name="tim" aria-label="Default select example" required>
                    <option value="">-- Silahkan Pilih Tim Anda --</option>
                    {data.map((dt, index) => (
                        <option key={index} value={dt.idPeminjaman}>Tiket No.{dt.ticket}, PIC: {dt.namaPIC}</option>
                    ))}
                </Form.Select>

                <Button className="BtnBrn" variant='dark' style={{width: "20%", backgroundColor: '#FDCD04', borderRadius: 30, marginInline: 'auto'}} type="submit">
                    <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>PILIH</h3>
                </Button>
            </Form>
        </div>
        
    </div>
    </>
  );
}
