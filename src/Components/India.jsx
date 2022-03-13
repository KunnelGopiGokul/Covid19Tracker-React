import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import StateData from './StateData'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default class India extends Component {

        constructor(){
            super();
            this.state={
                data:{}
            }
        }

        componentDidMount(){

            axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
                this.setState({data:response.data});
            })

        }


  render() {
    return (
        
    <div className='row'>
      <div style={{marginTop:'65px'}} className='col-md-12'>
        
           <img src='https://www.worldometers.info/img/flags/in-flag.gif' style={{width:"50px",marginLeft:"15px"}}/> 
           <h3>INDIA</h3>
        </div>
        
       <div className='col-md-12'>
           <div  style={{marginTop:'30px'}} className='row'>
                <div className='col-md-3'>
                <Card className='badge bg-primary' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>TOTAL CASES</Card.Title> 
                        <h2>{this.state.data.cases}</h2>
                        
                          
                     </Card.Body>
                </Card>     
                </div>

                <div className='col-md-3'>
                <Card className='badge bg-warning text-dark' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>ACTIVE CASES</Card.Title> 
                        <h2>{this.state.data.active}</h2>
                       
                     </Card.Body>
                </Card>     
                </div>

                <div className='col-md-3'>
                <Card className='badge bg-success' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>RECOVERED</Card.Title> 
                        <h2>{this.state.data.recovered}</h2>
                        
                     </Card.Body>
                </Card>     
                </div>

                <div className='col-md-3'>
                <Card className='badge bg-danger' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> DEATHS</Card.Title> 
                        <h2>{this.state.data.deaths}</h2>
                       
                     </Card.Body>
                </Card>     
                </div>

                <div className='col-md-12'>
                    <StateData/>
                </div>
              
           </div>
              

       </div>

        

     </div>

    )
  }
}
