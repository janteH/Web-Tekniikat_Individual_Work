/**
 * Haetaan elementit classilla btn.
 * Lisätty kuuntelija, 
 * joka muuttaa elementin taustaväriä, 
 * kun hiiri viedään elementin päälle
 */

let btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++ ) {
    btn[i].addEventListener("mouseover", mouseOver);
    btn[i].addEventListener("mouseout", mouseOut);

    function mouseOver() {
        btn[i].style.backgroundColor = "black";
    }
    
    function mouseOut() {
        btn[i].style.backgroundColor = "#5C5650";
    }
}