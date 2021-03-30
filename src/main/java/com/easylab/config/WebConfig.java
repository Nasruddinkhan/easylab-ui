package com.easylab.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    private static final String CLASSPATH_DIST = "classpath:/dist/";
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        addMapping(registry, "/dist/**", CLASSPATH_DIST);
        addMapping(registry, "/resources/**", CLASSPATH_DIST);
        addMapping(registry, "/asset/**", CLASSPATH_DIST);
        addMapping(registry, "/config/**", CLASSPATH_DIST);
        addMapping(registry, "/**", CLASSPATH_DIST);
        addMapping(registry, "/webjars/**", "classpath:/META-INF/resources/webjars/");
    }

    private void addMapping(ResourceHandlerRegistry registry, String pattern, String path) {
        if (!registry.hasMappingForPattern(pattern)) {
            registry.addResourceHandler(pattern).addResourceLocations(path);
        }
    }

    @Bean
    public InternalResourceViewResolver internalViewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/dist/");
        viewResolver.setSuffix(".html");
        viewResolver.setOrder(1);
        return viewResolver;
    }

}
