

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

