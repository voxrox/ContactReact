import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import { AddContactAction } from './Reducers/Action'
import { useHistory } from 'react-router-dom'



var AddFun=()=>{
    const dispatch=useDispatch()
    var history=useHistory()
    const initstate=useSelector((state)=>{return state.ContactReducer})
    //var initstate=useSelector((state)=>state.ContactReducer)
    //console.log("------------")
    //console.log(sel)
    const [details,setdetailsfun]=useState({Name:"",Email:"",phonenumber:""})
    //const [confirmdetail,setconfirmfun]=useState([])

  var TrackDetails=(e)=>{
      console.log(e)
    setdetailsfun({...details,[e.target.name]:e.target.value})
    
        //console.log(details)
   }

   var confirmed=(e)=>{
    e.preventDefault()
       
    if(details.Name===""||details.Email===""||details.phonenumber===""){return toast.warning("please fill the details")}
   var exist=initstate.find((item)=>
        item.Email===details.Email
        )
        if(exist){return toast.error('Email already exists')}
    
        var exist2=initstate.find((item)=>
        item.phonenumber===details.phonenumber
        )
        if(exist2){return toast.error('phone number already exists')}
       
       console.log("hello")
      if(details.phonenumber.length!==10){return toast.error("please enter valid phone number")}

       var newrecord={...details,id:new Date().getTime().toString()}
       //console.log(newrecord)
       console.log(AddContactAction(newrecord))
       dispatch(AddContactAction(newrecord))
       toast.success("details added successfully")
       //initstate=[...initstate,newrecord]
       //console.log(initstate)

       setdetailsfun({Name:"",Email:"",phonenumber:""})
       history.push("/")

   }

    return(
        <div className="container">
             <h1 className="display-3 my-5 text-center">Add Details</h1>
            <div className="row">
               
               

      <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={confirmed}>
              <div className="form-group">
                  <input type="text" placeholder="Name" name="Name" className="form-control my-2" value={details.Name} onChange={TrackDetails}/>
              </div>
              <div className="form-group">
                  <input type="email" placeholder="Email" name="Email" className="form-control my-2"  value={details.Email} onChange={TrackDetails}/>
              </div>
              <div className="form-group">
                  <input type="number" placeholder="Phone Number" name="phonenumber" className="form-control my-2"  value={details.phonenumber} onChange={TrackDetails}/>
              </div>
              <button className="btn btn-block btn-dark center" type="submit">
                  Submit
              </button>
              
          </form>
          
      </div>
                </div>
            </div>
        
              
           
        
    )
}

export default AddFun