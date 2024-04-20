package com.themyntt.SGA.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "USER_INFORMATION")
public class UserEntity {
    @Id
    @Column(name = "ID_USER")
    public String id;

    @Column(name = "EMAIL_USER")
    public String email;

    @Column(name = "PASSWORD_USER")
    public String password;

    @Column(name = "CELLPHONE_USER")
    public String cellphone;

    @Column(name = "CPF_USER")
    public String cpf;

    @Column(name = "STATE_RG_USER")
    public String stateRg;

    @Column(name = "RG_USER")
    public String rg;

    @Column(name = "FIRST_NAME_USER")
    public String firstName;

    @Column(name = "LAST_NAME_USER")
    public String lastName;

    @Column(name = "SCHOOL_ID_SCHOOL")
    public String schoolId;

    public UserEntity() { }

    public UserEntity(
            String id,
            String email,
            String password,
            String cellphone,
            String cpf,
            String stateRg,
            String rg,
            String firstName,
            String lastName,
            String schoolId
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.cellphone = cellphone;
        this.cpf = cpf;
        this.stateRg = stateRg;
        this.rg = rg;
        this.firstName = firstName;
        this.lastName = lastName;
        this.schoolId = schoolId;
    }
}
