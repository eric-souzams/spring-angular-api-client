package io.local.backend.clients.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.local.backend.clients.model.dto.ServiceProvidedDtoRequest;
import io.local.backend.clients.utils.BigDecimalConverter;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
public class ServiceProvided {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;

    @Column
    private BigDecimal amount;

    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate date;

    public static ServiceProvided toDomain(ServiceProvidedDtoRequest dto, Client client) {
        return ServiceProvided.builder()
                .date(LocalDate.parse(dto.getDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy")))
                .description(dto.getDescription())
                .amount(BigDecimalConverter.converter(dto.getAmount()))
                .client(client)
                .build();
    }
}
