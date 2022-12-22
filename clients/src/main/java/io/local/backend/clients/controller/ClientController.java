package io.local.backend.clients.controller;

import io.local.backend.clients.model.entity.Client;
import io.local.backend.clients.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping
    public ResponseEntity<Client> save(@Valid @RequestBody Client client) {
        Client newClient = clientService.save(client);

        return ResponseEntity.status(HttpStatus.CREATED).body(newClient);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Client> findById(@PathVariable("id") Long id) {
        Client client = clientService.findById(id);

        return ResponseEntity.ok(client);
    }

    @GetMapping
    public ResponseEntity<List<Client>> findAll() {
        List<Client> clients = clientService.findAll();

        return ResponseEntity.ok(clients);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        clientService.delete(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update(@PathVariable("id") Long id, @Valid @RequestBody Client client) {
        clientService.update(id, client);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
