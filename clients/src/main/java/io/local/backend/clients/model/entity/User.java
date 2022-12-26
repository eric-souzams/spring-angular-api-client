package io.local.backend.clients.model.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    @NotEmpty(message = "{field.username.required}")
    private String username;

    @Column(nullable = false)
    @NotEmpty(message = "{field.password.required}")
    private String password;

}
