package com.restapi.service;

import java.util.List;

import com.restapi.DTO.EmployeeDTO;

public interface EmployeeServiceInterface {
	
	public void save(EmployeeDTO employeeDTO);
	

     public EmployeeDTO findByEmail(String email);


	public  List<EmployeeDTO> getAll();

	public EmployeeDTO findById(Integer id);


	public void deleteById(int id);	
}

