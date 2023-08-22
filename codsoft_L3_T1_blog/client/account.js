const accountLeft = document.querySelector(".account-left");
const icon = document.querySelector(".options-list-icon");


icon.addEventListener("click", () => {
    if(!icon.children[0].classList.contains("display-none")){
        accountLeft.style.translate = "0 0";
        icon.children[0].classList.add("display-none");
        icon.children[1].classList.remove("display-none");
    }
    else{
        accountLeft.style.translate = "-100% 0";
        icon.children[0].classList.remove("display-none");
        icon.children[1].classList.add("display-none");
    }
})