package io.local.backend.clients.service;

import io.local.backend.clients.model.entity.ServiceProvided;
import io.local.backend.clients.repository.ServiceProvidedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ServiceProvidedService {

    @Autowired
    private ServiceProvidedRepository repository;

    @Transactional
    public ServiceProvided save(ServiceProvided serviceProvided) {
        return repository.save(serviceProvided);
    }

    @Transactional(readOnly = true)
    public List<ServiceProvided> search(String name, Integer month) {

        return repository.findByClientNameAndMonth("%"+name+"%", month);
    }

    @Transactional(readOnly = true)
    public ServiceProvided findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Service not found"));
    }

    @Transactional(readOnly = true)
    public List<ServiceProvided> findAll() {
        return repository.findAll();
    }

    @Transactional
    public void delete(Long id) {
        repository.findById(id)
                .map(service -> {
                   repository.delete(service);
                   return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Service not found"));
    }
}
