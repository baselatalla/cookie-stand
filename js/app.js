'use strict';

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSaledCookie: 6.3,
  getRandcCookPerHour: function(){
    let min = this.minCust;
    let max = this.maxCust;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;
  },
  storInArray: function(){
    let array = [];
    for (let i = 0 ; i < 14; i++ ){
      array[i] = this.getRandcCookPerHour();
    }
    array[14] = 0 ;
    for (let i = 0 ; i < 14; i++ ){
      array[14] += array[i];
    }
    return array;
  }
};

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgSaledCookie: 1.2,
  getRandcCookPerHour: function(){
    let min = this.minCust;
    let max = this.maxCust;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;
  },
  storInArray: function(){
    let array = [];
    for (let i = 0 ; i < 14; i++ ){
      array[i] = this.getRandcCookPerHour();
    }
    array[14] = 0 ;
    for (let i = 0 ; i < 14; i++ ){
      array[14] += array[i];
    }
    return array;
  }

};
let Dubai = {
  minCust: 11,
  maxCust: 38,
  avgSaledCookie: 3.7,
  getRandcCookPerHour: function(){
    let min = this.minCust;
    let max = this.maxCust;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;
  },
  storInArray: function(){
    let array = [];
    for (let i = 0 ; i < 14; i++ ){
      array[i] = this.getRandcCookPerHour();
    }
    array[14] = 0 ;
    for (let i = 0 ; i < 14; i++ ){
      array[14] += array[i];
    }
    return array;
  }};

let paris = {
  minCust: 20,
  maxCust: 38,
  avgSaledCookie: 2.3,
  getRandcCookPerHour: function(){
    let min = this.minCust;
    let max = this.maxCust;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;
  },
  storInArray: function(){
    let array = [];
    for (let i = 0 ; i < 14; i++ ){
      array[i] = this.getRandcCookPerHour();
    }
    array[14] = 0 ;
    for (let i = 0 ; i < 14; i++ ){
      array[14] += array[i];
    }
    return array;
  }
};

let lima = {
  minCust: 3,
  maxCust: 16,
  avgSaledCookie: 4.6,
  getRandcCookPerHour: function(){
    let min = this.minCust;
    let max = this.maxCust;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;
  },
  storInArray: function(){
    let array = [];
    for (let i = 0 ; i < 14; i++ ){
      array[i] = this.getRandcCookPerHour();
    }
    array[14] = 0 ;
    for (let i = 0 ; i < 14; i++ ){
      array[14] += array[i];
    }
    return array;
  }
};

let main = document.getElementById('sales');

//---------------------- location 1 -------------------------------------

let location1 = document.createElement('h2');
location1.innerText = 'Seattle Branch :';
let unorderedList1 = document.createElement('ul');
let hours = [];
for (let i=0; i<14;i++){
  hours[i]=i+6+':00  : ';}
let seatt = [];
for (let i=0; i<15;i++){
  seatt[i]=document.createElement('li');}
let x = seattle.storInArray();
for (let i = 0; i<15; i++){
  seatt[i].innerText= hours[i]+x[i]+' cookies';}
for (let i = 0; i<14; i++){
  unorderedList1.appendChild(seatt[i]);}
seatt[14].innerText= 'Total : '+x[14]+' cookies';
unorderedList1.appendChild(seatt[14]);
main.appendChild(location1);
main.appendChild(unorderedList1);

//---------------------- location 2 -------------------------------------
let location2 = document.createElement('h2');

location2.innerText = 'TOKYO Branch :';
let unorderedList2 = document.createElement('ul');
let toky = [];
for (let i=0; i<15;i++){
  toky[i]=document.createElement('li');}
let x1 = tokyo.storInArray();
for (let i = 0; i<15; i++){
  toky[i].innerText= hours[i]+x1[i]+' cookies';}
for (let i = 0; i<14; i++){
  unorderedList2.appendChild(toky[i]);}
toky[14].innerText= 'Total : '+x1[14]+' cookies';
unorderedList2.appendChild(toky[14]);
main.appendChild(location2);
main.appendChild(unorderedList2);

//---------------------- location 3 -------------------------------------

let location3 = document.createElement('h2');
location3.innerText = 'Dubai Branch :';
let unorderedList3 = document.createElement('ul');

let dub = [];
for (let i=0; i<15;i++){
  dub[i]=document.createElement('li');}
let x2 = Dubai.storInArray();
for (let i = 0; i<15; i++){
  dub[i].innerText= hours[i]+x2[i]+' cookies';}
for (let i = 0; i<14; i++){
  unorderedList3.appendChild(dub[i]);}
dub[14].innerText= 'Total : '+x2[14]+' cookies';
unorderedList3.appendChild(dub[14]);
main.appendChild(location3);
main.appendChild(unorderedList3);

//---------------------- location 3 -------------------------------------

let location4 = document.createElement('h2');
location4.innerText = 'Paris Branch :';
let unorderedList4 = document.createElement('ul');
let pari = [];
for (let i=0; i<15;i++){
  pari[i]=document.createElement('li');
}
let x3 = paris.storInArray();
for (let i = 0; i<15; i++){
  pari[i].innerText= hours[i]+x3[i]+' cookies';
}
for (let i = 0; i<14; i++){
  unorderedList4.appendChild(pari[i]);
}
pari[14].innerText= 'Total : '+x3[14]+' cookies';
unorderedList4.appendChild(pari[14]);
main.appendChild(location4);
main.appendChild(unorderedList4);

//---------------------- location 5 -------------------------------------

let location5 = document.createElement('h2');
location5.innerText = 'lima Branch :';
let unorderedList5 = document.createElement('ul');
let lim = [];
for (let i=0; i<15;i++){
  lim[i]=document.createElement('li');}
let x4 = lima.storInArray();
for (let i = 0; i<15; i++){
  lim[i].innerText= hours[i]+x4[i]+' cookies';}
for (let i = 0; i<14; i++){
  unorderedList5.appendChild(lim[i]);}
lim[14].innerText= 'Total : '+x4[14]+' cookies';
unorderedList5.appendChild(lim[14]);
main.appendChild(location5);
main.appendChild(unorderedList5);

