FROM openjdk:latest
WORKDIR usr/lib
EXPOSE 8761
ADD ./target/serverEureka-0.0.1-SNAPSHOT.jar /usr/lib/serverEureka-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","serverEureka-0.0.1-SNAPSHOT.jar"]