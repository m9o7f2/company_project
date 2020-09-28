
var scroll = new SmoothScroll('*[href*="#"]',{
    speed: 700,
    offset: 150
});

window.onload = function () {
    if(document.body.classList.contains("home")){
         new Splide('.splide', {type:'loop',perPage:window.innerWidth < 990? 1 : 3 ,focus: 'center',}).mount()
    }
}

//wow js int
function wow_js () {
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
}
wow_js ()

//bading top

function paddingT(){
    let fixer = document.querySelector(".fixer").offsetHeight;

    document.body.style.paddingTop = fixer + "px";
}
paddingT()
//change img-header
function header_img () {
    var header = document.querySelector("header");
    if(header.classList.contains("bg-ch")){
        setInterval(function(){
            let im = ["url('img/header-img/01.jpg')","url('img/header-img/02.jpg')","url('img/header-img/03.jpg')"];
            let I = Math.floor(Math.random() * 6);
            let finalI = im[I];
            header.style.backgroundImage = finalI
        },30000)
    }
}
header_img ()
//add animation-class
function add_anmation() {
    let serv = document.querySelectorAll(".serv");
    //console.log(indexof(serv[0]))
    for(i=0; i < serv.length ; i++){
        if(i % 2 == 0){
            serv[i].classList.add("animate__fadeInLeft");
        }else{
            serv[i].classList.add("animate__fadeInRight");
        }

    }
}
add_anmation()

// up show

function up(){
    window.onscroll = function(){
        if(window.scrollY > 500){
            document.querySelector(".top").style.opacity = "1"
        }else{
            document.querySelector(".top").style.opacity = "0"
        }
    }
}
up();

//page translate section
function trans (){
    let trans = document.querySelector(".trans");
    trans.onclick = function(){
        document.body.parentElement.style.direction = "rtl"; 
        document.querySelectorAll(".text-right").forEach(el => {
            el.style.textAlign = "left !important";
        })
    }
}
trans ()

//translate section js-object