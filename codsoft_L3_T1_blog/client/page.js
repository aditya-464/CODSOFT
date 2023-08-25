const pagesSection = document.querySelector(".pages-section");
const homeInnerDiv = document.querySelector(".home-inner-div");
const allBlogIntroduction = document.querySelector(".all-blogs-introduction");
const myBlogIntroduction = document.querySelector(".my-blogs-introduction");


const homeInnerDivHt = homeInnerDiv.getBoundingClientRect().height;
allBlogIntroduction.style.height = `${homeInnerDivHt-navHeight}`+"px";
myBlogIntroduction.style.height = `${homeInnerDivHt-navHeight}`+"px";


pagesSection.style.marginTop = `${navHeight}`+"px";