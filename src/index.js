import "./style.css";
console.log("Hello");

import {home} from "./content/home.js";


const parent = document.querySelector("#content");

const button1 = document.querySelector("#home>button");
const button2 = document.querySelector("#Menu>button");
const button3 = document.querySelector("#Aboutus>button");
const button4 = document.querySelector("#contact>button");


function removeAllChild(){
    parent.replaceChildren();
}

function removeDash(){
    const nav = document.querySelectorAll("nav>button");
    nav.forEach(element => {
        element.classList.remove("clicked");
        
    });

}

let event =new Event("click");


button1.addEventListener("click",function(){
    removeDash();
    button1.classList.add("clicked");
    removeAllChild();
    home.create();
});

button2.addEventListener("click",function(){
    removeDash();
    button2.classList.add("clicked");
    removeAllChild();
});

button3.addEventListener("click",function(){
    removeDash();
    button3.classList.add("clicked");
    removeAllChild();
});

button4.addEventListener("click",function(){
    removeDash();
    button4.classList.add("clicked");
    removeAllChild();
});



button1.dispatchEvent(event);