import React, { Component } from 'react'
import {viewAllTable} from '../func/query.func.js'

class CheckRequest extends Component{
    constructor(props){
        super(props)
        this.state={
            datas: []
        }
    }
    componentWillMount = () =>{
        let dat = viewAllTable().then(res => {
            // console.log(res)
            this.setState({datas : res})
            // console.log(this.state)
        }); 
        // this.setState({
        //     datas: data.Data
        // })
        
    }
    render() {
        // let a = [];
        // let b = [];
        // let dataList = this.state.datas.map((value)=>{
        //    const list = Object.keys(value).map((res)=>{
        //         a.push(res)
        //         b.push(value[res])
        //     })
        //     return list
        // })
        // console.log(data)
        // console.log(this.state)
        // console.log(dataList)
        // console.log(a)
        // console.log(b)
        
        
        function getIem(data,value){
        //    console.log(data)
            // console.log(value)
            if(!Array.isArray(value[data])){
                return (
                            <th>{data}</th> 
                        )
    
            }
        }
        function getValue(data,value){
            if(!Array.isArray(value[data])){
                return (
                            <td>{value[data]} 
                            </td>
                        )
    
            }
        }
        return(
            <div className="container">
                <table class="table">
                    {this.state.datas.map((value,idx) =>{
                        if (idx===1) {
                        return (
                            <thead>
                                <tr>
                                {Object.keys(value.Data).map(data => {return getIem(data,value.Data)})} 
                                </tr>
                            </thead>)
                        }
                    })}
                    {this.state.datas.map((value) =>{
                        return (
                            <tbody>
                                <tr>
                                    {Object.keys(value.Data).map(data => {return getValue(data,value.Data)})} 
                                    </tr>
                            </tbody>
                        )
                    })}
              
                </table>
            </div>
        )
    }
}

export default CheckRequest;