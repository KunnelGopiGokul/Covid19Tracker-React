import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion,Table } from 'react-bootstrap';

export default class StateData extends Component {

        constructor(){
            super();
            this.state={
                stateData : {}
            }
        }

        componentDidMount()
        {
            axios.get('https://data.covid19india.org/state_district_wise.json').then(response=>{
             
                this.setState({stateData: response.data});
            });
        }

  render() {

    let keys = Object.keys(this.state.stateData);

    return (

          <div  style={{marginTop:'50px'}} className='row'>
              <div className='col-md-12'>
             <Accordion >
                  { 

                  
                     keys.map((itm,ky)=>{

                        let districts = this.state.stateData[itm].districtData;
                        let district_keys= Object.keys(districts);

                        let total_active=0;
                        let total_confirmed=0;
                        let total_deaths=0;
                        let total_recover=0;

                        let district_list=[];
                        for(let x in districts){
                            
                            total_active+= districts[x].active;
                            total_confirmed+=districts[x].confirmed;
                            total_deaths+=districts[x].deceased;
                            total_recover+=districts[x].recovered;
                            
                            let ob =districts[x];
                             ob["district_name"] = x;
                             district_list.push(ob);


                            }

                      {/*  console.log(district_list);*/}

                         return(
                             <div>
                                    <Accordion.Item eventKey={ky}>
                                        <Accordion.Header >
                                         <h5><b>{itm}</b></h5> <span className='btn btn-primary  p-1 ms-5'>TOTAL CASES -{total_confirmed}</span> <span className='btn btn-warning  p-1 ms-4'>ACTIVE -{total_active}</span> <span className='btn btn-success  p-1 ms-4'>RECOVERED -{total_recover}</span> <span className='btn btn-danger p-1 ms-4'>DEATHS -{total_deaths}</span>
                                        </Accordion.Header>
                                        <Accordion.Body eventKey={ky}>

                                        <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        <td><h5>DISTRICT</h5></td>
                                                        <td><h5>CONFIRMED</h5></td>
                                                        <td><h5>ACTIVE</h5></td>
                                                        <td><h5>RECOVERED</h5></td>
                                                        <td><h5>DEATHS</h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {       district_list.map((itm,ky)=>{
                                                    return(
                                                     <tr>
                                                        <td><b>{itm.district_name}</b></td>
                                                        <td><b>{itm.confirmed}</b></td>
                                                        <td><b>{itm.active}</b></td>
                                                        <td><b>{itm.recovered}</b></td>
                                                        <td><b>{itm.deceased}</b></td>
                                                    </tr>
                                                      );
                                                     })
                                               
                                                   
                                                }
                                                </tbody>
                                            </Table>
                                    
                                        </Accordion.Body>
                                    </Accordion.Item>
                             </div>
                         )
                     })
                   
                }
               
                 </Accordion> 
              </div>
          
          </div>
    )
  }
}
