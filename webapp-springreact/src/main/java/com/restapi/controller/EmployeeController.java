package com.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.DTO.EmployeeDTO;
import com.restapi.model.Employee;
import com.restapi.serviceImpl.EmployeeService;

@RestController
/*
 * @RestController=@controller+@responsebody 
 * (rb-used to deal with data exchange in json/xml or other form)
 */
@RequestMapping("/api")
@CrossOrigin
//tells spring boot and react to connect using http requests made from different port

public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	//CREATE an employee entry
	@PostMapping("/employee")
	public ResponseEntity<String> saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
		 employeeService.save(employeeDTO);
		 return new ResponseEntity<String>("Entry saved successfully", HttpStatus.CREATED);
		 }
	
	
	//READ: Get all employees list
	@GetMapping("/employee/all")
	public ResponseEntity<List<EmployeeDTO>> getAllEmployees() { 
		List<EmployeeDTO> employeeListDTO=employeeService.getAll();
		return new ResponseEntity<List<EmployeeDTO>>(employeeListDTO,HttpStatus.OK);
	}
	
	//Get a single employee by id
	@GetMapping("/employee/{id}")
	public ResponseEntity<EmployeeDTO> getEmployeeWithId(@PathVariable int id){
		EmployeeDTO employeeDTO=employeeService.findById(id);
		return new ResponseEntity<EmployeeDTO>(employeeDTO, HttpStatus.OK);
	}
	
	//UPDATE an existing entry with id as identifier
	@PutMapping("/update/{id}")
	public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable int id,@RequestBody Employee editEmployee){
			EmployeeDTO tempEmployee=employeeService.findById(id);
			tempEmployee.setFirstName(editEmployee.getFirstName());
			tempEmployee.setLastName(editEmployee.getLastName());
			tempEmployee.setEmail(editEmployee.getEmail());
			employeeService.save(tempEmployee);
			return new ResponseEntity<EmployeeDTO>(tempEmployee,HttpStatus.ACCEPTED);
	}

	
	//DELETE an entry
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteRecord(@PathVariable int id) { 
		employeeService.deleteById(id);
		return new ResponseEntity<String>("Record Deleted",HttpStatus.OK);	
	}
}
