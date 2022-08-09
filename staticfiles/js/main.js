function showSearchBlock(){
	document.querySelector(".search_block").style = "top:0px; transition:all 0.3s;"
}

function closeSearchBlock(){
	document.querySelector(".search_block").style = "top:-200%; transition:all 0.3s;"
}

/* FOR NAVBAR IN MOBILE */
let num = 0;
function navbarShowClose(){
	 num++
	function myFunction(x) {
		  /*MEDIA*/
		  if (x.matches) { 
  				   /* NAVBAR */
				   if(num == 2){num = 0}
				   if(num == 1){
				   	document.querySelector(".navbar_node").style = "height:auto; "
				   }
				   if(num == 0){
				   		document.querySelector(".navbar_node").style = "height:84px; "
				   }

				
				   			   
				    /* NAVBAR */
		  } else {
		  		num = 0
		    	document.querySelector(".navbar_node").style = "height:84px;"
		  }
		  /*MEDIA*/
	}

	var x = window.matchMedia("(max-width:1025px)")
	myFunction(x)
	x.addListener(myFunction)
	
};

/* FOR DROPDOWNS IN MOBILE */
let num2 = 0;
function dropdowns(e){
	let test = e.querySelector(".dropdown_hover");
	function myFunction2(x){
		if (x.matches){
			num2 ++ 
			if(num2 == 2){num2 = 0}
			if(num2 == 1){
				test.style = 'display:block;'
			}
			if(num2 == 0){
				test.style = 'display:none;'

			}
		}
		else{
			test.style = ''
		}
	}
	var x = window.matchMedia("(max-width:1025px)")
	myFunction2(x)
	x.addListener(myFunction2)
}

/* ON SCROLL FIXED NAVBAR */
 window.addEventListener('scroll', function(){
 	function myFunction3(y) {
		  if (y.matches) { 
		   		let scroll = Math.ceil(window.scrollY)
				if(scroll >= 1100){
					document.querySelector(".header_top_navbar").style = "top:0; left:0; background-color:white; position:fixed; transition:all 0.3s;"
				}
				if(scroll < 1100){
				document.querySelector(".header_top_navbar").style = "position:absolute;  background: #f6f6f6; transition:all 0.3s;"
				}
	
		  } else {
				document.querySelector(".header_top_navbar").style = "position:absolute;  background: #f6f6f6; transition:all 0.3s;"
		    
		  }
		}

		var y = window.matchMedia("(min-width:1025px)")
		myFunction3(y) 
		y.addListener(myFunction3)
 		/**/
			
			
});

/* COUNTER */
window.onscroll = function(){
let scrollNumber = Math.ceil(window.scrollY)
	if(scrollNumber >= 1400){
		let counter = document.querySelectorAll(".main_sc2_counter");
			counter.forEach( function(e){
				let h1 = e.querySelector("h1");
				let id = e.id
				if(h1.textContent == 0){
						let start;
						const el = h1
						const final = parseInt(id, 10)
						const duration = 3000 
						const step = ts => {
						  if (!start) {
						    start = ts
						  }
						  let progress = (ts - start) / duration 

						  el.textContent = Math.floor(progress * final)
						  if (progress < 1) {
						  
						    requestAnimationFrame(step) 
						  }
						}
						requestAnimationFrame(step)
				}

			})
			
	}
	if(scrollNumber >= 2600){
		document.querySelector(".sc4_center_picture").style = "transform:translateY(0%); opacity: 1; transition: all 0.5s;"

	}
	if(scrollNumber >= 2650){
		let left_items = document.querySelectorAll(".left_text_blocks");
		let right_items = document.querySelectorAll(".right_text_blocks");
		left_items[0].style = "transform: translateX(0%); opacity:1; transition:all 0.5;"
		right_items[0].style = "transform: translateX(0%); opacity:1; transition:all 0.5;"
		setInterval(()=>{
		left_items[1].style = "transform: translateX(0%); opacity:1; transition:all 0.5;"
		right_items[1].style = "transform: translateX(0%); opacity:1; transition:all 0.5;"
		},100)
		setInterval(()=>{
		left_items[2].style = "transform: translateX(0%); opacity:1; transition:all 0.5;"
		right_items[2].style = "transform: translateX(0%); opacity:1; transition:all 0.5;"
		},350)
		
	}
}

/*FOR SLIDER */
var swiper = new Swiper('.sc5_swiper', {
        slidesPerView:3,
        loop:false,
         autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        grabCursor: true,
        direction: getDirection(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          },
        },
      });


      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 992 ? 'vertical' : 'horizontal';

        return direction;
      
}

 var main_sc6_swiper = new Swiper(".sc6_swiper", {
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: true,
        centeredSlides: true,
        loop:true,
         autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
      });

  var main_sc7_swiper = new Swiper(".sc7_swiper", {
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: true,
        loop:false,
         autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
      });

 window.onload = function(){
 	document.querySelector(".mobile_picture_right").style = "transform:translateX(0%); opacity:1;transition:all 0.8s;";
 	setInterval(()=>{
 	document.querySelector(".mobile_picture_left").style = "transform:translateX(0%); opacity:1;transition:all 0.8s;";
 	document.querySelector(".header_middle_left").style = "transform:inherit; opacity:1;transition:all 0.8s;";
 	},400)

 }