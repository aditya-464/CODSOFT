const contactSection = document.querySelector(".contact-section");
const contactBtn = document.querySelector(".contact-section .contact-btn .btn");
const contactError = document.querySelector(".contact-section .error-message");

contactSection.style.height = `${homeInnerDivHt - navHeight + 1}` + "px";
contactSection.style.marginTop = `${navHeight}` + "px";



contactBtn.addEventListener("click", async () => {
    const contactEmail = document.querySelector(".contact-section #contact-email")
    const contactMessage = document.querySelector(".contact-section #contact-message")

    const response = await fetch("http://127.0.0.1:3300/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": contactEmail.value.trim(),
            "message": contactMessage.value.trim(),
        }),
    });

    const data = await response.json();
    if (response.status === 200) {
        contactEmail.value = "";
        contactMessage.value = "";

        contactError.style.color = "green";
        contactError.textContent = `${data.message}`;
        contactError.style.visibility = "visible";

        setTimeout(() => {
            contactError.style.visibility = "hidden";
            contactError.textContent = "Error";
            contactError.style.color = "red";
        }, 5000);
    }
    else if (response.status === 500) {
        console.log(data.error);
        contactError.textContent = "Error occured!";
        contactError.style.visibility = "visible";
        setTimeout(() => {
            contactError.style.visibility = "hidden";
            contactError.textContent = "Error";
        }, 5000);
    }
    else {
        contactError.textContent = `${data.message}`;
        contactError.style.visibility = "visible";
        setTimeout(() => {
            contactError.style.visibility = "hidden";
            contactError.textContent = "Error";
        }, 5000);
    }
})


