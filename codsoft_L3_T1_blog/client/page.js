const pagesSection = document.querySelector(".pages-section");
const homeInnerDiv = document.querySelector(".home-inner-div");
const allBlogIntroduction = document.querySelector(".all-blogs-introduction");

const homeInnerDivHt = homeInnerDiv.getBoundingClientRect().height;
allBlogIntroduction.style.height = `${homeInnerDivHt-navHeight}`+"px";

pagesSection.style.marginTop = `${navHeight}`+"px";