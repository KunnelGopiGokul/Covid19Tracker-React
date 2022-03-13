import React, { Component } from 'react'
import axios from 'axios';
import { Table} from 'react-bootstrap'; 

export default class World extends Component {

    constructor(){
      super();
      this.state={
        data:[]
      }
    }
    componentDidMount(){
      axios.get('https://corona.lmao.ninja/v2/countries').then(response=>{
       
        this.setState({data:response.data});
      });
    }


  render() {
    return (

      <div className='row'style={{marginTop:'65px'}}>
      <div className='col-md-12'>
      <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td><h5>COUNTRY</h5></td>
                  <td><h5>TOTAL CASES</h5></td>
                  <td><h5>RECOVERED</h5></td>
                  <td><h5>DEATH</h5></td>
                </tr>
              </thead>

              <tbody>
                {
                        this.state.data.map((itm,ky)=>{
                          return(
                                <tr>
                                  <td>
                                  <img src={itm.countryInfo.flag} style={{width:'100px',height:'60px'}}/>
                                    <b><span className='ms-5'>{itm.country}</span></b>
                                    </td>
                                  <td><b>{itm.cases}</b></td>
                                  <td><b>{itm.recovered}</b></td>
                                  <td><b>{itm.deaths}</b></td>
                                </tr>
                          );
                        })
                }
              </tbody>

            </Table>

       </div> 
      </div>
    )
  }
}
