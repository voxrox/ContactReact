import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import { UpdateContactAction } from './Reducers/Action'
import { toast } from 'react-toastify'



var EditFun=()=>{
    var dispatch=useDispatch()
    var history=useHistory()

    const {id}=useParams()
    const details=useSelector((state)=>{return state.ContactReducer})
    console.log("details",details)
    var exist=details.find((item)=>item.id===id)
    console.log(exist)
    const [details2,setdetailsfun]=useState({id:exist.id,Name:exist.Name,Email:exist.Email,phonenumber:exist.phonenumber})
    var TrackDetails=(e)=>{
        console.log(e)
        setdetailsfun({...details2,[e.target.name]:e.target.value})
      
          console.log(details)
     }
    if(exist){
      //  useEffect(()=>{


        //},[exist])
        var confirmed=(e)=>{
            e.preventDefault()
               
            if(details2.Name===""||details2.Email===""||details2.phonenumber===""){return toast.warning("please fill the details")}
           var exist2=details.find((item)=>
                item.id!==details2.id && item.Email===details2.Email
                )
                if(exist2){return toast.error('Email already exists')}
            
                var exist3=details.find((item)=>
                item.id!==details2.id && item.phonenumber===details2.phonenumber
                )
                if(exist3){return toast.error('phone number already exists')}
               
               console.log("hello")
              if(details2.phonenumber.length!==10){return toast.error("please enter valid phone number")}
        
               
               //console.log(newrecord)
             console.log("details2",details2)
               dispatch(UpdateContactAction(details2))
               toast.success("details updated successfully")
               //initstate=[...initstate,newrecord]
               //console.log(initstate)
        
               history.push("/")
        
           }
    return(
        <div className="container">
             <h1 className="display-3 my-5 text-center">Edit Details {id}</h1>
            <div className="row">
               
               

      <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={confirmed}>
              <div className="form-group">
                  <input type="text" placeholder="Name" className="form-control my-2" name="Name" value={details2.Name}  onChange={TrackDetails}/>
              </div>
              <div className="form-group">
                  <input type="email" placeholder="Email" className="form-control my-2" name="Email" value={details2.Email}  onChange={TrackDetails}/>
              </div>
              <div className="form-group">
                  <input type="number" placeholder="Phone Number" className="form-control my-2" name="phonenumber" value={details2.phonenumber}  onChange={TrackDetails} />
              </div>
              <button className="btn btn-block btn-dark center" type="submit">
                  Submit
              </button>
              <NavLink to="/" className="btn btn-danger mx-3" >Cancel </NavLink>
              
          </form>
          
      </div>
                </div>
            </div>
        
       
           
        
    )
    }
    else{
        return (
            <h1>{id} does not exists</h1>
        )
    }
}

export default EditFun