const { Given, When, Then, setDefaultTimeout } = require('cucumber');
var request = require('request');
const assert = require('assert');
const fetch = require("node-fetch");

let ruta;
let resultado = {};
let palabra;

Given('yo entro a la pagina',function() {
    ruta = 'https://restcountries.eu';
});

When('Hago una llamada a la API usando una promesa',function() {
    fetch(ruta+'/rest/v2/name/colombia')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            resultado = myJson[0]
            palabra = resultado['region'].toString()
        });
});

Then('Me tiene que mostrar la region {string}',function (input){
   fetch(ruta+'/rest/v2/name/colombia')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            resultado = myJson[0]
            palabra = resultado['region'].toString()
            console.log(palabra)
            assert.equal(palabra, input); 
        });
});