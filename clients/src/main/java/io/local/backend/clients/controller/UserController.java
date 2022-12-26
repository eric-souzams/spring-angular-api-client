package io.local.backend.clients.controller;

import io.local.backend.clients.exception.BusinessException;
import io.local.backend.clients.model.entity.Client;
import io.local.backend.clients.model.entity.User;
import io.local.backend.clients.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody User user) {
        String password = passwordEncoder.encode(user.getPassword());

        user.setPassword(password);

        userService.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
