window.onload   = function() {loadFunction()};
window.onscroll = window.onresize = function() {checkSizes()};


function loadFunction() {
    var element = null;
    if(document.getElementById('home_li')) {
        element = document.getElementById('home_li');
    } else if(document.getElementById('about_li')) {
        element = document.getElementById('about_li');
    } else if(document.getElementById('education_li')) {
        element = document.getElementById('education_li');
    }

    element.style.color  = 'lightblue';
    element.style.border = 'solid 1px lightblue';

    checkWidthForLogo();
};

function checkSizes() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('nav-bar').style.height = '50px';
    document.getElementById('logo').style.fontSize  = '32px';
  } else {
    document.getElementById('nav-bar').style.height = '25vh';
    document.getElementById('logo').style.fontSize  = '48px';
  }

  checkWidthForLogo();
};

function checkWidthForLogo() {
  // pelo CSS não funciona corretamente
  if (document.body.offsetWidth < 660) {
    document.getElementById('logo').style.fontSize = '32px';
  }
};
