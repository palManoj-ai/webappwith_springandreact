import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    // generated by usestate snippet annotation, need to import usestate as well
    //is a function that contains the initial state, modifier function and returns the modified value
    // const[mod,func]=usestate(initial)

    useEffect(() => {
        getAllEmployees();
    }, [])
    const getAllEmployees=()=>{
    EmployeeService.getAllEmployees().then((response)=>{
        setEmployees(response.data)
        console.log(response.data);
    }).catch(error => {
        console.log(error);
  })
}

    const deleteEmployee=(employeeId) =>{
        EmployeeService.deleteEmployee(employeeId).then((response) =>{
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
    }
    

  return (
    <div className="container">
        <h2 className="text-center">List Employees</h2>
        {/* now adding link to add employees */}
        <Link to="/add-employee" className="btn btn-primary mb-2"> Employee Registration </Link>
        <table className="table table-bordered table striped">
            <thead>
                <th>Employee ID</th> 
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                employees.map(
                    employee =>
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            {/* <Link className="btn btn-info" to={'/update-employee/${employee.id}'}>Update</Link> */}
                            <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)} 
                            style={{marginLeft:"10px"}}>Delete
                            </button>
                        </td>
                        </tr>
                )
                }
            </tbody>
        </table>
    </div>
  )

            }
export default ListEmployeeComponent