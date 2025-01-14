import React from "react"; 
import img from "../../img/rigo-baby.jpg"




const Cards =()=>{
    return(
        <div className="card text-center " style={{width:"15rem"}}>
  <div className="card-body">
  <img src={img} className="card-img-top" alt="..."/>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out Move</a>
  </div>



</div>
    )
}


export default Cards