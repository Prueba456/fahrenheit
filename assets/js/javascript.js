var convertirCelcius1 = document.getElementById('convertirCelcius');
var convertirFarenheit1 = document.getElementById('convertirFarenheit');
var farenheit1 = document.getElementById('farenheit');
var celcius1= document.getElementById('celcius');

convertirCelcius1.onclick = function() {
celcius1.value= (farenheit1.value - 32)*5/9;
};
convertirFarenheit1.onclick = function() {
farenheit1.value = (9/5)*celcius1.value + 32;
};
