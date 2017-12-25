package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Student.
 */
@Entity
@Table(name = "student")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sname")
    private String sname;

    @Column(name = "sex")
    private String sex;

    @Column(name = "age")
    private Integer age;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "student_teacher",
               joinColumns = @JoinColumn(name="students_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="teachers_id", referencedColumnName="id"))
    private Set<Teacher> teachers = new HashSet<>();

    @ManyToMany(mappedBy = "student1S")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Teacher> teacher1S = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSname() {
        return sname;
    }

    public Student sname(String sname) {
        this.sname = sname;
        return this;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getSex() {
        return sex;
    }

    public Student sex(String sex) {
        this.sex = sex;
        return this;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public Student age(Integer age) {
        this.age = age;
        return this;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Set<Teacher> getTeachers() {
        return teachers;
    }

    public Student teachers(Set<Teacher> teachers) {
        this.teachers = teachers;
        return this;
    }

    public Student addTeacher(Teacher teacher) {
        this.teachers.add(teacher);
        teacher.getStudents().add(this);
        return this;
    }

    public Student removeTeacher(Teacher teacher) {
        this.teachers.remove(teacher);
        teacher.getStudents().remove(this);
        return this;
    }

    public void setTeachers(Set<Teacher> teachers) {
        this.teachers = teachers;
    }

    public Set<Teacher> getTeacher1S() {
        return teacher1S;
    }

    public Student teacher1S(Set<Teacher> teachers) {
        this.teacher1S = teachers;
        return this;
    }

    public Student addTeacher1(Teacher teacher) {
        this.teacher1S.add(teacher);
        teacher.getStudent1S().add(this);
        return this;
    }

    public Student removeTeacher1(Teacher teacher) {
        this.teacher1S.remove(teacher);
        teacher.getStudent1S().remove(this);
        return this;
    }

    public void setTeacher1S(Set<Teacher> teachers) {
        this.teacher1S = teachers;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Student student = (Student) o;
        if (student.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), student.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Student{" +
            "id=" + getId() +
            ", sname='" + getSname() + "'" +
            ", sex='" + getSex() + "'" +
            ", age=" + getAge() +
            "}";
    }
}
