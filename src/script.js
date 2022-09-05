/*function say() {
    let txt = document.createElement("textarea");
    txt.value = "Welcome to Whizzy Hub, I'm Mark"
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = txt.value;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}*/

//Carousel
var slideIndex = 1; 
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(n == undefined) {
        n = ++slideIndex
    }
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

flag = 0;
function menu() {
    if(flag == 0) {
        document.querySelector(".dd-content").style.height = "240px";
        flag = 1;
    }
    else {
        document.querySelector(".dd-content").style.height = "0px";
        flag = 0;
    }
}