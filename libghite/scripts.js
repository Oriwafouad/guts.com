const numStars = 100; // Number of stars you want

for (let i = 0; i < numStars; i++) {
    createStar();
}

function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 2;
    const opacity = Math.random() * 0.5 + 0.3; // Varying opacity between 0.3 and 0.8

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.opacity = opacity;

    document.querySelector(".starry-background").appendChild(star);

    // Move the star vertically
    moveStar(star);
}

function moveStar(star) {
    const duration = Math.random() * 10 + 5; // Varying duration between 5 and 15 seconds
    const startY = -20; // Start just above the screen
    const targetY = window.innerHeight;

    const animate = () => {
        const currentTime = performance.now();
        const elapsed = (currentTime - startTime) / 1000;

        if (elapsed < duration) {
            const newY = startY + ((targetY - startY) * elapsed) / duration;
            star.style.top = newY + "px";
            requestAnimationFrame(animate);
        } else {
            // Reset star's position when it reaches the bottom
            star.style.top = startY + "px";
            moveStar(star); // Call moveStar recursively to continue animation
        }
    };

    const startTime = performance.now();
    animate();
}



document.addEventListener("DOMContentLoaded", function () {
    const animeCards = document.querySelectorAll(".anime-card");

    animeCards.forEach(card => {
        const videoLink = card.getAttribute("data-video");
        const watchButton = card.querySelector(".watch-button");

        watchButton.addEventListener("click", function (event) {
            event.preventDefault();
            const videoPlayer = document.createElement("video");
            videoPlayer.src = videoLink;
            videoPlayer.controls = true;
            videoPlayer.autoplay = true;

            const animeDescription = card.querySelector("p");
            animeDescription.style.display = "none";

            const watchButton = card.querySelector(".watch-button");
            watchButton.style.display = "none";

            card.appendChild(videoPlayer);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("settings-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get selected values from the form
        const selectedTheme = document.getElementById("theme").value;
        const selectedNotifications = Array.from(document.querySelectorAll('input[name="notifications"]:checked')).map(input => input.value);
        const selectedLanguage = document.getElementById("language").value;
        const selectedVideoQuality = document.getElementById("video-quality").value;
        const selectedSubtitleLanguage = document.getElementById("subtitle-language").value;

        // You can now use these values to save the user's preferences to a server or local storage
        // For demonstration purposes, let's just log the selected values
        console.log("Selected Theme:", selectedTheme);
        console.log("Selected Notifications:", selectedNotifications);
        console.log("Selected Language:", selectedLanguage);
        console.log("Selected Video Quality:", selectedVideoQuality);
        console.log("Selected Subtitle Language:", selectedSubtitleLanguage);
        
        // You can also provide visual feedback to the user that changes were saved successfully
        alert("Changes saved successfully!");
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Initialize EmailJS with your user ID
        emailjs.init("user_yourEmailJSUserID");

        // Replace "yourEmailJSServiceID" and "yourEmailJSTemplateID" with your actual EmailJS service and template IDs
        emailjs.send("yourEmailJSServiceID", "yourEmailJSTemplateID", {
            to_email: "samafouad132@gmail.com",
            from_name: form.name.value,
            from_email: form.email.value,
            message: form.message.value
        })
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Form submitted and email sent successfully!");
            form.reset();
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("There was an error sending the email. Please try again later.");
        });
    });
});