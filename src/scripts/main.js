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
                project.classList.toggle('sm:hidden');
            }   
        }
        if(containerId !== project.dataset.revealId) {
            if(!project.classList.contains('hidden')) {
                project.classList.toggle('hidden');
                project.classList.toggle('sm:hidden');
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
    if(screenSize <= 760) {
        dropdownMenuProjects.classList.toggle('hidden');
    }
});

portfolioProjectCategories.forEach(category => category.addEventListener('click', (event) => {
    const elementDataId = event.target.dataset.revealId;
    const screenSize = window.innerWidth;
    if(screenSize <= 760) {
        customDropDown(elementDataId);
    }
    dropdownMenuProjects.classList.toggle('hidden');
})); 

function portfolioProjectPageSwitch (containerId) {
    projectsContainers.forEach(project => {
        if(containerId === project.dataset.revealId) {
            if(project.classList.contains('hidden') || project.classList.contains('!hidden') || project.classList.contains('sm:hidden')) {
                project.classList.remove('hidden');
                project.classList.remove('!hidden');
                project.classList.remove('sm:hidden');
                project.classList.remove('xl:hidden');
            }
        }
        if(containerId !== project.dataset.revealId) {
            if(!project.classList.contains('hidden')) {
                project.classList.add('!hidden');
            }
        }
    });
}

function removeAllHeadingBg () {
    dropdownItems.forEach(heading => heading.classList.remove('bg-[#0C1821]'));
}

dropdownItems.forEach(heading => heading.addEventListener('click', (event) => {
    const headingId = event.target.dataset.revealId;
    const screenSize = window.innerWidth;
    removeAllHeadingBg();
    event.target.classList.add('bg-[#0C1821]');
    if(screenSize > 760) {
        portfolioProjectPageSwitch(headingId);
    }
}));

const aboutMeTextChunks = [
    `I am a Full-Stack Python/Django and JavaScript/React Developer,
    designing APIs, shaping data models, implementing features specific to a given usecase.`,

    `I have changed careers to fufill my desire to build lasting solutions and improve user experiences.
    I am developing strong interests in system optimisation and scalable application behaviour.`,
    
    `I enjoy looking for creative ways to make data storage as well as data interactions smoother and quicker. 
    My ability to draw plays a meaningful role in my approach to UI design, allowing me to sketch ideas by hand and turn them into thoughtful and custom user experiences.
    My goal when starting each new project is to create data driven backend solutions delivered through intuative Api endpoints. 
    Present custom, responsive, interactive, and maintainable front-end components.`,

    `Sports administrator and coach seeking a career change into software development, driven by a desire to build long-lasting solutions. 
    I began learning to code through online resources in my spare time, completing CS50 (C and Python), CSW web development (Flask and Django), and a software development bootcamp at CodeSpace Academy (Js and React).
    Building full-stack projects, such as my browser-based space-invaders game (Django server hosted on Supabase, Railway, and Netlify), has been particularly valuable and fulfilling.`,

    `The CodeSpace program emphasizes designing scalable code and explaining design choices.
    Having over a decade of experience communicating complex strategies to athletes, parents, managers, and sponsors has translated seamlessly to explaining technical trade-offs and mentoring peers in the bootcamp.
    My experiences communicating complex sports strategy and technique in ways that each unique person can understand and benefit from has transferred as a soft skill aiding me in guiding others in the bootcamp.`,

    `As head of rugby, cricket, and conditioning, I managed multiple nationwide events, oversaw external staff, and liaised with top sponsors.
    This leadership, organization, and stakeholder management experience equips me to contribute effectively in collaborative tech projects.`,

    `I completed the bootcamp whilst working full-time, building projects, networking with peers, joined a hackathon. 
    Adaptable and solution-focused, I bring hands-on experience building interactive full-stack web applications with Python (Django) and JavaScript (React), designing real-time features, managing relational databases, and creating responsive interfaces.`,

    `I aim to transfer my past professional experience and gained soft skills to a problem-solving junior full-stack software developer.`,
]

const journeyContainer = document.getElementById('journey-wrapper');
const journeyBtn = document.getElementById('journey-btn');
const journeyTextCards = document.querySelectorAll('.text-card');
const journeyFeet = document.querySelectorAll('.journey-feet');
//const cardText = document.querySelectorAll('.text-card-p');

journeyBtn.addEventListener('click', journeyBtnClick);

/* journeyFeet.forEach(foot => {
    foot.classList.add('hidden');
}); */

/* function journeyBtnClick () {
    journeyTextCards.forEach((card, index) => {
        const cardIndex = index;
        const cardFeet = card.querySelectorAll('*');
        console.log((index + (cardFeet.length)));
        card.classList.remove('hidden');
        card.style.opacity = '0';
        void card.offsetWidth;
        card.style.transition = "transform 0.4s ease, opacity 0.3s ease";
        card.style.transitionDelay = `${(index + (cardFeet.length)) * 2}s`;
        card.style.opacity = "1";
        card.querySelectorAll(('*')).forEach((foot, index) => {
            void foot.offsetWidth;
            foot.style.transition = "transform 0.4s ease, opacity 0.3s ease";
            foot.style.transitionDelay = `${index * 2}s`;
            foot.style.opacity = "1";
        })
    });

     journeyFeet.forEach((foot, index) => {
        //foot.classList.remove('hidden');
        void foot.offsetWidth;
        foot.style.transition = "transform 0.4s ease, opacity 0.3s ease";
        foot.style.transitionDelay = `${index * 2}s`;
        foot.style.opacity = "1";
    });
} */

async function journeyBtnClick() {
    for (let i = 0; i < (journeyTextCards.length + 1); i++) {
        const card = journeyTextCards[i];
        console.log(card);
        const prevCard = journeyTextCards[i - 1];
        const prevCardRemove = journeyTextCards[i - 2];
        if(prevCardRemove) {
            prevCardRemove.classList.remove('card-active');
            prevCardRemove.querySelector('p').classList.remove('text-active');
            prevCardRemove.querySelectorAll('.journey-feet').forEach(foot => foot.classList.remove('hidden'));
        }
        

        if (prevCard) {
            prevCard.classList.add('card-active');
            prevCard.querySelector('p').classList.add('text-active');
            prevCard.querySelectorAll('.journey-feet').forEach(foot => foot.classList.add('hidden'));
        }
        const feet = card.querySelectorAll('.journey-feet'); // adjust class for feet (check for card exist)
        // Show card
        card.classList.remove('hidden');
/*         card.classList.add('card-active');
        card.querySelector('p').classList.add('text-active'); */
        card.style.opacity = '0';
        void card.offsetWidth;
        card.style.transition = "opacity 2s ease-in-out, transform 2s ease-in-out";
        card.style.opacity = '1';

        // Wait for card fade-in
        await new Promise(res => setTimeout(res, 500));

        // Show feet staggered
        
        for (let j = 0; j < feet.length; j++) {
            const foot = feet[j];
            foot.classList.remove('hidden');
            foot.style.opacity = '0';
            void foot.offsetWidth;
            foot.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            foot.style.opacity = '1';
            
            // small delay between each foot
            await new Promise(res => setTimeout(res, 3000));
        }

        // optional pause before next card
        await new Promise(res => setTimeout(res, 250));
    }
    journeyBtn.innerText = 'And Beyond'; // Link to future projects and plans
}


/* const journeyText = document.getElementById('journey-text-box');
const journeyBtn = document.getElementById('journey-btn');
journeyBtn.addEventListener('click', journeyBtnClick);
function setText(chunk) {
    journeyText.textContent = '';
    journeyText.textContent = chunk;
}
function journeyBtnClick () {
    journeyBtn.textContent = 'Restart';
    journeyText.classList.remove('hidden');
    journeyText.textContent = 'I started learning to code in my free time';
    aboutMeTextChunks.forEach((chunk, i) => {
        setTimeout(() => {
        setText(chunk);
        }, 5000 * (i + 1))}
    );
} */


/* function placeDotsBetweenElements(elements, container) {
    // Remove old dots
    container.querySelectorAll(".journey-dot").forEach(dot => dot.remove());

    for (let i = 0; i < elements.length - 1; i++) {
        const startEl = elements[i];
        const endEl = elements[i + 1];

        // Get absolute positions
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();

        // Calculate center points of each card
        const startX = startRect.left + startRect.width / 2;
        const startY = startRect.top + startRect.height / 2;

        const endX = endRect.left + endRect.width / 2;
        const endY = endRect.top + endRect.height / 2;

        // Add 5 dots between the two cards
        const dots = 2;
        for (let d = 1; d <= dots; d++) {
            const t = d / (dots + 1); // equally spaced interpolation

            const dotX = startX + (endX - startX) * t;
            const dotY = startY + (endY - startY) * t;

            const dot = document.createElement("div");
            dot.classList.add("journey-dot");

            // Calculate angle between the two points
            const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

            Object.assign(dot.style, {
                position: "absolute",
                fontSize: "22px",
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                left: dotX + "px",
                top: dotY + "px",
                zIndex: 10,
                pointerEvents: "none"
            });

            // Footstep emoji
            dot.textContent = "👣";




            container.appendChild(dot);
        }
    }
}

window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".text-card");
    const container = document.querySelector("#journey-wrapper");

    placeDotsBetweenElements(elements, container);
}); */
