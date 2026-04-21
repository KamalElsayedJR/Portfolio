function toggleText(button) {
    const card = button.parentElement;
    const shortText = card.querySelector(".short-text");
    const fullText = card.querySelector(".full-text");

    if (fullText.style.display === "block") {
        fullText.style.display = "none";
        shortText.style.display = "block";
        button.innerText = "Read More";
    } else {
        fullText.style.display = "block";
        shortText.style.display = "none";
        button.innerText = "Show Less";
    }
}
// 
emailjs.init("6yByyHO3fQxk0ECJM");

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.style.color = "#00aaff";
    message.innerText = "Sending...";

    emailjs.sendForm(
        "service_22rmr1k",
        "template_9wkt71u",
        this
    )
        .then(() => {
            message.style.color = "#00aaff";
            message.innerText = "Message sent successfully!";

            form.reset();
        })
        .catch(() => {
            message.style.color = "red";
            message.innerText = "Failed to send message.";
        });
});