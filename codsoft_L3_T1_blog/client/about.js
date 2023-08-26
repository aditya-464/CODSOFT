const aboutSections = document.querySelectorAll(".about-section");

for(let i = 0; i<3; i++){
    aboutSections[i].style.height = `${homeInnerDivHt-navHeight+1}`+"px";

    if(i==0){
        aboutSections[i].style.marginTop = `${navHeight}`+"px";
    }
}