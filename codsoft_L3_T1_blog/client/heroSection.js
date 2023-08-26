const homeInnerDiv = document.querySelector(".home-inner-div");
// const navbar = document.querySelector(".navbar-outer");
// const heroSections = document.querySelectorAll(".hero-section");
const ques1 = document.querySelector(".ques1");
const ques2 = document.querySelector(".ques2");


// let navHeight = navbar.getBoundingClientRect().height;
const homeInnerDivHt = homeInnerDiv.getBoundingClientRect().height;
ques1.style.height = `${homeInnerDivHt-navHeight+1}`+"px";
ques2.style.height = `${homeInnerDivHt-navHeight+1}`+"px";


for(let i = 0; i<3; i++){
    heroSections[i].style.height = `${homeInnerDivHt-navHeight+1}`+"px";

    if(i==0){
        heroSections[i].style.marginTop = `${navHeight}`+"px";
    }
}