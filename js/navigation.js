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
}

function clickTester() {
  console.log("cliked!");
}

function navigate(pageNum) {
  // switch (pageNum) {
  //   case 'home':
  //     $('#contentGrid').load("home.html");
  //     break;
  //   case 'about':
  //     $('#contentGrid').load("about.html");
  //     break;
  //   case 'projects':
  //     $('#contentGrid').load("home.html");
  //     break;
  //   case 'photos':
  //     $('#contentGrid').load("home.html");
  //     break;
  //   case 'contact':
  //     $('#contentGrid').load("home.html");
  //     break;
  //   default:
  //     $('#contentGrid').load("home.html");
  //     break;
  // }
  $('#contentGrid').load(pageNum + ".html");
}

window.addEventListener('load', initButtons);
