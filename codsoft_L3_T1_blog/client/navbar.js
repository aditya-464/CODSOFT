const navbar = document.querySelector(".navbar-outer");
const heroSections = document.querySelectorAll(".hero-section");
const aboutSections = document.querySelectorAll(".about-section");
const accountSection = document.querySelector(".account-section");
const pagesSection = document.querySelector(".pages-section");
const contactSection = document.querySelector(".contact-section");
const footerSection = document.querySelector(".footer-section");

// navbar tab btns
const homeTabBtn = document.querySelector("#home-tab-btn");
const aboutTabBtn = document.querySelector("#about-tab-btn");
const pagesTabBtn = document.querySelector("#pages-tab-btn");
const contactTabBtn = document.querySelector("#contact-tab-btn");
const accountTabBtn = document.querySelector("#account-tab-btn");
const optionsListBtn  = document.querySelector(".options-list-icon");

const changeDisplayTab = (val) => {
    switch (val) {
        case 1:
            // Hero sections
            if (heroSections[0].classList.contains("display-none")) {
                if(!optionsListBtn.classList.contains("display-none")){
                    optionsListBtn.classList.add("display-none");
                }
                footerSection.style.visibility = "hidden";
                if (!aboutSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        aboutSections[i].classList.add("display-none");
                    }
                }
                if (!accountSection.classList.contains("display-none")) {
                    accountSection.classList.add("display-none");
                }
                if (!pagesSection.classList.contains("display-none")) {
                    pagesSection.classList.add("display-none");
                }
                if (!contactSection.classList.contains("display-none")) {
                    contactSection.classList.add("display-none");
                }

                // show hero sections
                for (let i = 0; i < 3; i++) {
                    heroSections[i].classList.remove("display-none");
                }
                footerSection.style.visibility = "visible";
            }

            break;

        case 2:
            // About section
            if (aboutSections[0].classList.contains("display-none")) {
                if(!optionsListBtn.classList.contains("display-none")){
                    optionsListBtn.classList.add("display-none");
                }
                footerSection.style.visibility = "hidden";
                if (!heroSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        heroSections[i].classList.add("display-none");
                    }
                }
                if (!accountSection.classList.contains("display-none")) {
                    accountSection.classList.add("display-none");
                }
                if (!pagesSection.classList.contains("display-none")) {
                    pagesSection.classList.add("display-none");
                }
                if (!contactSection.classList.contains("display-none")) {
                    contactSection.classList.add("display-none");
                }

                // show about sections
                for (let i = 0; i < 3; i++) {
                    aboutSections[i].classList.remove("display-none");
                }
                footerSection.style.visibility = "visible";
            }

            break;
        case 3:
            // Pages section
            if (pagesSection.classList.contains("display-none")) {
                if(!optionsListBtn.classList.contains("display-none")){
                    optionsListBtn.classList.add("display-none");
                }
                footerSection.style.visibility = "hidden";
                if (!heroSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        heroSections[i].classList.add("display-none");
                    }
                }
                if (!aboutSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        aboutSections[i].classList.add("display-none");
                    }
                }
                if (!accountSection.classList.contains("display-none")) {
                    accountSection.classList.add("display-none");
                }
                if (!contactSection.classList.contains("display-none")) {
                    contactSection.classList.add("display-none");
                }
                
                // show pages sections
                pagesSection.classList.remove("display-none");
                footerSection.style.visibility = "visible";
            }

            break;
        case 4:
            // Contact section
            if (contactSection.classList.contains("display-none")) {
                if(!optionsListBtn.classList.contains("display-none")){
                    optionsListBtn.classList.add("display-none");
                }
                footerSection.style.visibility = "hidden";
                if (!heroSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        heroSections[i].classList.add("display-none");
                    }
                }
                if (!aboutSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        aboutSections[i].classList.add("display-none");
                    }
                }
                if (!accountSection.classList.contains("display-none")) {
                    accountSection.classList.add("display-none");
                }
                if (!pagesSection.classList.contains("display-none")) {
                    pagesSection.classList.add("display-none");
                }
                
                // show contact sections
                contactSection.classList.remove("display-none");
                footerSection.style.visibility = "visible";
            }

            break;
        case 5:
            // Account section
            if (accountSection.classList.contains("display-none")) {
                footerSection.style.visibility = "hidden";
                if (!heroSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        heroSections[i].classList.add("display-none");
                    }
                }
                if (!aboutSections[0].classList.contains("display-none")) {
                    for (let i = 0; i < 3; i++) {
                        aboutSections[i].classList.add("display-none");
                    }
                }
                if (!contactSection.classList.contains("display-none")) {
                    contactSection.classList.add("display-none");
                }
                if (!pagesSection.classList.contains("display-none")) {
                    pagesSection.classList.add("display-none");
                }
                
                // show account sections
                accountSection.classList.remove("display-none");
                optionsListBtn.classList.remove("display-none");
                footerSection.style.visibility = "visible";
            }

            break;

        default:
            break;
    }
};

homeTabBtn.addEventListener("click", ()=>{
    changeDisplayTab(1);
});
aboutTabBtn.addEventListener("click",()=>{
    changeDisplayTab(2);
});
pagesTabBtn.addEventListener("click", ()=>{
    changeDisplayTab(3);
});
contactTabBtn.addEventListener("click", ()=>{
    changeDisplayTab(4);
});
accountTabBtn.addEventListener("click", ()=>{
    changeDisplayTab(5);
});



let navHeight = navbar.getBoundingClientRect().height;
