package com.studentmanagement.backend.controller;

import com.studentmanagement.backend.model.StudentModel;
import com.studentmanagement.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/v1/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("all")
    public ResponseEntity<?> getAllStudents() {
        List<StudentModel> listOfStudents = studentService.getAllStudents();
        return ResponseEntity.ok(listOfStudents);
    }

    @PostMapping("add")
    public void addNewStudent(@RequestBody StudentModel student){
        studentService.addNewStudent(student);
    }

}
