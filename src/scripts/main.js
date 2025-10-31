const profileBio = document.getElementById('profile-bio');
const bioButton = document.getElementById('bio-button');
const aboutMeMobileSpanElements = document.querySelectorAll('.about-me-page-span');
const aboutMeMobileDivElements = document.querySelectorAll('.about-me-reveal-hidden-info');
const aboutMeImages = document.querySelectorAll('.about-me-images');

const resumeDateDivs = document.querySelectorAll('.resume-date');
const resumeInfoDivs = document.querySelectorAll('.resume-further-info');
const resumeInfoContainers = document.querySelectorAll('.resume-info-container');

const experienceResumeDateDivs = document.querySelectorAll('.experience-resume-date');
const experienceResumeInfoDivs = document.querySelectorAll('.experience-resume-summary');
const experienceResumeContainers = document.querySelectorAll('.experience-resume-container');
// Also must do a experience/education toggle
// Need to add at least 2 project links etc


// Reveal span elements for more information and hide other elements for space
// Function to reveal the div adjacent to the span that was clicked and hide the others(toggle)
function revealAboutMeInformationMobile (span) {
    // Get all the span elements and add onclick
    // Link the relavent span elements to their respective more info divs
    // Reveal the more info div that links to the clicked div and hide the other elements, toggle behaviour
    //const aboutMeMobileSpanElements = document.querySelectorAll('.about-me-page-span');
    // Must remember the !hidden for mobile to add here or just refactor eventually
    aboutMeMobileDivElements.forEach(div => {
        if(span.dataset.revealId === div.dataset.revealId) {
            div.classList.toggle('hidden');
        }
    }); 
    aboutMeMobileSpanElements.forEach(element => {
        if(span !== element) {
            element.classList.toggle('hidden');
        }
    });
    aboutMeImages.forEach(img => img.classList.toggle('hidden'));
}

function revealResumeInfo (clickedDiv) {
    resumeInfoDivs.forEach(div => {
        if(clickedDiv.dataset.revealId === div.dataset.revealId) {
            div.classList.toggle('hidden');
        }
    });
    resumeInfoContainers.forEach(container => {
        if(clickedDiv.dataset.revealId !== container.dataset.revealId) {
            container.classList.toggle('hidden');
        }
    });
}

resumeDateDivs.forEach(div => div.addEventListener('click', () => {
    const screenSize = window.innerWidth;
    if(screenSize <= 1024) {
        revealResumeInfo(div);
    }
}));

function revealExperienceResumeInfo (clickedDiv) {
    experienceResumeInfoDivs.forEach(div => {
        if(clickedDiv.dataset.revealId === div.dataset.revealId) {
            console.log(clickedDiv);
            console.log(div);
            div.classList.toggle('hidden');
        }
    });
    experienceResumeContainers.forEach(container => {
        if(clickedDiv.dataset.revealId !== container.dataset.revealId) {
            container.classList.toggle('hidden');
        }
    });
}

experienceResumeDateDivs.forEach(div => div.addEventListener('click', () => {
    const screenSize = window.innerWidth;
    if(screenSize <= 1024) {
        revealExperienceResumeInfo(div);
    }
}));

aboutMeMobileSpanElements.forEach(span => span.addEventListener('click', () => {
    const screenSize = window.innerWidth;
    if(screenSize <= 1024) {
        revealAboutMeInformationMobile(span);
    }
}));

bioButton.addEventListener('click', () => {
    profileBio.classList.add('line-clamp-2');
    profileBio.classList.toggle('hidden');
});


const dropdownMenuProjects = document.getElementById('dropdown-hidden-projects-menu');
const portfolioProjectCategories = document.querySelectorAll('#dropdown-hidden-projects-menu');
const portfolioHeading = document.getElementById('portfolio-container');
const dropdownItems = document.querySelectorAll('.portfolio-dropdown-items');
const projectsContainers = document.querySelectorAll('.projects-containers');
// Dropdown for mobile select of portfolio categories
function customDropDown (containerId) {
    projectsContainers.forEach(project => {
        if(containerId === project.dataset.revealId) {
            if(project.classList.contains('hidden')) {
                project.classList.toggle('hidden');
            }   
        }
        if(containerId !== project.dataset.revealId) {
            if(!project.classList.contains('hidden')) {
                project.classList.toggle('hidden');
            }
        }
    });
    dropdownItems.forEach(heading => {
        if(containerId === heading.dataset.revealId) {
            if(heading.classList.contains('hidden')) {
                heading.classList.toggle('hidden');
            }  
        }
        if(containerId !== heading.dataset.revealId) {
            if(!heading.classList.contains('hidden')) {
                heading.classList.toggle('hidden');
            }  
        }
    });
}

portfolioHeading.addEventListener('click', () => {
    const screenSize = window.innerWidth;
    if(screenSize <= 1024) {
        dropdownMenuProjects.classList.toggle('hidden');
    }
});

portfolioProjectCategories.forEach(category => category.addEventListener('click', (event) => {
    const elementDataId = event.target.dataset.revealId;
    const screenSize = window.innerWidth;
    if(screenSize <= 1024) {
        customDropDown(elementDataId);
    }
    dropdownMenuProjects.classList.toggle('hidden');
})); 

function portfolioProjectPageSwitch (containerId) {
    projectsContainers.forEach(project => {
        if(containerId === project.dataset.revealId) {
            if(project.classList.contains('hidden') || project.classList.contains('!hidden')) {
                project.classList.remove('hidden');
                project.classList.remove('!hidden');
            }
        }
        if(containerId !== project.dataset.revealId) {
            if(!project.classList.contains('hidden')) {
                project.classList.add('!hidden');
            }
        }
    });
}

dropdownItems.forEach(heading => heading.addEventListener('click', (event) => {
    const headingId = event.target.dataset.revealId;
    const screenSize = window.innerWidth;
    if(screenSize > 1024) {
        portfolioProjectPageSwitch(headingId);
    }
}));