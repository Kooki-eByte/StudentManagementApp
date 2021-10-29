package com.studentmanagement.backend.model;

import com.studentmanagement.backend.enums.Gender;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.UUID;

@EqualsAndHashCode
@Table(name = "student", uniqueConstraints = {
        @UniqueConstraint(name = "student_unique_email", columnNames = "email")
})
@Entity(name = "student")
public class StudentModel {

    @Column(name = "ID", nullable = false, updatable = false)
    @SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    @Id
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private Gender gender;

    @Column(nullable = false)
    private UUID studentCode;

    public StudentModel() {
    }

    public StudentModel(String firstName, String lastName, String email, Gender gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
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

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UUID getStudentCode() {
        return studentCode;
    }

    public void setStudentCode(UUID studentCode) {
        this.studentCode = studentCode;
    }

    @Override
    public String toString() {
        return "StudentModel{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                ", studentCode=" + studentCode +
                '}';
    }
}
