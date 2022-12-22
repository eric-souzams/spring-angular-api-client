package io.local.backend.clients.utils;

import java.math.BigDecimal;

public class BigDecimalConverter {

    public static BigDecimal converter(String value) {
        if (value == null) return null;

        value = value.replace(".", "").replace(",", ".");

        return new BigDecimal(value);
    }
}
