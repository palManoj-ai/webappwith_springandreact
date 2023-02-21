import axios from "axios";

//code for consuming RESTAPI through AXIOS (promise based HTTP client)
// axios methods corresponding to CRUD : post, get, put, delete  

const EMPLOYEE_BASE_REST_API_URL="http://localhost:8080/api"
//this is the base url of the webapp 

class EmployeeService{
    getAllEmployees(){
        //returns url to access all employees
        return axios.get(EMPLOYEE_BASE_REST_API_URL+"/employee/all")
    }

    createEmployee(employee){
         //returns url to create/add one employee
        return axios.post(EMPLOYEE_BASE_REST_API_URL+"/employee",employee);
    }

    getEmployeeById(employeeId){
        //finds employee by id
        return axios.get(EMPLOYEE_BASE_REST_API_URL+"/employee/"+employeeId);
    }

    // updateEmployee(employeeId,employee){
    //     return axios.put(EMPLOYEE_BASE_REST_API_URL+"/update"+employeeId,employee)
    // } 
    // (to be implemented)

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+"/delete/"+employeeId);
    }

}   
export default  new EmployeeService();