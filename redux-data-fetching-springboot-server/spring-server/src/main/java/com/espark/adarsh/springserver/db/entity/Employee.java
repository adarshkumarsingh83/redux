/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.espark.adarsh.springserver.db.entity;

/**
 * @author adarsh kumar
 */
@javax.persistence.Entity
public class Employee {

	private @javax.persistence.Id @javax.persistence.GeneratedValue Long id;
	private String firstName;
	private String lastName;
	private String email;
	private Integer age;

	private @javax.persistence.Version @com.fasterxml.jackson.annotation.JsonIgnore Long version;

	private Employee() {}

	public Employee(String firstName, String lastName, String email, Integer age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.age = age;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Employee employee = (Employee) o;
		return java.util.Objects.equals(id, employee.id) &&
			java.util.Objects.equals(firstName, employee.firstName) &&
			java.util.Objects.equals(lastName, employee.lastName) &&
			java.util.Objects.equals(email, employee.email) &&
			java.util.Objects.equals(version, employee.version);
	}

	@Override
	public int hashCode() {

		return java.util.Objects.hash(id, firstName, lastName, email, version, age);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Employee{" +
			"id=" + id +
			", firstName='" + firstName + '\'' +
			", lastName='" + lastName + '\'' +
			", email='" + email + '\'' +
			", age='" + age + '\'' +
			", version=" + version +
			'}';
	}
}
