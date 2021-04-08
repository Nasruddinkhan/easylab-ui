FROM openjdk:8-jdk-alpine
ADD target/easylab-ui.jar easylab-ui.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "easylab-ui.jar"]
