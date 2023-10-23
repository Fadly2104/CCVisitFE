import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from './Header';

class Tamu extends Component {

  constructor(props){
    super(props);
    this.state={
      tamu:[]
    }
  }

API_URL="https://localhost:7225/";

componentDidMount(){
  this.refreshTamu();
}

async refreshTamu(){
  fetch(this.API_URL+"api/Tamu/").then(response=>response.json())
  .then(data=>{
    this.setState({tamu:data});
  })
}
render() {
  const{tamu}=this.state;
  var ruang = "";
  console.log(tamu);
  if (tamu.idRuangan = 1) {
    ruang = "Ruang Collaboration";
  } else {
    ruang = "Ruang Bawah";
  }
  return (
    <>
    <Header/>
    <div className="Tamu">
      <h1>Tamu</h1>

        <div className='container'>
          <div className='row'>
            <table className='table table-stripped table-bordered'>
              <thead>
                <tr>
                  <th scope='row'>No.</th>
                  <th>Nama Tamu</th>
                  <th>Email Tamu</th>
                  <th>Kepentingan</th>
                  <th>Ruang</th>
                </tr>
              </thead>
              <tbody>
              {tamu.map(tm=>
                <tr key={tm.idTamu}>
                  <td key={tm}>{tm.idTamu}</td>
                  <td key={tm}>{tm.namaTamu}</td>
                  <td key={tm}>{tm.emailTamu}</td>
                  <td key={tm}>{tm.kepentingan}</td>
                  <td key={tm}>{ruang}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </>
  );
}
}

export default Tamu;
