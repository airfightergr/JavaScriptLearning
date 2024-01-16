// get elements from html
let pageTitle = document.title;
console.log('%s', pageTitle);

const inputValues = [document.getElementById("fname"), 
                    document.getElementById("lname"),
                    document.getElementById("subj"),
                    document.getElementById("mess")];


let countryElem = document.getElementById("country");
let countryValue = countryElem.value;
let country = countryElem.options[countryElem.selectedIndex].text;


console.log('Name: %s %s\nCountry: %s\nSubject: %s\nMessage:', inputValues[0].value, inputValues[1].value, country, inputValues[2].value, inputValues[3].value);

document.cookie = inputValues[0].value;
document.cookie = inputValues[1].value;
document.cookie = country;
document.cookie = inputValues[2].value;
document.cookie = inputValues[3].value;



