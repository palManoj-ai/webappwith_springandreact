package com.restapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.restapi.model.Employee;

@Repository
/* @transactional and above annotation is redundant as jparepository contains 
 *simplejparepository which has @repository and @transactional
 */
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

	
	public Optional<Employee> findById(Integer id);

	public Optional<Employee> findByEmail(String email);
	
	
	
	
	
	
}
