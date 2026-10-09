    // Wait for DOM content to load fully before executing scripts
    document.addEventListener("DOMContentLoaded", () => {
        
        /* 
        1. FEATURE 1: Theme Switcher (Light / Dark Mode) */
     
        const themeToggleBtn = document.getElementById("theme-toggle-btn");
        
        // Toggle light/dark dataset attribute on <html> element
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            if (currentTheme === "dark") {
                document.documentElement.removeAttribute("data-theme");
                themeToggleBtn.textContent = "🌙 Switch Theme";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                themeToggleBtn.textContent = "☀️ Light Mode";
            }
        });
});

// Gallery Viewer
const photos = [
        { src: "images/ramstick.jpg", alt: "RAM Stick", caption: "A close-up view of a computer RAM stick module." },
        { src: "images/cube.jpg", alt: "Rubik's Cube", caption: "A colorful solved Rubik's cube on a table." },
        { src: "images/aloe.jpg", alt: "Aloe Vera Plant", caption: "A vibrant green Aloe Vera succulent plant." }
    ];

    let currentPhotoIndex = 0;

    const galleryImg = document.getElementById("gallery-img");
    const galleryCaption = document.getElementById("gallery-caption");
    const galleryCounter = document.getElementById("gallery-counter");
    const prevPhotoBtn = document.getElementById("prev-photo-btn");
    const nextPhotoBtn = document.getElementById("next-photo-btn");

    function updateGallery() {
        const photo = photos[currentPhotoIndex];
        galleryImg.src = photo.src;
        galleryImg.alt = photo.alt;
        galleryCaption.textContent = photo.caption;
        galleryCounter.textContent = `Photo ${currentPhotoIndex + 1} of ${photos.length}`;
    }

    prevPhotoBtn.addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
        updateGallery();
    });

    nextPhotoBtn.addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
        updateGallery();
    });
    /*
  Contact Form Validation & Preview
       ======================================================== */
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const formPreview = document.getElementById("form-preview");

    // Standard email regex format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page refresh

        let isValid = true;

        // Clear previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Validate Name
        const nameVal = nameInput.value.trim();
        if (nameVal === "") {
            nameError.textContent = "Please enter your name (whitespace only is invalid).";
            isValid = false;
        }

        // Validate Email
        const emailVal = emailInput.value.trim();
        if (!emailRegex.test(emailVal)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate Message
        const messageVal = messageInput.value.trim();
        if (messageVal === "") {
            messageError.textContent = "Please enter a message (whitespace only is invalid).";
            isValid = false;
        }

        // If valid, display local preview using textContent
        if (isValid) {
            formPreview.style.display = "block";
            
            // Build elements securely without innerHTML for user inputs
            formPreview.innerHTML = ""; // Clear existing
            
            const previewHeader = document.createElement("h3");
            previewHeader.textContent = "Form Submission Preview";

            const noticePara = document.createElement("p");
            noticePara.style.fontStyle = "italic";
            noticePara.textContent = "Browser demonstration only: Your data was validated successfully locally, but no message was actually sent.";

            const namePara = document.createElement("p");
            namePara.textContent = `Name: ${nameVal}`;

            const emailPara = document.createElement("p");
            emailPara.textContent = `Email: ${emailVal}`;

            const msgPara = document.createElement("p");
            msgPara.textContent = `Message: ${messageVal}`;

            formPreview.appendChild(previewHeader);
            formPreview.appendChild(noticePara);
            formPreview.appendChild(namePara);
            formPreview.appendChild(emailPara);
            formPreview.appendChild(msgPara);

            // Optional: Reset form fields after successful preview
            contactForm.reset();
        } else {
            formPreview.style.display = "none";
        }
    });
/* ========================================================
        Skills / Projects Search Filter
       ======================================================== */
    const skillSearchInput = document.getElementById("skill-search");
    const resetFilterBtn = document.getElementById("reset-filter-btn");
    const skillCards = document.querySelectorAll(".skill-card");
    const filterMessage = document.getElementById("filter-message");

    function filterSkills() {
        const query = skillSearchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        skillCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            filterMessage.textContent = "No matching skills or projects found.";
        } else {
            filterMessage.textContent = "";
        }
    }

    skillSearchInput.addEventListener("input", filterSkills);

    resetFilterBtn.addEventListener("click", () => {
        skillSearchInput.value = "";
        filterSkills();
    });