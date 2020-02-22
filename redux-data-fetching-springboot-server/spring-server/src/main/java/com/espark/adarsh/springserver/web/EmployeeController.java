package com.espark.adarsh.springserver.web;

import com.espark.adarsh.springserver.db.entity.Employee;
import com.espark.adarsh.springserver.services.EmployeeServices;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", maxAge = 3600)
@org.springframework.web.bind.annotation.RestController
public class EmployeeController {

    @org.springframework.beans.factory.annotation.Autowired
    private EmployeeServices employeeServices;


    @org.springframework.web.bind.annotation.PostMapping("/employee")
    Employee saveEmployee(@org.springframework.web.bind.annotation.RequestBody
                                                        Employee employee) {
        return this.employeeServices.saveEmployee(employee);
    }

    @org.springframework.web.bind.annotation.PutMapping("/employee/{employeeId}")
    Employee updateEmployee(
            @org.springframework.web.bind.annotation.PathVariable("employeeId") Long employeeId,
            @org.springframework.web.bind.annotation.RequestBody Employee employee) {
        return this.employeeServices.updateEmployee(employeeId, employee);
    }

    @org.springframework.web.bind.annotation.GetMapping("/employee/{employeeId}")
    Employee Employee(@org.springframework.web.bind.annotation.PathVariable("employeeId") Long employeeId) {
        return this.employeeServices.getEmployee(employeeId);
    }

    @org.springframework.web.bind.annotation.DeleteMapping("/employee/{employeeId}")
    Employee deleteEmployee(@org.springframework.web.bind.annotation.PathVariable("employeeId") Long employeeId) {
        return this.employeeServices.deleteEmployee(employeeId);
    }

    @org.springframework.web.bind.annotation.GetMapping("/employees")
    java.util.List<Employee> getEmployees() {
        return this.employeeServices.getEmployees();
    }
}
