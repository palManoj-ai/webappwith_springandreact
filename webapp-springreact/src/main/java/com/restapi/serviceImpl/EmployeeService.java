package com.restapi.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.restapi.DTO.EmployeeDTO;
import com.restapi.model.Employee;
import com.restapi.repository.EmployeeRepo;
import com.restapi.service.EmployeeServiceInterface;

@Service
public class EmployeeService implements EmployeeServiceInterface{
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@Transactional
	/*
	 * used when all of methods/classes in a operation need to be executed wo exception even if one step is successfull
	 * details: https://stackoverflow.com/questions/54326306/what-is-the-use-of-transactional-with-jpa-and-hibernate
	 */
	public void save(EmployeeDTO employeeDTO) {
		Employee employee=new Employee();
		BeanUtils.copyProperties(employeeDTO, employee);
		employeeRepo.save(employee);
	}


     public EmployeeDTO findByEmail(String email) {
    	 Employee employee=employeeRepo.findByEmail(email).get();
    	 EmployeeDTO employeeDTO=new EmployeeDTO();
 		BeanUtils.copyProperties(employeeDTO, employee);
    	 return employeeDTO;
     }


	public  List<EmployeeDTO> getAll() {
		List<Employee> employeeList=employeeRepo.findAll();
		List<EmployeeDTO> employeeListDTO=new ArrayList<EmployeeDTO>();
		for(Employee entry:employeeList) {
			EmployeeDTO entryDTO=new EmployeeDTO();
			BeanUtils.copyProperties(entry, entryDTO);
			employeeListDTO.add(entryDTO);
		}
		return employeeListDTO;
}


	public EmployeeDTO findById(Integer id) {
		Employee employee=employeeRepo.findById(id).get();
		EmployeeDTO employeeDTO=new EmployeeDTO();
 		BeanUtils.copyProperties(employeeDTO, employee);
    	 return employeeDTO;
	}


	public void deleteById(int id) {
		employeeRepo.deleteById(id);
	}
	
	
}