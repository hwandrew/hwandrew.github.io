var homeBut, aboutBut, projBut, photoBut, contactBut;

function initButtons() {
  var navList = document.getElementById('navList');
  var navItems = navList.getElementsByClassName('navItem');
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
      var oldSelection = document.getElementsByClassName('navActive');
      oldSelection[0].className = oldSelection[0].className.replace(' navActive', '');
      var oldSelectionText = document.getElementsByClassName('textActive');
      oldSelectionText[0].className = oldSelectionText[0].className.replace(' textActive', '');
      this.className += ' navActive';
      this.children[0].className += ' textActive';

      var navStr = this.id.replace('Nav', '');
      navigate(navStr, true);
    });
  }

  navigate('home', true);
}

function clickTester() {
  console.log('cliked!');
}

function navigate(pageName, fromUserNavigation) {
  /* --- Load HTML --- */
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', pageName + '.html', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('contentGrid').innerHTML = this.responseText;
    }
  };

  /* --- Update buttons --- */
  var oldSelection = document.getElementsByClassName('navActive');
  oldSelection[0].className = oldSelection[0].className.replace(' navActive', '');
  var oldSelectionText = document.getElementsByClassName('textActive');
  oldSelectionText[0].className = oldSelectionText[0].className.replace(' textActive', '');
  var currElement = document.getElementById(pageName + 'Nav');
  currElement.className += ' navActive';
  currElement.children[0].className += ' textActive';


  /* --- Handle history --- */
  if (fromUserNavigation) {
    var stateObj = {pageName: pageName};
    if (pageName !== 'home') {
      window.history.pushState(stateObj, '');
    }
    else {
      window.history.pushState(stateObj, '', '/');
    }
  }
}

window.addEventListener('load', initButtons);
window.addEventListener('popstate', function(event) {
  navigate(event.state.pageName, false);
});