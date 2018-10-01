import React, { Component } from 'react'
import {viewAllTable,checkLicense} from '../func/query.func.js'
import {sendData} from '../func/mutate.func'
//0308116123136
class NewRequest extends Component{
    constructor(props){
        super(props)
        this.state={
            TableDes: [],
        RequestID : undefined,
        CompanyNameTH : undefined,
        ShippingDate: undefined,
        SurveyCompany : undefined,
        RequestBy : undefined,
        CompanyNameEN : undefined,
        RequireDate : undefined,
        SurveyLocateName:undefined,
        // RiceType : undefined,
        // Quantity : undefined,
        // BagType : undefined,
        // GrossWeight : undefined,
        // NetWeight :undefined,
        // Logo : undefined,
        // VehicleName : undefined,
        // DestinationCity :undefined
        }
    }
        
      HandlelicenseNumber= (value) => {
            
            let dataValue = value.target.value
            if (Number.isInteger(parseInt(dataValue)) && dataValue.length == 13){
            dataValue = dataValue.toString()
            checkLicense(dataValue).then(data => {
                //  console.log(data)
                this.setState({TableDes :data})
                // console.log(this.state)
            }
            )}
           
        }
        HandleDelete = (id) =>{
            // console.log(id)
            let a = this.state.TableDes.filter(data => {
                
              return data.ID !== id
            });
            this.setState({
              TableDes : a
            })
            // console.log(this.state)
          }
          HandleChange = (e) =>{
            this.setState({
                [e.target.id]: e.target.value
            })
            console.log(this.state)
        }
        HandleChangeInDes = (e) =>{
            let a = this.state.TableDes
            let b = a.filter(data =>{
                return data.ID == e.target.name
            })
            let c = a.filter(data =>{
                return data.ID != e.target.name
            })
            let f = {}
            Object.keys(b).map((data)=>{
                 //console.log(b[data])
                Object.keys(b[data]).map((d)=>{
                    //  console.log(d)
                    // console.log(b[data][d])
                    
                   
                    f = Object.assign({[d]:b[data][d],[e.target.id]:e.target.value},f)
                    
                })
            })
            c.push(f)
            this.setState({
                TableDes: c
             } )
             console.log(this.state)
            // console.log(a)
        }
        HandleSubmit = (e) =>{
            console.log(this.state)
            // let a = this.state
            // let b = (Object.keys(a.TableDes).map((data)=>{
            //     Object.keys(a.TableDes[data]).map((d)=>{
            //         console.log(a.TableDes[data][d])
            //     })
            //     console.log(a.TableDes[data])
            //     a.TableDes[data] = [a.TableDes[data],a.RiceType, a. Quantity,a.BagType,a.GrossWeight,a.NetWeight,a.Logo,a.VehicleName,a.DestinationCity]
            // }))
            // a.TableDes = [...a.TableDes,a.RiceType, a. Quantity,a.BagType,a.GrossWeight,a.NetWeight,a.Logo,a.VehicleName,a.DestinationCity]
            // console.log(a.TableDes)
            sendData(this.state)
        }
        HandleBack = (props) => [
            this.props.backBtn()
        ]
    render() {
      return (
        <div className="container">
            <form action="">
                <h1>RequestID</h1>
                <input className="input" type="text" id="RequestID" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>CompanyNameTH</h1>
                <input className="input" type="text" id="CompanyNameTH" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>ShippingDate</h1>
                <input className="input" type="text" id="ShippingDate" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>SurveyCompany</h1>
                <input className="input" type="text" id="SurveyCompany" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>RequestBy</h1>
                <input className="input" type="text" id="RequestBy" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>CompanyNameEN</h1>
                <input className="input" type="text" id="CompanyNameEN" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>RequireDate</h1>
                <input className="input" type="text" id="RequireDate" onChange={(e)=>{this.HandleChange(e)}}/>
                <h1>SurveyLocateName</h1>
                <input className="input" type="text" id="SurveyLocateNam" onChange={(e)=>{this.HandleChange(e)}}/>
                
                
            </form>

            <h1>อ.2</h1>
          <input className="input" type="text" onChange={(e)=>{this.HandlelicenseNumber(e)}}>
          
          </input>
          <table class="table">
          <thead>
          {this.state.TableDes.map((data,idx)=>{
            if(idx===1){
            return (Object.keys(data).map((res)=>{
                if(res == "ID" || res == "LicenseId" || res == "balance"){
                    return (<th>{res}</th>
                )
                }
                
          }))}})}
          </thead>
          <tbody>
          {this.state.TableDes.map((data)=>{
              {/* console.log(data) */}
              {/* console.log(data.ID) */}
            return (<tr key={data.ID}>{Object.keys(data).map((res)=>{
                {/* console.log(data)
                console.log(data[res]) */}
                if(res == "ID" || res == "LicenseId" || res == "balance"){
                return (<td>{data[res]}</td>)
                }
          })}
                <h1>RiceType</h1>
                <input className="input" type="text" name={data.ID} id="RiceType" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>Quantity</h1>
                <input className="input" type="text"name={data.ID} max={data.balance} id="Quantity" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>BagType</h1>
                <input className="input" type="text"name={data.ID} id="BagType" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>GrossWeight</h1>
                <input className="input" type="text"name={data.ID} id="GrossWeight" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>NetWeight</h1>
                <input className="input" type="text"name={data.ID} id="NetWeight" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>Logo</h1>
                <input className="input" type="text"name={data.ID} id="Logo" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>VehicleName</h1>
                <input className="input" type="text"name={data.ID} id="VehicleName" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
                <h1>DestinationCity</h1>
                <input className="input" type="text"name={data.ID} id="DestinationCity" onChange={(e)=>{this.HandleChangeInDes(e)}}/>
          <button className="button is-danger" onClick={()=>{this.HandleDelete(data.ID)}}>Delete</button>
          </tr>)})}
          </tbody>
          </table>
          <button className="button is-danger" onClick={this.HandleBack}>Back</button>
          <button className="button is-success" onClick={this.HandleSubmit}>Submit</button>
        </div>
      )
    }
}

export default NewRequest;