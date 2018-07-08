var homeBut, aboutBut, projBut, photoBut, contactBut;

function initButtons() {
  var navList = document.getElementById('navList');
  var navItems = navList.getElementsByClassName('navItem');
  for (var i = 0; i < navItems.length; i++)
  {
    navItems[i].addEventListener('click', function() {
      var oldSelection = document.getElementsByClassName('navActive');
      oldSelection[0].className = oldSelection[0].className.replace(' navActive', '');
      var oldSelectionText = document.getElementsByClassName('textActive');
      oldSelectionText[0].className = oldSelectionText[0].className.replace(' textActive', '');
      this.className += ' navActive';
      this.children[0].className += ' textActive';

      var navStr = this.id.replace('Nav', '');
      navigate(navStr);
    });
  }

  navigate('home');
}

function clickTester() {
  console.log("cliked!");
}

function navigate(pageName) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', pageName + '.html', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200)
    {
      document.getElementById('contentGrid').innerHTML = this.responseText;
    }
  };
}

window.addEventListener('load', initButtons);
