function initDescription(clickId) {
    var projectsContainer = document.getElementById('projects');
    projectsContainer.style.display = 'none';

    var projectDescription = document.getElementById('projectDescription');
    projectDescription.style.visibility = 'visible';
    projectDescription.addEventListener('click', function() {
        navigate('projects', true);
        this.style.visibility = 'hidden';
    });

    switch(clickId) {
        case "LucentSurge":
            loadLucentSurge();
            break;
        case "TerrainJumper":
            loadTerrainJumper();
            break;
        case "LegendOfZelda":
            loadLegendOfZelda();
            break;
        case "SpotifyVisualizer":
            loadSpotifyVisualizer();
            break;
        default:
            console.error(`id ${clickId} does not exist`);
            break;
    }
}

function loadLucentSurge() {
    var descriptionBlock = document.getElementById('descriptionText');
    descriptionBlock.innerHTML = "";
}

function loadTerrainJumper() {
    var descriptionBlock = document.getElementById('descriptionText');
}

function loadLegendOfZelda() {
    var descriptionBlock = document.getElementById('descriptionText');
}

function loadSpotifyVisualizer() {
    var descriptionBlock = document.getElementById('descriptionText');
}