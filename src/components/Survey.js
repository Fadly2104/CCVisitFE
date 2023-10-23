import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ToggleButton, Form, Button } from 'react-bootstrap';
import Header from './Header';
import './Style.css';
import StarRating from "./StarRating";
import Rate from "./Rate";
import Swal from "sweetalert2";
import axios from "axios";
import { IoMdStar } from "react-icons/io";

export default function Survey() {

    const [selected, setSelected] = useState(0);
    const [rating, setRating] = useState(0);
    const [desain, setDesain] = useState(0);
    const [navigasi, setNavigasi] = useState(0);
    const [kegunaan, setKegunaan] = useState(0);
    const [kemudahan, setKemudahan] = useState(0);
    const [kenyamanan, setKenyamanan] = useState(0);
    const [fasilitas, setFasilitas] = useState(0);
    const [saran, setSaran] = useState('-');
    const [hover, setHover] = useState(null);

    async function handleClick(type, tag) {
      switch (type) {
        case 'desain':
          setDesain(tag);
          break;
        case 'navigasi':
          setNavigasi(tag);
          break;
        case 'kegunaan':
          setKegunaan(tag);
          break;
        case 'kemudahan':
          setKemudahan(tag);
          break;
        case 'kenyamanan':
          setKenyamanan(tag);
          break;
        case 'fasilitas':
          setFasilitas(tag);
          break;
      }
      // console.log({type, tag});
    }

    const handleChange = event => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };

    function onAlert() {
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

    const handleSubmit = e => {
      // Prevent the default submit and page reload
      e.preventDefault()
      try {
        axios.post('https://localhost:7225/api/Review', {
          "idPinjam": 1031,
          "peminjaman": {
            "idTamu": 0,
            "tamu": {
              "namaTamu": "",
              "emailTamu": "",
              "kepentingan": ""
            },
            "idRuangan": 0,
            "ruangan": {
              "namaRuangan": "",
              "kapasitas": "",
              "availability": true
            },
            "startTime": "2023-10-16T15:55:21.752Z",
            "endTime": "2023-10-16T15:55:21.752Z"
          },
          "desain": desain,
          "navigasi": navigasi,
          "kegunaan": kegunaan,
          "kemudahan": kemudahan,
          "kenyamanan": kenyamanan,
          "fasilitas": fasilitas,
          "rating": rating,
          "saran": saran
      }).then(res => console.log(res));
  
      } catch (error) {
        console.log({error});
      }
      
    }

  return (
    <>
    <div className='survey'>
        <Header/>
        
        <Form action="" method="post" onSubmit={handleSubmit}>
        <h1 className='text-center mt-3' style={{fontWeight: 700}}>Kami menghargai ulasan anda!</h1>
        <h4 className='mt-5 ms-5'>Berikan ulasan anda tentang website kami berdasarkan aspek berikut</h4>
        <div className='ms-5 me-5'>
            <table className='table'>
                <thead style={{borderColor: '#FDCD04'}}>
                    <tr>
                        <th colSpan={3}></th>
                        <th colSpan={3}>Sangat buruk</th>
                        <th colSpan={2}></th>
                        <th>Luar biasa!</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>Desain</td>
                        <td><input style={{display: "none"}} type="radio" value={1} name="desain" /> 
                            <Button id={`${desain === 1 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('desain', 1)}>
                              1
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={2} name="desain" /> 
                            <Button id={`${desain === 2 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('desain', 2)}>
                              2
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={3} name="desain" /> 
                            <Button id={`${desain === 3 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('desain', 3)}>
                              3
                            </Button></td>
                        <td colSpan={2}><input style={{display: "none"}} type="radio" value={4} name="desain" /> 
                            <Button id={`${desain === 4 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('desain', 4)}>
                              4
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={5} name="desain" /> 
                            <Button id={`${desain === 5 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('desain', 5)}>
                              5
                            </Button></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Navigasi</td>
                        <td><input style={{display: "none"}} type="radio" value={1} name="navigasi" /> 
                            <Button id={`${navigasi === 1 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('navigasi', 1)}>
                              1
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={2} name="navigasi" /> 
                            <Button id={`${navigasi === 2 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('navigasi', 2)}>
                              2
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={3} name="navigasi" /> 
                            <Button id={`${navigasi === 3 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('navigasi', 3)}>
                              3
                            </Button></td>
                        <td colSpan={2}><input style={{display: "none"}} type="radio" value={4} name="navigasi" /> 
                            <Button id={`${navigasi === 4 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('navigasi', 4)}>
                              4
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={5} name="navigasi" /> 
                            <Button id={`${navigasi === 5 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('navigasi', 5)}>
                              5
                            </Button></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Kegunaan</td>
                        <td><input style={{display: "none"}} type="radio" value={1} name="kegunaan" /> 
                            <Button id={`${kegunaan === 1 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kegunaan', 1)}>
                              1
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={2} name="kegunaan" /> 
                            <Button id={`${kegunaan === 2 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kegunaan', 2)}>
                              2
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={3} name="kegunaan" /> 
                            <Button id={`${kegunaan === 3 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kegunaan', 3)}>
                              3
                            </Button></td>
                        <td colSpan={2}><input style={{display: "none"}} type="radio" value={4} name="kegunaan" /> 
                            <Button id={`${kegunaan === 4 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kegunaan', 4)}>
                              4
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={5} name="kegunaan" /> 
                            <Button id={`${kegunaan === 5 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kegunaan', 5)}>
                              5
                            </Button></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Kemudahan</td>
                        <td><input style={{display: "none"}} type="radio" value={1} name="kemudahan" /> 
                            <Button id={`${kemudahan === 1 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kemudahan', 1)}>
                              1
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={2} name="kemudahan" /> 
                            <Button id={`${kemudahan === 2 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kemudahan', 2)}>
                              2
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={3} name="kemudahan" /> 
                            <Button id={`${kemudahan === 3 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kemudahan', 3)}>
                              3
                            </Button></td>
                        <td colSpan={2}><input style={{display: "none"}} type="radio" value={4} name="kemudahan" /> 
                            <Button id={`${kemudahan === 4 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kemudahan', 4)}>
                              4
                            </Button></td>
                        <td><input style={{display: "none"}} type="radio" value={5} name="kemudahan" /> 
                            <Button id={`${kemudahan === 5 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kemudahan', 5)}>
                              5
                            </Button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4 className='mt-5 ms-5'>Berikan ulasan anda mengenai ruangan berdasarkan aspek berikut</h4>
        <div className='ms-5 me-5'>
            <table className='table'>
                <thead style={{borderColor: '#FDCD04'}}>
                    <tr>
                        <th colSpan={3}></th>
                        <th colSpan={3}>Sangat buruk</th>
                        <th colSpan={2}></th>
                        <th>Luar biasa!</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>Kenyamanan</td>
                        <td><input style={{display: "none"}} type="radio" value={1} name="kenyamanan" /> 
                            <Button id={`${kenyamanan === 1 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kenyamanan', 1)}>
                              1
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={2} name="kenyamanan" /> 
                            <Button id={`${kenyamanan === 2 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kenyamanan', 2)}>
                              2
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={3} name="kenyamanan" /> 
                            <Button id={`${kenyamanan === 3 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kenyamanan', 3)}>
                              3
                            </Button>
                        </td>
                        <td colSpan={2}><input style={{display: "none"}} type="radio" value={4} name="kenyamanan" /> 
                            <Button id={`${kenyamanan === 4 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kenyamanan', 4)}>
                              4
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={5} name="kenyamanan" /> 
                            <Button id={`${kenyamanan === 5 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('kenyamanan', 5)}>
                              5
                            </Button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Fasilitas</td>
                        <td><input style={{display: "none"}} type="radio" value={1} name="fasilitas" /> 
                            <Button id={`${fasilitas === 1 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('fasilitas', 1)}>
                              1
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={2} name="fasilitas" /> 
                            <Button id={`${fasilitas === 2 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('fasilitas', 2)}>
                              2
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={3} name="fasilitas" /> 
                            <Button id={`${fasilitas === 3 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('fasilitas', 3)}>
                              3
                            </Button>
                        </td>
                        <td colSpan={2}><input style={{display: "none"}} type="radio" value={4} name="fasilitas" /> 
                            <Button id={`${fasilitas === 4 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('fasilitas', 4)}>
                              4
                            </Button>
                        </td>
                        <td><input style={{display: "none"}} type="radio" value={5} name="fasilitas" /> 
                            <Button id={`${fasilitas === 5 ? 'bg-yellow' : 'btnRate'}`} type="button" onClick={() => handleClick('fasilitas', 5)}>
                              5
                            </Button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <h4 className='mt-5 ms-5'>Seberapa banyak nilai yang akan anda berikan secara keseluruhan?</h4>
        <div className='ms-5 me-5 mt-5 text-center'>
        {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              key={i}
              style={{display: "none"}}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <IoMdStar
              key={star}
              className="star mx-5"
              size={100}
              color={ratingValue <= (hover || rating) ? "#FDCD04" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Rating is: {rating}</p>
        </div>
        
        <h4 className='mt-5 ms-5'>Berikan kami masukkan agar website ini berkembang lebih baik lagi!</h4>
        <div className='ms-5 me-5 mt-5 text-center'>
            <Form.Control
              style={{paddingBottom: 86}}
              type="text"
              placeholder="Kritik dan saran anda sangat membantu"
              id='formgroup'
              onChange={e => setSaran(e.target.value)}
            />
        </div>

        <div className='button text-center mb-5' style={{marginTop: 35}}>
          {/* <Link to="/"> */}
              <Button className="ms-5 BtnBrn" variant='dark' style={{width: "20%", backgroundColor: '#FDCD04', borderRadius: 30}} type="submit">
                  <h3 style={{color: 'black', fontWeight: 700, fontFamily: 'inherit'}}>SUBMIT</h3>
              </Button>
          {/* </Link> */}
        </div>
        </Form>
    </div>
    </>
  );
}
