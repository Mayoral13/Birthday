import male from "/images/male.jfif"
import female from "/images/female.jfif"
import { useContext } from "react"
import { Context } from "../Context"
const Body = () =>{
  const {People, Clear, data} = useContext(Context)
  console.log(People)
  if(People.length === 0 ){
    return(
    <div className="container d-flex align-items-center justify-content-center" style={{ backgroundColor: 'pink', width:750}}>
    <div className="card col-8 mt-5 mb-5">
   <div style={{marginLeft:'2rem', marginTop:'2rem'}}>
   <h1>Birthday List</h1>
   </div>
   {
    People.map((people)=>(
    <li  key = {people.id} >
        <div style={{display:'flex'}}>
          {people.gender === "male" ? (
        <img src={male}className="card-img" alt="Card Image" style={{borderRadius:'50%', width:'100px',height:'100px', objectFit:'contain'}}/>)
        :(<img src={female}className="card-img" alt="Card Image" style={{borderRadius:'50%', width:'100px',height:'100px', objectFit:'contain'}} />)
          }
    <div className="card-body">
      <h5 className="card-title">Name: {people.fullName}</h5>
      <h6>Age: {people.age}</h6>
      <h6>Birthday: {people.birthday}</h6>
    </div>
        </div>
        </li>
))}
   <button className="btn btn-primary" style={{margin:'1.5rem'}} onClick={data}>Refresh Data</button>

  </div> 
</div>
    )
  }
return(
    <div className="container d-flex align-items-center justify-content-center" style={{ backgroundColor: 'pink', width:750}}>
        <div className="card col-8 mt-5 mb-5">
       <div style={{marginLeft:'2rem', marginTop:'2rem'}}>
       <h1>Birthday List</h1>
       </div>
       {
        People.map((people)=>(
        <li  key = {people.id} >
            <div style={{display:'flex'}}>
              {people.gender === "male" ? (
            <img src={male}className="card-img" alt="Card Image" style={{borderRadius:'50%', width:'100px',height:'100px', objectFit:'contain'}}/>)
            :(<img src={female}className="card-img" alt="Card Image" style={{borderRadius:'50%', width:'100px',height:'100px', objectFit:'contain'}} />)
              }
        <div className="card-body">
          <h5 className="card-title">Name: {people.fullName}</h5>
          <h6>Age: {people.age} years</h6>
          <h6>Birthday: {people.birthday}</h6>
        </div>
            </div>
            </li>
    ))}
       <button className="btn btn-danger" style={{margin:'1.5rem'}} onClick={Clear}>ClearAll</button>

      </div> 
    </div>
)
}
export default Body