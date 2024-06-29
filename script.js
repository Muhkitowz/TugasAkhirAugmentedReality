document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 3000);
});

function loadSection(sectionFile) {
    const sectionContent = document.getElementById('section-content');
    fetch(`sections/${sectionFile}`)
        .then(response => response.text())
        .then(data => {
            sectionContent.innerHTML = data;
            sectionContent.classList.remove('hidden');
            document.getElementById('dashboard').classList.add('hidden');
        });
}

function showDashboard() {
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('section-content').classList.add('hidden');
}