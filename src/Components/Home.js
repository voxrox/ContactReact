import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DeleteContactAction } from './Reducers/Action'



var HomeFun=()=>{
    var details=useSelector((state)=>{return state.ContactReducer})

    var dispatch=useDispatch()

    var Del=(id)=>{
        dispatch(DeleteContactAction(id))
        toast.success("deleted successfully")

    }
    
    //const details=useSelector((state)=>{return state})
    console.log(details)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                <NavLink to="/AddContact" className="btn btn-outline-dark">
      Add Contact
      </NavLink>
                </div>
        <div className="col-md-10 mx-auto">
            <table className="table table-hover">
                <thead className="text-white bg-dark text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((item)=>{
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.phonenumber}</td>
                                <td>
                                    <NavLink to={`/edit/${item.id}`} className="btn btn-small btn-primary mr-2">Edit</NavLink>
                                    <button className="btn btn-small btn-danger mx-2" type="button" onClick={()=>Del(item.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
            </div>
        </div>
              
           
        
    )
}

export default HomeFun