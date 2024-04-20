package com.themyntt.sga.repository;

import com.themyntt.sga.entity.UserEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
  @Query("SELECT u.token FROM UserEntity u WHERE u.email = :email AND u.password = :password")
  UserEntity getUser(
      @Param("email") String email,
      @Param("password") String password
  );

  @Modifying
  @Transactional
  @Query("INSERT INTO UserEntity(id, email, password, cellphone, cpf, stateRg, rg, firstName, lastName, token, schoolId) VALUES (:id, :email, :password, :cellphone, :cpf, :stateRg, :rg, :firstName, :lastName, :token, :schoolId)")
  void setUser(
      @Param("id") String id,
      @Param("email") String email,
      @Param("password") String password,
      @Param("cellphone") String cellphone,
      @Param("cpf") String cpf,
      @Param("stateRg") String stateRg,
      @Param("rg") String rg,
      @Param("firstName") String firstName,
      @Param("lastName") String lastName,
      @Param("token") long token,
      @Param("schoolId") String schoolId
  );
}
