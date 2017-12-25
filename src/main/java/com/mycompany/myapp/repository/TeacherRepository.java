package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Teacher;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Teacher entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    @Query("select distinct teacher from Teacher teacher left join fetch teacher.student1S")
    List<Teacher> findAllWithEagerRelationships();

    @Query("select teacher from Teacher teacher left join fetch teacher.student1S where teacher.id =:id")
    Teacher findOneWithEagerRelationships(@Param("id") Long id);

}
