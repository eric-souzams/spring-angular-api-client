package io.local.backend.clients.controller;

import io.local.backend.clients.model.dto.ServiceProvidedDtoRequest;
import io.local.backend.clients.model.entity.Client;
import io.local.backend.clients.model.entity.ServiceProvided;
import io.local.backend.clients.service.ClientService;
import io.local.backend.clients.service.ServiceProvidedService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/services")
public class ServiceProvidedController {

    private ServiceProvidedService serviceProvidedService;
    private ClientService clientService;

    @PostMapping
    public ResponseEntity<ServiceProvided> save(@RequestBody @Valid ServiceProvidedDtoRequest dto) {
        Client client = clientService.findById(dto.getClientId());

        ServiceProvided serviceProvided = ServiceProvided.toDomain(dto, client);

        ServiceProvided savedService = serviceProvidedService.save(serviceProvided);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedService);
    }

    @GetMapping(value = "/search")
    public ResponseEntity<List<ServiceProvided>> search(@RequestParam(value = "name", required = false, defaultValue = "") String name,
                                                        @RequestParam(value = "month", required = false) Integer month) {

        List<ServiceProvided> result = serviceProvidedService.search(name, month);

        return ResponseEntity.ok(result);
    }

}
