function initDescription(clickId) {
    var projectsContainer = document.getElementById('projects');
    projectsContainer.style.display = 'none';

    var projectDescription = document.getElementById('projectDescription');
    projectDescription.style.visibility = 'visible';
    projectDescription.addEventListener('click', function() {
        navigate('projects', true);
        this.style.visibility = 'hidden';
    });

    loadDescription(clickId);
}

function loadDescription(clickId) {
    var descriptionBlock = document.getElementById('descriptionText');
    var descriptionPath = 'projectsHTML/' + clickId;
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', descriptionPath + '.html', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            descriptionBlock.innerHTML = this.responseText;
        }
    };
}
