FROM openjdk:latest
WORKDIR usr/lib
EXPOSE 9094
ADD ./target/gateWayMod-0.0.1-SNAPSHOT.jar /usr/lib/gateWayMod-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","gateWayMod-0.0.1-SNAPSHOT.jar"]