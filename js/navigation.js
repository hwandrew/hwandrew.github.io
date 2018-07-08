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
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', pageNum + '.html', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200)
    {
      document.getElementById('contentGrid').innerHTML = this.responseText;
    }
  };
}

window.addEventListener('load', initButtons);
