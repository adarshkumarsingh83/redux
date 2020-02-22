package com.espark.adarsh.springserver.services;

import com.espark.adarsh.springserver.db.entity.Employee;

public interface EmployeeServices {

    Employee saveEmployee(Employee employee);
    Employee updateEmployee(Long employeeId, Employee employee);
    Employee getEmployee(Long employeeId);
    Employee deleteEmployee(Long employeeId);
    java.util.List<Employee> getEmployees();
}
