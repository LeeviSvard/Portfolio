

function myyFunction() {
   var element = document.body;
   element.classList.toggle("rainbow");
   }

const nimi=`Leevi Svärd`; 
const ika=`17`; 
const opiskelija=true; 

if(opiskelija === true){
  console.log('olen opiskelija');
  }else if(numero === 18){
    console.log ('olen ammattilainen');
  }
console.log("Hei sivullani surffaaja, nimeni on " + nimi + " " + " ja ikäni on " + ika);
var j1 = 'Testi tepe'
var j2 = 'Salpaus Testi'
var j3 = 'Teuvo Testi'
var j4 = 'Pauli Suomalainen' 
console.log(j1.split(" ")[0]);
console.log(j2.split(" ")[0]);
console.log(j3.split(" ")[0]);
console.log(j4.split(" ")[0]);
const perhe = [ 
    {name: "Arttu", ika: "25", aikuinen:true}, 
    {name: "Reijo", ika: "24", aikuinen:true}, 
    {name: "Konsta", ika: "17", aikuinen:false}, 
    {name: "Ossi", ika: "21", aikuinen:true}, 
]; 
const perhe2 = perhe.filter(function(family){
return family.aikuinen === false;
}).map(function(family){
    return family.name});
console.log(perhe2);
const perhelapset = perhe.filter(function(family){
return family.aikuinen === true;
}).map(function(family){
    return family.name});
console.log(perhelapset);

  console.log(25 +24 +17 +21);


/*const kurssinappi = document.querySelector('.kurssinappi');
const nimiSisalto = document.querySelector('#nimi');
const postisisalto = document.querySelector('#posti');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');


kurssinappi.addEventListener('click', e => { e.preventDefault();

  if (nimiSisalto.value === '' || postisisalto.value === '') {
    virhe.classList.add('virhe')
    virhe.innerHTML = 'Täytä kaikki kentät';
    kurssinappi.style.background = 'red';
    kurssinappi.value = 'Virhe, en lisännyt tietoa.';
    setTimeout(() => virhe.innerHTML='', 3000);
    setTimeout(() => virhe.style.background= 'black', 3000);
    setTimeout(() => kurssinappi.style.background = 'rgb(245, 245, 245)', 3000);
    setTimeout(() => kurssinappi.value = 'Lisää tieto', 3000);
  }else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nimiSisalto.value} : ${asiaSisalto.value}`));
    viesti.appendChild(li);
    nimiSisalto.value = '';
    asiaSisalto.value = '';
  }
}); 