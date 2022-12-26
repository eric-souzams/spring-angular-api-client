package io.local.backend.clients.service;

import io.local.backend.clients.exception.BusinessException;
import io.local.backend.clients.model.entity.User;
import io.local.backend.clients.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional
    public void save(User user) {
        if (checkIfExists(user.getUsername())) {
            throw new BusinessException("Username already exists.");
        }

        repository.save(user);
    }

    @Transactional
    private boolean checkIfExists(String username) {
        return repository.existsByUsername(username);
    }

}
