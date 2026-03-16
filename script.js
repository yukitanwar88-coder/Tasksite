// For Firebase JS SDK v7.20.0 and lateasurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzThcPotqm7zcrFOztP-WFAJnqrNADgic",
  authDomain: "earning-website-ab6c2.firebaseapp.com",
  projectId: "earning-website-ab6c2",
  storageBucket: "earning-website-ab6c2.firebasestorage.app",
  messagingSenderId: "680432545165",
  appId: "1:680432545165:web:fc14df9b9882636668a1c4",
  measurementId: "G-TPFVKEJ3JV"
};import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const app = initializeApp(firebaseConfig);
function signup(){
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
localStorage.setItem("user",email)
localStorage.setItem("pass",pass)
localStorage.setItem("wallet",0)
alert("Signup Success")
window.location="index.html"
}
function login(){
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
if(email==localStorage.getItem("user") && pass==localStorage.getItem("pass")){
window.location="dashboard.html"
}else{
alert("Wrong login")
}
}
function earnTask(){
let wallet=parseInt(localStorage.getItem("wallet"))
wallet+=5
localStorage.setItem("wallet",wallet)
alert("Task completed +5₹")
}
function watchAd(){
let wallet=parseInt(localStorage.getItem("wallet"))
wallet+=2
localStorage.setItem("wallet",wallet)
alert("Ad watched +2₹")
}
function loadWallet(){
document.getElementById("money").innerText=localStorage.getItem("wallet")
}
function withdraw(){
let amount=document.getElementById("amount").value
let wallet=parseInt(localStorage.getItem("wallet"))
if(amount>wallet){
alert("Not enough balance")
}else{
wallet-=amount
localStorage.setItem("wallet",wallet)
alert("Withdraw request sent")
}
}