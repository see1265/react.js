import React from "react";

const User=(props)=>{
    let data=props.data

    return(
   <div className="mainblock">
          <div>
            <h2>{data[0].coursename}</h2>
            <h2>{data[0].trainingduretion}</h2>
            <h2>{data[0].trainername}</h2>
            <img src={data[0].photos} alt="" />
          </div>
          <div>
            <h2>{data[1].coursename}</h2>
            <h2>{data[1].trainingduretion}</h2>
            <h2>{data[1].trainername}</h2>
            <img src={data[1].photos} alt="" />
          </div>
          <div>
            <h2>{data[2].coursename}</h2>
            <h2>{data[2].trainingduretion}</h2>
            <h2>{data[2].trainername}</h2>
            <img src={data[2].photos} alt="" />
          </div>
   </div>

    )
}
export default User