package com.themyntt.SGA.controller;

import com.themyntt.SGA.entity.UserEntity;
import com.themyntt.SGA.repository.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.UUID;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    private UserRepository userRepository;

    public String createId() {
        String id = UUID.randomUUID().toString();
        String formatId = id.replaceAll("-", "").substring(0, 15);
        return formatId + "-" + formatId + "-" + formatId;
    }

    public static boolean checkCPF(String cpf) {
        cpf = cpf.replaceAll("[^0-9]", "");

        if (cpf.length() != 11) {
            return false;
        }

        int sum = 0;
        for (int i = 0; i < 9; i++) {
            sum += (cpf.charAt(i) - '0') * (10 - i);
        }
        int digit1 = 11 - (sum % 11);
        if (digit1 > 9) {
            digit1 = 0;
        }

        sum = 0;
        for (int i = 0; i < 10; i++) {
            sum += (cpf.charAt(i) - '0') * (11 - i);
        }
        int digit2 = 11 - (sum % 11);
        if (digit2 > 9) {
            digit2 = 0;
        }

        boolean result = (cpf.charAt(9) - '0') == digit1 && (cpf.charAt(10) - '0') == digit2;
        if (result) {
            return true;
        }
        return false;
    }

    @PostMapping("/set/")
    public String setUser(@RequestBody() UserEntity userInfo) {
        try {
            boolean check = checkCPF(userInfo.cpf);
            if (!check) {
                return "CPF Invalido";
            }

            this.userRepository.setUser(
                    createId(), // gerar userInfo.id
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
