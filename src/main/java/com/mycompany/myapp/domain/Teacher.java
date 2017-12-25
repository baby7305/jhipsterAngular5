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
 * A Teacher.
 */
@Entity
@Table(name = "teacher")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Teacher implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tname")
    private String tname;

    @Column(name = "sex")
    private String sex;

    @Column(name = "age")
    private Integer age;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "teacher_student1",
               joinColumns = @JoinColumn(name="teachers_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="student1s_id", referencedColumnName="id"))
    private Set<Student> student1S = new HashSet<>();

    @ManyToMany(mappedBy = "teachers")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Student> students = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTname() {
        return tname;
    }

    public Teacher tname(String tname) {
        this.tname = tname;
        return this;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

    public String getSex() {
        return sex;
    }

    public Teacher sex(String sex) {
        this.sex = sex;
        return this;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public Teacher age(Integer age) {
        this.age = age;
        return this;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Set<Student> getStudent1S() {
        return student1S;
    }

    public Teacher student1S(Set<Student> students) {
        this.student1S = students;
        return this;
    }

    public Teacher addStudent1(Student student) {
        this.student1S.add(student);
        student.getTeacher1S().add(this);
        return this;
    }

    public Teacher removeStudent1(Student student) {
        this.student1S.remove(student);
        student.getTeacher1S().remove(this);
        return this;
    }

    public void setStudent1S(Set<Student> students) {
        this.student1S = students;
    }

    public Set<Student> getStudents() {
        return students;
    }

    public Teacher students(Set<Student> students) {
        this.students = students;
        return this;
    }

    public Teacher addStudent(Student student) {
        this.students.add(student);
        student.getTeachers().add(this);
        return this;
    }

    public Teacher removeStudent(Student student) {
        this.students.remove(student);
        student.getTeachers().remove(this);
        return this;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
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
        Teacher teacher = (Teacher) o;
        if (teacher.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), teacher.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Teacher{" +
            "id=" + getId() +
            ", tname='" + getTname() + "'" +
            ", sex='" + getSex() + "'" +
            ", age=" + getAge() +
            "}";
    }
}
