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
const featuredDescriptions = document.getElementsByClassName('featuredDescription');
let skillCards = document.getElementsByClassName('skillCard');
let skillIcons = document.getElementsByClassName('skillIcon');


let featuredInfo = [
    {
        name: "Calculator",
        id: "calc",
        background: "Images/Calculator.png",
        description: "A calculator that includes the four basic math functions, convertage to percentage, and invert positive/negative.",
        skills: ["JavaScript", "HTML", "CSS"],
        git: "",
        live: ""
    },
    {
        name: "Gif Memory Card Game",
        id: "memory",
        background: "Images/Memory\ Game.png",
        description: "A game that creates and randomizes cards, and then waits for the user to find matching pairs.",
        skills: ["APIs", "JavaScript", "HTML", "CSS"],
        git: "",
        live: ""
    },{
        name: "Small Business Website",
        id: "smallBusinessWebsite",
        background: "Images/Small\ Business\ Website.png",
        description: "A single-page website template that highlights the background and services of a small business.",
        skills: ["JavaScript", "HTML", "CSS"],
        git: "",
        live: ""
    }
]

//create and populate cards
// const createFeaturedCard = () => {
//     for (let i = 0; i < featuredInfo.length; i++) {
//         const ftGp = document.createElement('div');
//         ftGp.classList.add('featuredGroup');
//         const ftInfo = document.createElement('div');
//         ftInfo.classList.add('featuredInfo');
        
        
//         ftGp.appendChild(ftInfo);
//         const h6 = document.createElement('h6');
//         h6.innerHTML = featuredInfo[i].name;
//         ftInfo.appendChild(h6);


//         const p = document.createElement('p');
//         p.classList.add('featuredDescription');
//         p.innerHTML = featuredInfo[i].description;
//         ftInfo.appendChild(p);

//         document.createElement('div');


//         //determine left/right positioning
//         // if (i % 2 == 0) {

//         // }
//     }
// }

// createFeaturedCard();

// let projectInfo = [
//     {
//         name: "Simon Says",
//         image: "Images/Simon Says Game.png",
//         skills: "HTML, CSS, JavaScript",
//         description: "An interactive app that builds a pattern and tests the user's ability to repeat that pattern.",
//         appLink: "google.com",
//         gitHubFront: "yahoo.com",
//         gitHubBack: "msn.com"
//     },
//     {
//         name: "Small Business Website",
//         image: "Images/Small Business Website.png",
//         skills: "HTML, CSS, JavaScript",
//         description: "A website highlighting the services and top reviews of a small business.",
//         appLink: "google.com",
//         gitHubFront: "yahoo.com",
//         gitHubBack: "msn.com"
//     },
// ];


// console.log(pages);
// console.log(pages[0]);
// console.log('pages[0] is ' + pages[0]);
// console.log(projects);



//consider adding animation when clicking to new tab
//if next tap is greater page number, slide left
//if next tab is smaller page number, slide right
//(use position to move it right or left)


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
    console.log(navLinks[i].innerHTML);
    if (menuOpen) {
        menu.style.display = "none";
        openCloseMenu();
    }
    for(let j = 0; j < menuLinks.length; j++) {
        if (j !== i) {
            console.log('j is ' + j);
            console.log('i is ' + i);
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
        featureds[i].style.alignItems = "stretch";
        featuredBtns[i].style.display = "flex";
        featuredCards[i].style.filter = "none";
        featuredDescriptions[i].style.backgroundColor = "#b3b3b3";
    })
}

for (let i = 0; i < featureds.length; i++) {
    featureds[i].addEventListener('mouseleave', function animateFeatured() {
        featuredBtns[i].style.display = "none";
        featureds[i].style.transform = "translateY(0px)";
        featureds[i].style.alignItems = "center";
        featureds[i].style.boxShadow = "";
        featuredCards[i].style.filter = "";
        featuredDescriptions[i].style.backgroundColor = "";
    })
}

// event listener for hover over skill cards
for (let i = 0; i < skillCards.length; i++) {
    skillCards[i].addEventListener('mouseover', function animateSkills() {
        skillCards[i].style.transform = "translateY(-10px)";
        skillCards[i].style.boxShadow = "0px 5px 15px";
        // skillCards[i].style.alignItems = "stretch";
        // featuredBtns[i].style.display = "flex";
        skillIcons[i].style.filter = "none";
        // featuredDescriptions[i].style.backgroundColor = "#b3b3b3";
    })
}

for (let i = 0; i < skillCards.length; i++) {
    skillCards[i].addEventListener('mouseleave', function animateSkills() {
        // featuredBtns[i].style.display = "none";
        skillCards[i].style.transform = "translateY(0px)";
        // featureds[i].style.alignItems = "center";
        skillCards[i].style.boxShadow = "";
        skillIcons[i].style.filter = "";
        // featuredDescriptions[i].style.backgroundColor = "";
    })
}


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
