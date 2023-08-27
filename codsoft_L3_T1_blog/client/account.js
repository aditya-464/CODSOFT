const accountLeft = document.querySelector(".account-left");
const accountRight = document.querySelector(".account-right");
const icon = document.querySelector(".options-list-icon");
const optionsList = document.querySelector(".account-left .options-list");
const logoutContainer = document.querySelector(".account-right .logout-container");

const footerHeight = footerSection.getBoundingClientRect().height;
accountSection.style.marginTop = `${navHeight}` + "px";
accountRight.style.marginTop = `${navHeight}` + "px";
accountRight.style.height = `${homeInnerDivHt - navHeight - footerHeight}` + "px";
logoutContainer.style.paddingTop = `${0.2 * homeInnerDivHt}` + "px";


icon.addEventListener("click", () => {
    if (!icon.children[0].classList.contains("display-none")) {
        optionsList.style.marginTop = `${icon.getBoundingClientRect().height + 10}` + "px";
        accountLeft.style.translate = "0 0";
        accountRight.style.opacity = "0.1";
        icon.children[0].classList.add("display-none");
        icon.children[1].classList.remove("display-none");
    }
    else {
        optionsList.style.marginTop = `${icon.getBoundingClientRect().height + 10}` + "px";
        accountLeft.style.translate = "-120% 0";
        accountRight.style.opacity = "1";
        icon.children[0].classList.remove("display-none");
        icon.children[1].classList.add("display-none");
    }
})

// profile image option
const imgCancelBtn = document.querySelector(".profile-image-container-right .imageUpload .cancel");

imgCancelBtn.addEventListener("click", () => {
    const inputFile = document.querySelector(".profile-image-container-right .imageUpload input");
    const showFileName = document.querySelector(".profile-image-container-right .imageUpload .image-name");
    let emptyFile = document.createElement('input');
    emptyFile.type = 'file';
    emptyFile.classList.add("inp");
    inputFile.files = emptyFile.files;
    showFileName.textContent = "Select Image";
    imgCancelBtn.style.visibility = "hidden";
});

// user details option
const saveEditBtn = document.querySelector(".user-details-container .btn-field .save-btn");
const cancelBtn = document.querySelector(".user-details-container .btn-field .cancel-btn");

const inputFields = document.querySelectorAll(".user-details-container .user-details-field input");

saveEditBtn.addEventListener("click", () => {
    if (saveEditBtn.classList.contains("it-is-edit")) {
        saveEditBtn.classList.remove("it-is-edit");
        saveEditBtn.textContent = "Save";
        cancelBtn.style.visibility = "visible";

        for(let i = 0; i<inputFields.length; i++){
            inputFields[i].style.pointerEvents = "all";
        }
    }
    else {
        // Save edited user details
    }
});

cancelBtn.addEventListener("click", () => {
    saveEditBtn.classList.add("it-is-edit");
    cancelBtn.style.visibility = "hidden";
    saveEditBtn.textContent = "Edit";

    for(let i = 0; i<inputFields.length; i++){
        inputFields[i].value = "";        
        inputFields[i].style.pointerEvents = "none";
    }
})


// credentials option
const credentialsCancelBtn = document.querySelector(".credentials-container .credentials-btn-grp .cancel");
const credentialsSaveEditBtn = document.querySelector(".credentials-container .credentials-btn-grp .save");

const credentailsInputFields = document.querySelectorAll(".credentials-container .credential-field input");

credentialsSaveEditBtn.addEventListener("click", () => {
    if (credentialsSaveEditBtn.classList.contains("it-is-edit")) {
        credentialsSaveEditBtn.classList.remove("it-is-edit");
        credentialsSaveEditBtn.textContent = "Save";
        credentialsCancelBtn.style.visibility = "visible";

        for(let i = 0; i<credentailsInputFields.length; i++){
            credentailsInputFields[i].style.pointerEvents = "all";
        }
    }
    else {
        // Save edited credentials
    }
});

credentialsCancelBtn.addEventListener("click", () => {
    credentialsSaveEditBtn.classList.add("it-is-edit");
    credentialsCancelBtn.style.visibility = "hidden";
    credentialsSaveEditBtn.textContent = "Edit";

    for(let i = 0; i<credentailsInputFields.length; i++){
        credentailsInputFields[i].value = "";        
        credentailsInputFields[i].style.pointerEvents = "none";
    }
})


