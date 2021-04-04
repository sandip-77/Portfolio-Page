

const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const skill = document.getElementById('skills');
const htmlCss = document.getElementById('html-css');


function toggleNav(){
    //Toggle menu bars open/close
    menuBars.classList.toggle('change');

    //Toggling menu to active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains("overlay-active")){
        //Animate-In overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        //Animate In - nav items
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');
        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');
        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');
        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');
        nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5');
    }else{
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        //Animate out - nav items
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');
        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');
        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');
        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');
        nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5');
    }
};

function progressBar(){
    htmlCss.classList.add('html-css');
}

// Event listeners

menuBars.addEventListener("click" , toggleNav);

link1.addEventListener('click', toggleNav);
link2.addEventListener('click', toggleNav);
link3.addEventListener('click', toggleNav);
link4.addEventListener('click', toggleNav);
link5.addEventListener('click', toggleNav);
skill.addEventListener('scroll', () =>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight -1000 ) {
        progressBar;
        console.log("triggerd")
    }
})






