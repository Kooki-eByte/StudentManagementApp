package com.studentmanagement.backend.service;

import com.studentmanagement.backend.model.StudentModel;
import com.studentmanagement.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<StudentModel> getAllStudents() {
        return studentRepository.findAll();
    }
}
