package com.themyntt.SGA.controller;

import com.themyntt.SGA.entity.UserEntity;
import com.themyntt.SGA.repository.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    private UserRepository userRepository;

    @PostMapping("/set/")
    public String setUser(@RequestBody() UserEntity userInfo) {
        try {
            this.userRepository.setUser(
                    userInfo.id,
                    userInfo.email,
                    userInfo.password,
                    userInfo.cellphone,
                    userInfo.cpf,
                    userInfo.stateCpf,
                    userInfo.rg,
                    userInfo.firstName,
                    userInfo.lastName,
                    userInfo.schoolId
            );
            return "Usuário cadastrado com sucesso";
        } catch (Exception e) {
            return "Erro ao cadastrar o usuário";
        }
    }
}
