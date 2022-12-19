package io.local.backend.clients.exception;

import lombok.*;

import java.util.List;

@Getter @Setter @Builder @AllArgsConstructor @NoArgsConstructor
public class ErrorMessage {

    private List<String> errors;

    public ErrorMessage(String message) {
        this.errors = List.of(message);
    }
}
