let navLinks = document.getElementsByClassName('navLink');
let menuLinks = document.getElementsByClassName('menuLink');
let menuBtn = document.getElementById('menuBtn');
let menu = document.getElementById('menu');
let menuOpen = false;
let pages = document.getElementsByClassName('page');
let projects = document.getElementsByClassName('projectGroup');
let projectNames = document.querySelectorAll('h4');
let projectCards = document.getElementsByClassName('projectCard');
let projectBtns = document.getElementsByClassName('projectBtns');
let featureds = document.getElementsByClassName('featuredGroup');
// let featuredNames = document.querySelectorAll('h4');
let featuredCards = document.getElementsByClassName('featuredCard');
let featuredBtns = document.getElementsByClassName('featuredLinks');
let featuredSkills = document.getElementsByClassName('featuredSkill');
const featuredDescriptions = document.getElementsByClassName('featuredDescription');
let skillCards = document.getElementsByClassName('skillCard');
let skillIcons = document.getElementsByClassName('skillIcon');
let skillDescriptions = document.getElementsByClassName('skillDescription');
let h2 = document.querySelectorAll('h2');
let ftProjects = document.getElementById('featuredProjects');
let featuredInfo = [
    {
        name: "Flashcards App",
        id: "flashcards",
        background: "Images/flashcards.png",
        description: "Full-stack application built with React that features several models with CRUD functionality.",
        skills: ["React", "JavaScript", "Express", "Material UI"],
        git: "https://github.com/nicscobey/ringo-project3-frontend",
        live: "https://ringo-flashcards.netlify.app/"
    },
    {
        name: "App Buddy",
        id: "appBuddy",
        background: "Images/app-buddy.png",
        description: "A full-stack application with session-based user authentication full CRUD functionality, allowing users to track job applications and networking contacts.",
        skills: ["JavaScript", "Express", "MongoDB & Mongoose"],
        git: "https://github.com/nicscobey/ga-jobseeker-tracker",
        live: "https://career-engineer-job-tracker.herokuapp.com/"
    },
    {
        name: "Remote Job Board",
        id: "remoteJobBoard",
        background: "Images/remote-job-board.png",
        description: "A search tool built with Bootstrap that calls an API and allows users to browse jobs and store and remove favorites.",
        skills: ["jQuery", "Bootstrap", "API"],
        git: "https://github.com/nicscobey/job-board",
        live: "https://nicscobey.github.io/job-board/"
    },
    // {
    //     name: "Calculator",
    //     id: "calc",
    //     background: "Images/Calculator.png",
    //     description: "A calculator that includes the four basic math functions, convertage to percentage, and invert positive/negative.",
    //     skills: ["JavaScript", "HTML", "CSS"],
    //     git: "https://github.com/nicscobey/calculator",
    //     live: "https://nicscobey.github.io/calculator/"
    // },
    {
        name: "Gif Memory Card Game",
        id: "memory",
        background: "Images/Memory\ Game.png",
        description: "A game that creates and randomizes cards, and then waits for the user to find matching pairs.",
        skills: ["APIs", "JavaScript", "HTML", "CSS"],
        git: "https://github.com/nicscobey/MemoryCardGame",
        live: "https://nicscobey.github.io/MemoryCardGame/"
    },
    {
        name: "Small Business Website",
        id: "smallBusinessWebsite",
        background: "Images/Small\ Business\ Website.png",
        description: "A single-page website template that highlights the background and services of a small business.",
        skills: ["JavaScript", "HTML", "CSS"],
        git: "https://github.com/nicscobey/SmallBusinessWebsite",
        live: "https://nicscobey.github.io/SmallBusinessWebsite/"
    }
]


const addFeaturedCard = (newFtGp, i) => {
    const newFtCard = document.createElement('div');
    newFtCard.classList.add('featuredCard');
    newFtCard.setAttribute('id', `${featuredInfo[i].id}`)
    newFtCard.style.backgroundImage = `url('${featuredInfo[i].background}')`;
    newFtGp.appendChild(newFtCard);

    const newFtLinks = document.createElement('div');
    newFtLinks.classList.add('featuredLinks');
    newFtCard.appendChild(newFtLinks);

    const ftLinkA = document.createElement('a');
    ftLinkA.classList.add('liveDemo', 'featuredLink');
    ftLinkA.innerHTML = "Live Demo";
    ftLinkA.setAttribute('href', `${featuredInfo[i].live}`);
    ftLinkA.setAttribute('target', "_blank");
    newFtLinks.appendChild(ftLinkA);

    const ftLinkB = document.createElement('a');
    ftLinkB.classList.add('gitHub', 'featuredLink');
    ftLinkB.innerHTML = "GitHub";
    ftLinkB.setAttribute('href', `${featuredInfo[i].git}`);
    ftLinkB.setAttribute('target', "_blank");
    newFtLinks.appendChild(ftLinkB);    

    if (i%2 === 0) {
        newFtGp.classList.add('featuredGroupLeft');
        newFtCard.classList.add('featuredCardLeft');
    }
    else {
        newFtGp.classList.add('featuredGroupRight');
        newFtCard.classList.add('featuredCardRight');
    }
}

const addFeaturedInfo = (newFtGp, i) => {
    const ftInfo = document.createElement('div');
    ftInfo.classList.add('featuredInfo');
    newFtGp.appendChild(ftInfo);

    const newh6 = document.createElement('h6');
    newh6.innerHTML = `${featuredInfo[i].name}`
    ftInfo.appendChild(newh6);

    const newFtDesc = document.createElement('p');
    newFtDesc.classList.add('featuredDescription');
    newFtDesc.innerHTML = `${featuredInfo[i].description}`;
    ftInfo.appendChild(newFtDesc);

    const newFtInfoSection = document.createElement('div');
    newFtInfoSection.classList.add('featuredInfoRightBottom');
    ftInfo.appendChild(newFtInfoSection);

    const newh7 = document.createElement('h7');
    newh7.innerHTML = "Key Skills:";
    newFtInfoSection.appendChild(newh7);

    const ftSkills = document.createElement('div');
    ftSkills.classList.add('featuredSkills');
    newFtInfoSection.appendChild(ftSkills);

    for (let j = 0; j < featuredInfo[i].skills.length; j++) {
        const ftSkill = document.createElement('p');
        ftSkill.classList.add('featuredSkill');
        ftSkill.innerHTML = `${featuredInfo[i].skills[j]}`;
        if (i%2 ===0) {
            ftSkill.classList.add('featuredSkillRight');
        }
        else {
            ftSkill.classList.add('featuredSkillLeft');
            newFtDesc.classList.add('featuredDescriptionLeft');
        }
        ftSkills.appendChild(ftSkill);
    }

    if (i%2 === 0) {
        ftInfo.classList.add('featuredInfoRight');
    }
    else {
        ftInfo.classList.add('featuredInfoLeft');
        newh7.classList.add('leftKeySkill');
    }
}

const setFeaturedProjectOrder = () => {
    let h7 = document.querySelectorAll('h7');
    
    for (let i = 0; i < featureds.length; i++) {
        if (window.innerWidth < 800) {
            featureds[i].style.order = "0";
            featuredCards[i].style.order = "1";
            h7[i].classList.add('leftKeySkill');
       }
        else  {
            featureds[i].style.order = "";
            featuredCards[i].style.order = "";
            if ((i % 2 === 0)) {
                h7[i].classList.remove('leftKeySkill');
            }        
        }
    }
}

//CREATE FEATURED PROJECTS
const createFtProjects = () => {
    for (let i = 0; i < featuredInfo.length; i++) {
        const newFtGp = document.createElement('div');
        newFtGp.classList.add('featuredGroup');
        ftProjects.appendChild(newFtGp);

        if (i%2 === 0) {
            addFeaturedCard(newFtGp, i);
            addFeaturedInfo(newFtGp, i);
        }
        else {
            addFeaturedInfo(newFtGp, i);
            addFeaturedCard(newFtGp, i);
        }

        setFeaturedProjectOrder();
    }
}

createFtProjects();

window.addEventListener('resize', () => {
    setFeaturedProjectOrder();
})

//functioning nav links
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', ()=> openPage(i))
}

//functioning menu links
for (let i = 0; i < navLinks.length; i++) {
    menuLinks[i].addEventListener('click', ()=> openPage(i))
}

//open pages function
function openPage(i) {
    pages[i].style.display = "block";
    navLinks[i].style.textDecoration = "underline";
    navLinks[i].style.textDecorationThickness = "5px";
    // console.log(navLinks[i].innerHTML);
    if (menuOpen) {
        menu.style.display = "none";
        openCloseMenu();
    }
    for(let j = 0; j < menuLinks.length; j++) {
        if (j !== i) {
            // console.log('j is ' + j);
            // console.log('i is ' + i);
            pages[j].style.display = "none";
            navLinks[j].style.textDecoration = "none";
        }
    }
}

//menu button listener
menuBtn.addEventListener('click', ()=> openCloseMenu());

//open and close menu
function openCloseMenu() {
    if(!menuOpen) {
        menu.style.display = "block";
        document.getElementById('menuLine1').style.transform = "translateY(12px) rotate(135deg)";
        document.getElementById('menuLine3').style.transform = "translateY(-12px) rotate(-135deg)";
        document.getElementById('menuLine2').style.transform = "scale(0)";    
    }
    else {
        menu.style.display = "none";
        document.getElementById('menuLine1').style.transform = "translateY(0px) rotate(0deg)";
        document.getElementById('menuLine3').style.transform = "translateY(0px) rotate(0deg)";
        document.getElementById('menuLine2').style.transform = "scale(1)";    
    }
    menuOpen = !menuOpen;
}


//event listener for hover over projects
for (let i = 0; i < projectCards.length; i++) {
    projects[i].addEventListener('mouseover', function animateProject() {
        projects[i].style.transform = "translateY(-10px)";
        projects[i].style.boxShadow = "0px 5px 15px";
        projects[i].style.alignItems = "stretch";
        projectBtns[i].style.display = "flex";
        projectNames[i].style.display = "none";
        projectCards[i].style.filter = "none";
    })
}

for (let i = 0; i < projectCards.length; i++) {
    projects[i].addEventListener('mouseleave', function animateProject() {
        projectBtns[i].style.display = "none";
        projects[i].style.transform = "translateY(0px)";
        projects[i].style.alignItems = "center";
        projects[i].style.boxShadow = "0px 1px 5px";
        projectNames[i].style.display = "block";
        projectCards[i].style.filter = "";
    })
}

// event listener for hover over featured
for (let i = 0; i < featureds.length; i++) {
    featureds[i].addEventListener('mouseover', function animateFeatured() {
        featureds[i].style.transform = "translateY(-10px)";
        featureds[i].style.boxShadow = "0px 5px 15px";
        featuredDescriptions[i].style.backgroundColor = "#b3b3b3";
        featuredCards[i].style.filter = "none";
        featuredBtns[i].style.display = "flex";
        if (window.innerWidth < 800) {
            featureds[i].style.alignItems = "stretch";
        }
    })
}

for (let i = 0; i < featureds.length; i++) {
    featureds[i].addEventListener('mouseleave', function animateFeatured() {
        featureds[i].style.transform = "translateY(0px)";
        featureds[i].style.boxShadow = "";
        featuredDescriptions[i].style.backgroundColor = "";
        featuredCards[i].style.filter = "";
        featuredBtns[i].style.display = "none";
        if (window.innerWidth > 800) {
            featureds[i].style.alignItems = "center";
        }
    })
}

for (let i =0; i < skillCards.length; i++) {
        skillCards[i].style.background = "linear-gradient(to bottom, #24a6b9, #15616D)";
        // skillDescriptions[i].style.color = "white";
}

// event listener for hover over skill cards
for (let i = 0; i < skillCards.length; i++) {
    skillCards[i].addEventListener('mouseover', function animateSkills() {
        skillCards[i].style.transform = "translateY(-10px)";
        skillCards[i].style.boxShadow = "0px 5px 15px";
        skillIcons[i].style.filter = "none";
    })
}

for (let i = 0; i < skillCards.length; i++) {
    skillCards[i].addEventListener('mouseleave', function animateSkills() {
        // featuredBtns[i].style.display = "none";
        skillCards[i].style.transform = "translateY(0px)";
        // featureds[i].style.alignItems = "center";
        skillCards[i].style.boxShadow = "";
        skillIcons[i].style.filter = "";
    })
}

//make menu smaller when scroll down
const menuCheckpoint = 60;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > menuCheckpoint) {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 75%)";
        document.querySelector("#menuBtn").style.backgroundColor = "rgba(0, 0, 0, 75%)";
    } 
    else {
        document.querySelector("nav").style.backgroundColor = "";
        document.querySelector("#menuBtn").style.backgroundColor = "";
    }
});


//trying to make each child of homepage's text animate
// function animateDiv() {
//     const children = document.getElementById('homeText').getElementsByTagName('*');
//     console.log(children);


//     for (let i = 0; i < children.length; i++) {
//         setTimeout(function() {console.log(i)}, (i*1000));
//         children[i].style.animation = `1s ease-out ${i}s 1 slideFromLeft`;
//         setTimeout(function() {children[i].classList.remove('invisible')}, (i*1000));

//     }
// }

// animateDiv();



//FOLLOWING THESE INSTRUCTIONS: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

//for each of featuredInfo, if i is even, slide from right
//for each of featuredCard, if i is even, slide from left

//for each of featuredCard, if i is odd, slide from right
//for each of featuredInfo, if i is odd, slide from left


// const visibleElement = (element, scroll = 100) => {
//     const elementTop = element.getBoundingClientRect().top;

//     return (elementTop <= (window.innerHeight || document.documentElement.clientHeight))
// }



// const scrollOffset = 100;
 
// // const scrollElement = document.querySelector(".featuredGroup");
// for (scrollElement of featureds) {
//     const elementInView = (el, offset = 0) => {
//         const elementTop = el.getBoundingClientRect().top;
       
//         return (
//           elementTop <= 
//           ((window.innerHeight || document.documentElement.clientHeight) - offset)
//         );
//       };
       
//       const displayScrollElement = () => {
//         scrollElement.classList.add('scrolled');
//       }
       
//       const hideScrollElement = () => {
//         scrollElement.classList.remove('scrolled');
//       }
       
//       const handleScrollAnimation = () => {
//         if (elementInView(scrollElement, scrollOffset)) {
//             displayScrollElement();
//         } else {
//           hideScrollElement();
//         }
//       }
       
//       window.addEventListener('scroll', () => {
//         handleScrollAnimation();
//       })
// }