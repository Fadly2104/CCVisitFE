import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Tamu from './Tamu';

export default function Beranda() {

  return (
    <>
    <div className="App">
      <h1>Welcome</h1>

        <div className='container'>
          <div className='row'>
            <Link to="/tamu">
                <Button className="ms-5" variant='primary' style={{width: "70%"}} type="button">
                    Tamu
                </Button>
            </Link>
          </div>
        </div>
    </div>
    </>
  );
}
