'use strict';

function Cookies(branch,minCust,maxCust,avgSaledCookie){
  this.avgSaledCookie = avgSaledCookie;
  this.min = minCust;
  this.max = maxCust;
  this.branch = branch;
  this.getRandCookPerHour = function(){
    let rand = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    let avg = this.avgSaledCookie;
    let numOfCookies = Math.floor(avg * rand);
    return numOfCookies;},
  this.storInArray = function(){
    let array = [];
    array[0] = '';
    array[15] = 0;
    for (let i = 1 ; i < 15; i++ ){
      array[i] = this.getRandCookPerHour();
      array[15] += array[i];}
    return array;
  };}
let town = [];
town[0] = new Cookies('Seattle ',23,65,6.3);
town[1] = new Cookies('Tokyo ',3,24,1.2);
town[2] = new Cookies('Dubai ',11,38,3.7);
town[3] = new Cookies('Paris ',20,38,2.3);
town[4] = new Cookies('Lima ',3,16,4.6);

let total = ['Total',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let div = document.getElementById('table');
let table= document.createElement('table');
let hours = [];
hours[0]='     ';
hours[15]='Daily Location Total';
for (let i=1; i<15;i++){
  hours[i]=i+5+':00  ';}
let heading = [];
for (let i=0; i<16;i++){
  heading[i]=document.createElement('th');}
for (let i = 0; i<16; i++){
  heading[i].innerText= hours[i];
  table.appendChild(heading[i]);}
let trr = document.createElement('tr');
table.appendChild(trr);
div.appendChild(table);

for (let i = 0 ; i < town.length ; i++ ){
  let storedData = town[i].storInArray();
  storedData[0] = town[i].branch;
  let data1 = [];
  for (let i=0; i<16;i++){
    data1[i] = document.createElement('td');}
  for (let i = 0; i<16; i++){
    total[i+1] += storedData[i+1];
    data1[i].innerText= storedData[i];
    table.appendChild(data1[i]);}
  let trr = document.createElement('tr');
  table.appendChild(trr);
  div.appendChild(table);}

let totoftot = [];
for (let i=0; i<16;i++){
  totoftot[i]=document.createElement('th');}
console.log(total[15]);
for (let i=0; i<16;i++){
  totoftot[i].innerText = total[i];
  table.appendChild(totoftot[i]);}
for (let i = 0; i<16; i++){
  div.appendChild(table);}
