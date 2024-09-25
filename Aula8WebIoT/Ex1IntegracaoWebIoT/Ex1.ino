
#include <SPI.h> //INCLUSÃO DE BIBLIOTECA
#include <dht.h> //Biblioteca do sensor de temperatura

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Arduino_JSON.h>

const char* ssid = "NomeDaRede";
const char* password = "SenhaDaRede";

const int pinoDHT11 = D2; //PINO ANALÓGICO UTILIZADO PELO DHT11
dht DHT; //VARIÁVEL DO TIPO DHT

void setup() {
  Serial.begin(9600); //INICIALIZA A SERIAL
  Serial.print("Vai comecar a impressao \n");

  //Modulo wifi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Rede WiFi: ");
  Serial.println(ssid);
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
  delay(100);
}

void loop() {
  DHT.read11(pinoDHT11); //LÊ AS INFORMAÇÕES DO SENSOR
  Serial.print("Umidade: "); //IMPRIME O TEXTO NA SERIAL
  Serial.print(DHT.humidity); //IMPRIME NA SERIAL O VALOR DE UMIDADE MEDIDO
  Serial.print("%"); //ESCREVE O TEXTO EM SEGUIDA
  Serial.print(" / Temperatura: "); //IMPRIME O TEXTO NA SERIAL
  Serial.print(DHT.temperature, 0); //IMPRIME NA SERIAL O VALOR DE UMIDADE MEDIDO E REMOVE A PARTE DECIMAL
  Serial.println("*C"); //IMPRIME O TEXTO NA SERIAL 
  int temperaturaFinal = DHT.temperature;

  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;
    String serverName = "http://192.168.1.7:3000/temperatura?temp=";
    serverName.concat(temperaturaFinal);
    Serial.println(serverName);
    http.begin(client, serverName);
    int httpCode = http.GET();
    Serial.println(httpCode);    
    Serial.printf(http.errorToString(httpCode).c_str());
    String payload = "{}"; 
    if (httpCode>0) {
      payload = http.getString();
    }
    Serial.println(payload);
    http.end();
  }

  delay(10000);
}