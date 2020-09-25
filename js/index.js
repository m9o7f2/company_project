
//loading overLay
// function on_load() {
//     window.onload = function () {
//         document.querySelector(".loader").style.display = "none";
//         document.body.style.overflowY = "scroll";
//     }
// }
// on_load()

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
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
}
wow_js ()

//change img-header
function header_img () {
    var header = document.querySelector("header");
    if(header.classList.contains("bg-ch")){
        setInterval(function(){
            let im = ["url('img/hero.webp')","url('img/hero2.jpg')","url('img/3.jpg')","url('img/4.jpg')","url('img/5.jpg')","url('img/6.jpg')"];
            let I = Math.floor(Math.random() * 6);
            let finalI = im[I];
            header.style.backgroundImage = finalI
        },5000)
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