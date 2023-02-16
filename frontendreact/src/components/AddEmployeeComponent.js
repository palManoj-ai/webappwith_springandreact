import { useState, useEffect } from "react"
import React from 'react'
import {Link, useHistory,useParams} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService"

//usestate, useparams, usehistory are hooks 


const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    // whenever form is submitted these varaibles will hold the data

    const history=useHistory(); 
    const {id} =useParams();
    //to retrieve id parameter from url
    

    //method to save employee obj
    const saveEmployee=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,email}
            // calling employeeservice to create instance of employee
            EmployeeService.createEmployee(employee).then((response) => {
            console.log(response.data)
            history.push("/allemployees");
            //after posting employee second page should be all employees listed one
            //history object is used to navigate
        }).catch(error =>{
            console.log(error)
        })
    }

    //method to update employee obj   (to be implemented)
    // const updateEmployee=(e)=>{
    //     e.preventDefault();
    //     const employee={firstName,lastName,email}
    //         // calling employeeservice to create instance of employee
    //         EmployeeService.updateEmployee(id,employee).then((response) => {
    //         console.log(response.data)
    //         history.push("/allemployees");
    //         //after posting employee second page should be all employees listed one
    //         //history object is used to navigate
    //     }).catch(error =>{
    //         console.log(error)
    //     })
    // }
   

    useEffect(() => {
      
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })        
    }, [])
 
  return(
    <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3 ">
                <h2> Employee Registration  </h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                        <label className="form-label"> First Name:</label>
                            <input 
                                type="text"
                                placeholder="Enter First Name"
                                name="firstName"
                                className="form-control"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                >
                            </input>
                            </div>

                        <div className = "form-group mb-2">
                        <label className="form-label"> Last Name:</label>
                        <input 
                                type="text"
                                placeholder="Enter Last Name"
                                name="lastName"
                                className="form-control"
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                >
                            </input>
                            </div>
                        <div className = "form-group mb-2">
                        <label className="form-label"> Email ID:</label>
                        <input 
                                type="text"
                                placeholder="Enter Email ID"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                >
                            </input>
                        </div>
                        <button className="btn btn-success" onClick={(e)=> saveEmployee(e)}> Submit</button>
                        <Link to="/allemployees" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                    </form>
            </div>
        </div>
    </div>                
</div>
</div>
  )
}
export default AddEmployeeComponent