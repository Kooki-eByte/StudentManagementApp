package com.studentmanagement.backend.service;

import com.studentmanagement.backend.model.StudentModel;
import com.studentmanagement.backend.repository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
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

    public void addNewStudent(StudentModel student) {
        student.setStudentCode(UUID.randomUUID());
        studentRepository.save(student);
//        log.info("Student is saved with id of {}", student.getId());
    }
}
