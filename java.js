// 1. RUNS INSTANTLY: Blocks the page from loading light mode if dark mode is active
(function preBootTheme() {
    let savedTheme = localStorage.getItem('furina-theme');
    
    // If no preference is saved yet, lock it to ousia
    if (!savedTheme) {
        savedTheme = 'ousia';
        localStorage.setItem('furina-theme', 'ousia');
    }
    
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// 2. RUNS AS SOON AS THE BUTTONS ARE CREATED: Fixes the labels
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('furina-theme') || 'ousia';
    const body = document.body;
    const formText = document.getElementById('form-text');

    body.setAttribute('data-theme', savedTheme);

    if (formText) {
        formText.textContent = savedTheme === 'ousia' ? "Pneuma Form" : "Ousia Form";
    }
});

// 3. RADIAL MENU TOGGLE
function toggleMenu() {
    const nav = document.getElementById('genshinNav');
    const body = document.body;
    const hubIcon = document.getElementById('hub-icon');
    
    if (!nav) return;

    nav.classList.toggle('open');
    body.classList.toggle('menu-active');
    
    if (nav.classList.contains('open')) {
        hubIcon.classList.remove('fa-map');
        hubIcon.classList.add('fa-compass');
    } else {
        hubIcon.classList.remove('fa-compass');
        hubIcon.classList.add('fa-map');
    }
}

// 4. FORM SWAP TOGGLE
function toggleForm() {
    const body = document.body;
    const formText = document.getElementById('form-text');
    const formIcon = document.getElementById('form-icon');
    const currentTheme = body.getAttribute('data-theme');
    
    if (formIcon) {
        formIcon.style.transform = "rotate(360deg)";
        formIcon.style.transition = "transform 0.4s ease";
    }
    
    let newTheme = 'ousia';

    if (currentTheme === 'ousia') {
        newTheme = 'pneuma';
        if (formText) formText.textContent = "Ousia Form";
    } else {
        newTheme = 'ousia';
        if (formText) formText.textContent = "Pneuma Form";
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('furina-theme', newTheme);
    
    if (formIcon) {
        setTimeout(() => {
            formIcon.style.transform = "none";
            formIcon.style.transition = "none";
        }, 400);
    }
}
//I frames
// Master Portfolio Arrays Engine
const iframeUrls = [
    "https://studio.code.org/projects/applab/2192e1d8-4445-4e42-b7bd-897f0bef1507/embed",
    "https://studio.code.org/projects/applab/46cb34c5-212f-4827-bc0b-d36b456ee7d2/embed",
    "https://studio.code.org/projects/applab/85010070-c063-419b-93c3-5719ad8cce87/embed" // Corrected structural URL path
  ];
  
  const projectTitles = [
    "Game Constructor",
    "Anime Finder",
    "InfoTech Playlist Creator"
  ];
  
  const projectDescriptions = [
    "A game constructor app made to find a video game for the user to enjoy. Was made using javascript with arrays, variables, and lists.",
    "A app made to find an anime based on the genre you selected used javascript to filter through the database and output data based on input.",
    "An app designed to help make a play list based on information technology students musical tastes"
  ];
  
  let currentProjectIndex = 0;
  
  // Update Display State Elements
  function updateProjectDisplay() {
    const frameElement = document.getElementById("project-frame");
    const titleElement = document.getElementById("project-title");
    const descElement = document.getElementById("project-desc");
  
    if (frameElement && titleElement && descElement) {
      frameElement.src = iframeUrls[currentProjectIndex];
      titleElement.textContent = projectTitles[currentProjectIndex];
      descElement.textContent = projectDescriptions[currentProjectIndex];
    }
  }
  
  // Global Core Step Navigation Controller
  function changeProject(direction) {
    currentProjectIndex += direction;
  
    // Infinite Circular Carousel Loop Checking Rules
    if (currentProjectIndex < 0) {
      currentProjectIndex = iframeUrls.length - 1;
    } else if (currentProjectIndex >= iframeUrls.length) {
      currentProjectIndex = 0;
    }
  
    updateProjectDisplay();
  }
  
  // Safe Infallible DOM Initializer Hook
  document.addEventListener("DOMContentLoaded", () => {
    // Only execute logic loops if matching page tree element targets exist
    if (document.getElementById("project-frame")) {
      updateProjectDisplay();
    }
  });