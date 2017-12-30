var homeBut, aboutBut, projBut, photoBut, contactBut;

function initButtons() {
  homeBut = document.getElementById('homeNav');
  homeBut.addEventListener('click', function(){
    navigate('home');
  });

  aboutBut = document.getElementById('aboutNav');
  aboutBut.addEventListener('click', function(){
    navigate('about');
  });

  projBut = document.getElementById('projNav');
  projBut.addEventListener('click', function(){
    navigate('projects');
  });

  photoBut = document.getElementById('photoNav');
  photoBut.addEventListener('click', function(){
    navigate('photos');
  });

  contactBut = document.getElementById('contactNav');
  contactBut.addEventListener('click', function(){
    navigate('contact');
  });

  navigate('home');
}

function clickTester() {
  console.log("cliked!");
}

function navigate(pageNum) {
  $('#contentGrid').load(pageNum + ".html");
}

window.addEventListener('load', initButtons);
