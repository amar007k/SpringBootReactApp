package com.student.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.myapp.model.Student;
import com.student.myapp.repository.StudentRepository;


@RestController
@RequestMapping("/api")
public class StudentController {

	@Autowired
	StudentRepository studentRepository;
	
	
	@PostMapping("/studentDetails")
	@CrossOrigin(origins = "http://localhost:5173")
	public String addStudentDeatils(@RequestBody Student student) {
		studentRepository.save(student);
		return "Student Details has been added";
	}
}
