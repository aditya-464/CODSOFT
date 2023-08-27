const accountLeft = document.querySelector(".account-left");
const accountRight = document.querySelector(".account-right");
const icon = document.querySelector(".options-list-icon");
const optionsList = document.querySelector(".account-left .options-list");
const logoutContainer = document.querySelector(".account-right .logout-container");

const footerHeight = footerSection.getBoundingClientRect().height;
accountSection.style.marginTop = `${navHeight}`+"px";
accountRight.style.marginTop = `${navHeight}`+"px";
accountRight.style.height = `${homeInnerDivHt-navHeight-footerHeight}`+"px";
logoutContainer.style.paddingTop = `${0.2*homeInnerDivHt}`+"px";


icon.addEventListener("click", () => {
    if(!icon.children[0].classList.contains("display-none")){
        optionsList.style.marginTop = `${icon.getBoundingClientRect().height+10}`+"px";
        accountLeft.style.translate = "0 0";
        accountRight.style.opacity = "0.1";
        icon.children[0].classList.add("display-none");
        icon.children[1].classList.remove("display-none");
    }
    else{
        optionsList.style.marginTop = `${icon.getBoundingClientRect().height+10}`+"px";
        accountLeft.style.translate = "-120% 0";
        accountRight.style.opacity = "1";
        icon.children[0].classList.remove("display-none");
        icon.children[1].classList.add("display-none");
    }
})

// profile image option
const imgCancelBtn = document.querySelector(".profile-image-container-right .imageUpload .cancel");

imgCancelBtn.addEventListener("click", ()=>{
    const inputFile = document.querySelector(".profile-image-container-right .imageUpload input");
    const showFileName = document.querySelector(".profile-image-container-right .imageUpload .image-name");
    let emptyFile = document.createElement('input');
    emptyFile.type = 'file';
    emptyFile.classList.add("inp");
    inputFile.files = emptyFile.files;
    showFileName.textContent = "Select Image";
    imgCancelBtn.style.visibility = "hidden";
})