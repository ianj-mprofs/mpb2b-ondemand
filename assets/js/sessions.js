const sessions = [
    {
        sessionTitle: '',
        sessionTopic: '',
        speakerName: '',
        speakerTitle: '',
        speakerCompany: '',
        imgLink: '',
    },
];

document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    const sessionsEl = document.getElementById('sessions-wrapper');
    projects.forEach((project) => {

        const newCol = document.createElement("div");
        newCol.classList.add('col');
        if (project.projectLink) {
            newCol.innerHTML += ``
        }
        
        sessionsEl.appendChild(newCol);
        counter++;
    });
});