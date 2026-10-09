ICT251 Activity 3: Interactive Personal Web Portfolio
Live link: https://liambamufaya-static-site.onrender.com

Student Name: Liamba Mufaya


Course: ICT251 Web Technologies

Institution: Mulungushi University (School of Engineering and Technology)

📌 Project Overview

This project is an enhanced, interactive personal portfolio website designed and developed for ICT251 Web Technologies Activity 3. Building upon the structural foundation from Activity 2, this website incorporates modern HTML5 semantic elements, responsive CSS styling, and client-side JavaScript features for interactive user engagement.

The site is hosted live as a static site via Render connected directly to GitHub.

🚀 Live Demo & Source Code

Live Website URL: https://your-app-name.onrender.com

GitHub Repository: https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME

✨ JavaScript Features Implemented

1. Contact Form Validation & Preview (Compulsory)

Description: Intercepts default form submission using event.preventDefault() to perform client-side validation.

Validation Rules:

Rejects whitespace-only inputs for Name and Message fields.

Validates standard email address formats using Regular Expressions (Regex).

Feedback & Security: Displays real-time error messages beneath relevant fields. On successful validation, displays a local summary preview using textContent for secure DOM insertion, confirming local validation with the disclaimer: "Browser demonstration only: Your data was validated successfully locally, but no message was actually sent."

2. Theme Switcher (Light / Dark Mode)

Description: Allows visitors to switch between Light Mode and Dark Mode.

Implementation: Toggles a data-theme="dark" attribute on the root HTML element, dynamically updating CSS variables for colors, background contrast, and button highlights while ensuring proper legibility.

3. Interactive Photo Gallery Viewer

Description: Enables users to browse through photo portfolio items using Next and Previous navigation buttons.

Implementation: Uses an array of image objects storing file paths, alternative text, and captions. Updates the image src, alt, caption text, and counter indicator (Photo X of Y) on click, cycling through boundary conditions gracefully.

4. Skills & Projects Search Filter

Description: Allows users to filter the list of skills and projects dynamically as they type into a search input.

Implementation: Evaluates real-time text input against the dataset of skills, hiding non-matching items and displaying an informative message when no matching skills are found. Includes a Reset Filter button to restore full view.

📁 Directory Structure

portfolio/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # External stylesheet (Flexbox, Grid, Responsive Design)
├── js/
│   └── script.js       # Core JavaScript logic & event listeners
├── images/             # Image assets (RAM stick, cube, aloe plant)
├── videos/             # Video and audio media files
└── README.md           # Project documentation


🧪 Local Testing Instructions

Clone the Repository:

git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git


Run Locally:

Open the project folder in Visual Studio Code.

Right-click index.html and select Open with Live Server.

Test Features:

Test the Theme Switcher button in the header.

Filter skills using the input field in the Skills section.

Navigate photos using the Previous and Next buttons in the Gallery section.

Submit the Contact Form with invalid email addresses or empty/space-only fields to check validation errors, then fill in valid data to test local preview generation.

🛠️ Deployment Instructions (Render)

Connect your GitHub repository to Render.

Create a new Static Site.

Use the following settings:

Root Directory: (Leave blank)

Build Command: echo "No build required"

Publish Directory: .

Auto Deploy: Enabled for main branch.