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

