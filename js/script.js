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