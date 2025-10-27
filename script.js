

// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ----------- SMOOTH SCROLLING FOR NAV LINKS -----------
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    }

    // ----------- EMAIL TOGGLE & COPY FUNCTIONALITY -----------
    const emailBtn = document.getElementById("email-btn");
    const emailContainer = document.getElementById("email-info-container");
    const emailText = document.getElementById("email-text");
    const copyMessage = document.getElementById("copy-message");

    if (emailBtn && emailContainer && emailText) {

        // Toggle visibility when clicking "Email Me"
        emailBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isVisible = emailContainer.style.display === "block";
            emailContainer.style.display = isVisible ? "none" : "block";

            // Optional: change button text for clarity
            emailBtn.textContent = isVisible ? "Email Me" : "Hide Email";
        });

        // Copy email when clicking the email field
        emailText.addEventListener("click", () => {
            navigator.clipboard.writeText(emailText.value).then(() => {
                copyMessage.textContent = "✅ Email copied to clipboard!";
                setTimeout(() => {
                    copyMessage.textContent = "(Click the email address above to copy)";
                }, 2500);
            }).catch(err => {
                console.error("Copy failed: ", err);
            });
        });
    }

    // ----------- DEBUG MESSAGE -----------
    console.log("Portfolio script loaded successfully. Welcome!");
});




// // script.js

// // Wait for the DOM to be fully loaded before running the script
// document.addEventListener('DOMContentLoaded', () => {

//     // Smooth scrolling for navigation links
//     // This adds a nice, non-AI-like polish to the site
//     const links = document.querySelectorAll('nav ul li a');

//     for (const link of links) {
//         link.addEventListener('click', (event) => {
//             // Prevent the default instant jump
//             event.preventDefault();

//             // Get the ID of the section to scroll to (e.g., "#about")
//             const targetId = link.getAttribute('href');
//             const targetSection = document.querySelector(targetId);

//             if (targetSection) {
//                 // Scroll smoothly to the target section
//                 window.scrollTo({
//                     top: targetSection.offsetTop - 70, // Adjust offset for sticky header
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     }

//     // A simple console log to confirm the script is working
//     console.log("Portfolio script loaded. Welcome!");
// });


