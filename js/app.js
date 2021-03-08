'use strict';

let branchs = ['Seattle :', 'Tokyo :', 'Dubai  :', 'Paris  :', 'Lima  :'];

function Cookies(minCust,maxCust,avgSaledCookie){
  this.avgSaledCookie = avgSaledCookie;
  this.min = minCust;
  this.max = maxCust;
  this.getRandCookPerHour = function(){
    let rand = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;},
  this.storInArray = function(){
    let array = [];
    array[0] = '';
    for (let i = 1 ; i <= 15; i++ ){
      array[i] = this.getRandCookPerHour();
      array[15] += array[i];}
    return array;
  };}
let town = [];
town[0] = new Cookies(23,65,6.3);
town[1] = new Cookies(3,24,1.2);
town[2] = new Cookies(11,38,3.7);
town[3] = new Cookies(20,38,2.3);
town[4] = new Cookies(3,16,4.6);

let total = ['Total',0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let div = document.getElementById('table');
let table= document.createElement('table');
let hours = [];
hours[0]='     ';
for (let i=1; i<15;i++){
  hours[i]=i+5+':00  ';}
let heading = [];
for (let i=0; i<15;i++){
  heading[i]=document.createElement('th');}
for (let i = 0; i<15; i++){
  heading[i].innerText= hours[i];
  table.appendChild(heading[i]);}
let trr = document.createElement('tr');
table.appendChild(trr);
div.appendChild(table);

for (let i = 0 ; i < town.length ; i++ ){
  let storedData = town[i].storInArray();
  storedData[0] = branchs[i];
  let data1 = [];
  for (let i=0; i<15;i++){
    data1[i] = document.createElement('td');}
  for (let i = 0; i<15; i++){
    total[i+1] += storedData[i+1];
    data1[i].innerText= storedData[i];
    table.appendChild(data1[i]);}
  let trr = document.createElement('tr');
  table.appendChild(trr);
  div.appendChild(table);
}
for (let i = 0; i<16; i++){
  div.appendChild(table);}


let tot = [];
for (let i=0; i<15;i++){
  tot[i]=document.createElement('th');}

for (let i=0; i<15;i++){
  tot[i].innerText = total[i];
  table.appendChild(tot[i]);}

for (let i = 0; i<16; i++){
  div.appendChild(table);}
