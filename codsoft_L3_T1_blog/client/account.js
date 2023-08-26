const accountLeft = document.querySelector(".account-left");
const accountRight = document.querySelector(".account-right");
// const navbar = document.querySelector(".navbar-outer");
const icon = document.querySelector(".options-list-icon");

// Setting margin-top for account section
// let navHeight = navbar.getBoundingClientRect().height;
const accountSection = document.querySelector(".account-section");
accountSection.style.marginTop = `${navHeight}`+"px";
accountRight.style.paddingTop = `${navHeight}`+"px";


icon.addEventListener("click", () => {
    if(!icon.children[0].classList.contains("display-none")){
        accountLeft.style.translate = "0 0";
        accountRight.style.opacity = "0.1";
        icon.children[0].classList.add("display-none");
        icon.children[1].classList.remove("display-none");
    }
    else{
        accountLeft.style.translate = "-120% 0";
        accountRight.style.opacity = "1";
        icon.children[0].classList.remove("display-none");
        icon.children[1].classList.add("display-none");
    }
})