package io.local.backend.clients.model.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 11)
    private String cpf;

    @Column
    private LocalDate registeredAt;

    @Column
    private LocalDate updatedAt;

    @PrePersist
    public void prePersist() {
        setRegisteredAt(LocalDate.now());
    }

    @PreUpdate
    public void preUpdate() {
        setUpdatedAt(LocalDate.now());
    }

}
