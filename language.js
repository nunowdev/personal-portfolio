// Buttons

const portugueseBtn = document.getElementById("portugueseBtn")
const englishBtn = document.getElementById("englishBtn")

// Event Listeners

portugueseBtn.addEventListener("click", togglePortuguese())


// Things to Translate


const headerpara = document.getElementsByName("headerpara");
const modaltitle = document.getElementsByName("modaltitle");
const modalpara = document.getElementsByName("modalpara");

// Portuguese Versions 

const ptHeaderPara = "Sou um <b class=\"orange">"Frontend Developer</b> apaixonado por criar aplicações Web capazes de conceder ao usuário uma boa experiência de navegação"
"<br />"
"Aqui está algo mais"
"<b class=\"orange click" "onclick=\"toggleModal()"">""acerca de mim</b>.)"


function togglePortuguese() {
    headerpara.innerHTML = JSON.stringify(ptHeaderPara)
}
