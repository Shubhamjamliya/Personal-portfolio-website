 // Add an event listner for hambactiveurger
 let ham=document.querySelector(".hamburger");
 let close=document.querySelector(".close")
 
 ham.addEventListener("click", e => {
    document.querySelector("#header").style.left = "0";
    ham.style.display="none"
    close.style.display="block";
})

 // Add an event listner for close
 close.addEventListener("click", e => {
    document.querySelector("#header").style.left = "-120%";
    close.style.display="none";
    ham.style.display="block";
})

//  Hero type effect
let type=new Typed('#changing-text', {
    strings:['Student @ IPS Academy,Indore','Front-end Developer','React Developer'],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
})

// Add an Event for header remove when clicked on btn
let a=(Array.from(document.querySelector(".page-nav-btn").getElementsByTagName('a')));
if(window.innerWidth < 1200) {
  a.forEach(e=>{
      e.addEventListener("click",()=>{
      document.querySelector("#header").style.left = "-120%";
      close.style.display="none";
      ham.style.display="block";
      })

    // Soft landing to particular section
    var path="#"+(e.href.split('#'))[1];
    $(e).click(function(e){
      e.preventDefault();
       $('html, body').animate({
        scrollTop: $(path).offset().top
    }, 1500);
  });
      
  })
}else{
  a.forEach(e=>{
    e.addEventListener("click",()=>{
    document.querySelector("#header").style.left ="0";
    })

    var path="#"+(e.href.split('#'))[1];
    $(e).click(function(e){
      e.preventDefault();
       $('html, body').animate({
        scrollTop: $(path).offset().top
    }, 1500);
  });

})
}


// BACK TO TOP FUNCTIONALITY
// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Soft landing to top
$("#top").click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $("#hero").offset().top
  }, 1500);
});

// for connecting contact form to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRclpZ2m5YoLAE-9Ju1jWdpqiWSKBk-U0PuLPvR_VSmurkYDKS3ZOqWy3l_uvp10FC/exec';
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Successfully!!";
        setTimeout(function() {
            msg.innerHTML="";
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})









