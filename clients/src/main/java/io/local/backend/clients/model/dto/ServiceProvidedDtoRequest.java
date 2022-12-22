package io.local.backend.clients.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ServiceProvidedDtoRequest {

    @NotEmpty(message = "{field.description.required}")
    private String description;
    @NotEmpty(message = "{field.amount.required}")
    private String amount;
    @NotEmpty(message = "{field.date.required}")
    private String date;
    @NotNull(message = "{field.client.required}")
    private Long clientId;
}
