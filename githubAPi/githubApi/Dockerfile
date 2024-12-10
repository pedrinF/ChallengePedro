# Use Java 21 as the base image
FROM openjdk:21

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o jar da aplicação para o diretório de trabalho do container
COPY target/buildrun-como-consumir-api-do-github-0.0.1-SNAPSHOT.jar buildrun-como-consumir-api-do-github-0.0.1-SNAPSHOT.jar

# Exponha a porta em que a aplicação será executada
EXPOSE 8080

# Set the entry point to run the native binary
ENTRYPOINT ["java", "-jar", "buildrun-como-consumir-api-do-github-0.0.1-SNAPSHOT.jar"]