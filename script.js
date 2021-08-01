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
// let featureds = document.getElementsByClassName('featuredGroup');
// let featuredNames = document.querySelectorAll('h4');
// let featuredCards = document.getElementsByClassName('featuredCard');
// let featuredBtns = document.getElementsByClassName('featuredBtns');

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
    if (menuOpen) {
        menu.style.display = "none";
        openCloseMenu();
    }
    for(let j = 0; j < menuLinks.length; j++) {
        if (j !== i) {
            console.log('j is ' + j);
            console.log('i is ' + i);
            pages[j].style.display = "none";
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
    })
}

for (let i = 0; i < projectCards.length; i++) {
    projects[i].addEventListener('mouseleave', function animateProject() {
        projectBtns[i].style.display = "none";
        projects[i].style.transform = "translateY(0px)";
        projects[i].style.alignItems = "center";
        projects[i].style.boxShadow = "0px 1px 5px";
        projectNames[i].style.display = "block";
    })
}

//event listener for hover over featured
// for (let i = 0; i < featureds.length; i++) {
//     featureds[i].addEventListener('mouseover', function animateFeatured() {
//         featureds[i].style.transform = "translateY(-10px)";
//         featureds[i].style.boxShadow = "0px 5px 15px";
//         featureds[i].style.alignItems = "stretch";
//         featuredBtns[i].style.display = "flex";
//         featuredNames[i].style.display = "none";
//     })
// }

// for (let i = 0; i < featureds.length; i++) {
//     featureds[i].addEventListener('mouseleave', function animateFeatured() {
//         featuredBtns[i].style.display = "none";
//         featureds[i].style.transform = "translateY(0px)";
//         featureds[i].style.alignItems = "center";
//         featureds[i].style.boxShadow = "0px 1px 5px";
//         featuredNames[i].style.display = "block";
//     })
// }