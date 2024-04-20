package com.themyntt.SGA.repository;

import com.themyntt.SGA.entity.UserEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@Modifying
public interface UserRepository extends JpaRepository<UserEntity, String> {
    @Transactional
    @Query("INSERT INTO u " +
            "FROM UserEntity(id,email,password,cpf,stateCpf,rg,firstName,lastName,schoolId) " +
            "VALUES (:id, :email, :password, :cellphone, :cpf, :stateCpf, :rg, :firstName, :lastName, :schoolId)")
    UserEntity setUser(
            @Param("id") String id,
            @Param("email") String email,
            @Param("password") String password,
            @Param("cellphone") String cellphone,
            @Param("cpf") String cpf,
            @Param("stateCpf") String stateCpf,
            @Param("rg") String rg,
            @Param("firstName") String firstName,
            @Param("lastName") String lastName,
            @Param("schoolId") String schoolId
    );
}
