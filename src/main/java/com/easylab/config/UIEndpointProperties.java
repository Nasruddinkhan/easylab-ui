package com.easylab.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Properties;

@Component
@ConfigurationProperties(prefix = "ui-endpoints")
public class UIEndpointProperties extends Properties {

    public static Map<String, String> from(final UIEndpointProperties endpointProperties) {
        Map<String, String> propertyMap = new LinkedHashMap<>();
        endpointProperties.forEach((key, value) -> propertyMap.put(key.toString(), value.toString()));
        return propertyMap;
    }
}
