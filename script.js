
setInterval(() => {
    const date_fix = 0.00262377367100159707962582705909;
    var startDate = new Date("2006/02/08");
    var diffDate = new Date(new Date() - startDate);
    my_age = (diffDate.toISOString().slice(0, 4) - 1970) + diffDate.getMonth()/12 + (diffDate.getDate()-1)/365.25 + diffDate.getHours()/8760 + diffDate.getMinutes()/525600 + diffDate.getSeconds()/31536000 + diffDate.getMilliseconds()/31536000000
    my_age = Math.round((my_age+date_fix) * 1000000000) / 1000000000
    my_age = my_age.toFixed(9)
    var element = document.getElementById("age");
    element.textContent = my_age;
}, 100);

window.addEventListener(('load'), () => {
    if (document.querySelector('#explosion1') !== null) {
      window.sessionStorage.setItem('Explosion1', 'displayed');
    }
    if (document.querySelector('#explosion2') !== null) {
        window.sessionStorage.setItem('Explosion2', 'displayed');
    }
    if (document.querySelector('#stars-main') !== null) {
        window.sessionStorage.setItem('Stars-main', 'displayed');
    }
    if (document.querySelector('#menu') !== null) {
        window.sessionStorage.setItem('Menu', 'displayed');
    }
    if (document.querySelector('#start-main-text') !== null) {
        window.sessionStorage.setItem('Start', 'displayed');
    }
})

function turn_animation_off(){
    if (window.sessionStorage.getItem('Explosion1')) {
        document.querySelector('#explosion1').classList.remove('explosion1')
    }
    if (window.sessionStorage.getItem('Explosion2')) {
        document.querySelector('#explosion2').classList.remove('explosion2')
    }
    if (window.sessionStorage.getItem('Stars-main')) {
        document.querySelector('#stars-main').classList.remove('stars-main')
    }
    if (window.sessionStorage.getItem('Menu')) {
        document.querySelector('#menu').classList.remove('fade_in')
    }
    if (window.sessionStorage.getItem('Start')) {
        document.querySelector('#start-main-text').classList.remove('fade_in')
    }
}

const urlParams = new URLSearchParams(window.location.search);
const animate = urlParams.get('animate')
if (animate=="false"){turn_animation_off()}

underlined_is_on = true
underlined_old = "none"
function underline_menu(you_are_in){
    if(you_are_in == "start"){underlined = "main_page_id--off"} //vypnuto
    else if(you_are_in == "about"){underlined = "about_id"}
    else if (you_are_in == "projects"){underlined = "projects_id"}
    else if (you_are_in == "kontakt"){underlined = "kontakt_id"}

    if (underlined == "main_page_id--off"){
        var element = document.getElementById("menu");
        element.style.background = "#09182500";}
    else{
        var element = document.getElementById("menu");
        element.style.opacity = "1";
        element.style.background = "#091825";}

    try{
        if (underlined_is_on){
        var element = document.getElementById(underlined_old);
        element.style.color = "#dfe7e4";
        element.style.borderBottom = "2px solid transparent";}}
    catch{}
    try{
        if (underlined_is_on){
        var element = document.getElementById(underlined);
        element.style.color = "#3185FC";
        element.style.borderBottom = "2px solid #3185FC";}}
    catch{}
    underlined_old = underlined
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 250;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        underline_menu(reveals[i].id)
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

function OnClick(e){
    var d=document.createElement("div");
    d.className="OnClick";
    d.style.top=e.clientY+"px";
    d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}

document.addEventListener('click', OnClick);

//Menu
const el = document.getElementById('menu');
function menu_off(){
    underlined_is_on = false
    try{
    var element = document.getElementById(underlined);
    element.style.color = "#dfe7e4";
    element.style.borderBottom = "2px solid transparent";}
    catch{}
};
function menu_on(){
    underlined_is_on = true
    try{
    var element = document.getElementById(underlined);
    element.style.color = "#3185FC";
    element.style.borderBottom = "2px solid #3185FC";}
    catch{}
};

//About
const about_el = document.getElementById('about_id');
about_el.addEventListener('mouseover', function handleMouseOver() {
    menu_off()
    about_el.style.color = "#3185FC"
});
about_el.addEventListener('mouseout', function handleMouseOut() {
    about_el.style.color = "#dfe7e4"
    menu_on()
});

//Projects
const projects_el = document.getElementById('projects_id');
projects_el.addEventListener('mouseover', function handleMouseOver() {
    menu_off()
    projects_el.style.color = "#3185FC"
});
projects_el.addEventListener('mouseout', function handleMouseOut() {
    projects_el.style.color = "#dfe7e4"
    menu_on()
});

//Kontakt
const kontakt_el = document.getElementById('kontakt_id');
kontakt_el.addEventListener('mouseover', function handleMouseOver() {
    menu_off()
    kontakt_el.style.color = "#3185FC"
});
kontakt_el.addEventListener('mouseout', function handleMouseOut() {
    kontakt_el.style.color = "#dfe7e4"
    menu_on()
});