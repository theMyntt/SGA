package com.themyntt.sga.controller;

import com.themyntt.sga.entity.UserEntity;
import com.themyntt.sga.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Random;
import java.util.UUID;

@RestController
@RequestMapping("/api/user/")
public class UserController {
  private final UserRepository userRepository;

  @Autowired
  public UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public String createId() {
    String id = UUID.randomUUID().toString();
    String formatId = id.replaceAll("-", "").substring(0, 15);
    return formatId + "-" + formatId + "-" + formatId;
  }

  public static String checkCPF(String cpf) {
    cpf = cpf.replaceAll("[^0-9]", "");

    if (cpf.length() != 11) {
      return null;
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

    boolean isValid = (cpf.charAt(9) - '0') == digit1 && (cpf.charAt(10) - '0') == digit2;
    if (isValid) {
      return cpf;
    } else {
      return null;
    }
  }

  public static String checkRg(String rg) {
    String rgFormated = rg.replaceAll("[^0-9]", "");

    if (rgFormated.length() == 9) {
      return rgFormated;
    } else {
      return null;
    }
  }

  public static long createToken() {
    Random rand = new Random();
    return rand.nextInt(1700000 - 1000000 + 1) + 1000000;
  }

  public static String formatCellphone(String cellphone) {
    return cellphone.replaceAll("[^0-9\\s]", "");
  }

  @PostMapping("/set/")
  public String setUser(@RequestBody() UserEntity userInfo) {
    String id = createId();
    String email = userInfo.email;
    String password = userInfo.password;
    String cellphone = userInfo.cellphone;
    String cpf = checkCPF(userInfo.cpf);
    String stateRg = userInfo.stateRg;
    String rg = checkRg(userInfo.rg);
    String firstName = userInfo.firstName;
    String lastName = userInfo.lastName;
    long token = createToken();
    String schoolId = userInfo.schoolId;

    try {
      if (cpf == null) {
        return "CPF Invalido";
      }

      this.userRepository.setUser(
          id,
          email,
          password,
          cellphone,
          cpf,
          stateRg,
          rg,
          firstName,
          lastName,
          token,
          schoolId
      );
      return "Usuário cadastrado com sucesso.";
    } catch (Exception e) {
      return "Erro ao cadastrar o usuário: " + e;
    }
  }
}