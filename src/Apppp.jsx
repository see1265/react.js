import React, { Component } from 'react'
import JSON from "./task.json"
export default class Apppp extends Component {

    constructor(){
        super()
        this.state={
            empData:JSON
        }
    }
            
  render() {
    return (
      <>
      <table style={{textAlign:"center"}} border={"2"} cellSpacing={"5px"} cellPadding={"5px"}>
         <tr>
         <th>EMP_ID</th>
         <th>EMP_NAME</th>
         <th>EMP_SAL</th>
         <th>EMP_GEN</th>
         <th>EMP_EDUCATION</th>
         <th>EMP_DESIGNATION</th>
         <th>EMP_COMPANY</th>
         <th>EMP_SKILLS</th>
         <th>EMP_CITY</th>
         <th>EMP_IMG</th>
         </tr>
         {this.state.empData.map((x)=>{
            return(
                <tr>
                    <td>{x.emp_id}</td>
                    <td>{x.emp_name}</td>
                    <td>{x.emp_sal}</td>
                    <td>{x.emp_gen}</td>
                    <td>{x.emp_edu}</td>
                    <td>{x.emp_deg}</td>
                    <td>{x.emp_company.current}</td>
                    <td>
                    {x.emp_skills.map((x)=>{
                        return <li>{x}</li>
                    })}
                    </td>
                    <td>{x.emp_city}</td>
                    <td><img height={"100px"} width={"100px"} src={x.emp_img} alt="" /></td>
                </tr>
            )
         })}

      </table>
      </>
    )
  }
}
