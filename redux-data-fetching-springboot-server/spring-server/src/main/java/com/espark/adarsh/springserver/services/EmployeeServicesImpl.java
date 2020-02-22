package com.espark.adarsh.springserver.services;

import com.espark.adarsh.springserver.db.entity.Employee;
import com.espark.adarsh.springserver.db.repository.EmployeeRepository;

@org.springframework.stereotype.Service
public class EmployeeServicesImpl implements EmployeeServices {

    @org.springframework.beans.factory.annotation.Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return this.employeeRepository.save(employee);
    }

    @Override
    public Employee updateEmployee(Long employeeId,Employee employee) {
        return this.employeeRepository.save(employee);
    }

    @Override
    public Employee deleteEmployee(Long employeeId) {
         Employee employee = this.getEmployee(employeeId);
         this.employeeRepository.delete(employee);
        return employee;
    }

    @Override
    public Employee getEmployee(Long employeeId) {
        java.util.Optional<Employee> employeeOptional = this.employeeRepository.findById(employeeId);
        if (employeeOptional.isPresent()) {
            return employeeOptional.get();
        } else {
            return null;
        }
    }

    @Override
    public java.util.List<Employee> getEmployees() {
        java.util.List<Employee> employeeList = new java.util.LinkedList<>();
        this.employeeRepository.findAll().forEach(employee -> employeeList.add(employee));
        return employeeList;
    }
}
