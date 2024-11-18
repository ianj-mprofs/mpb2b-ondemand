const sessions = [
    {
        sessionTitle: 'Test Title #1',
        sessionTopic: 'Test Topic #1',
        speakerName: 'John Doe',
        imgLink: 'placeholder-image.jpg',
        slideLink: 'marketingprofs.com'
    },
    {
        sessionTitle: 'Test Title #2',
        sessionTopic: 'Test Topic #2',
        speakerName: 'Jane Doe',
        imgLink: 'placeholder-image.jpg',
        slideLink: 'marketingprofs.com'
    },
    {
        sessionTitle: 'Test Title #3',
        sessionTopic: 'Test Topic #3',
        speakerName: 'Lame Doe',
        imgLink: 'placeholder-image.jpg',
        slideLink: 'marketingprofs.com'
    },
    {
        sessionTitle: 'Test Title #4',
        sessionTopic: 'Test Topic #4',
        speakerName: 'Lame Doe',
        imgLink: 'placeholder-image.jpg',
        slideLink: 'marketingprofs.com'
    },
];

// document.addEventListener("DOMContentLoaded", function () {
//     let counter = 0;
//     const sessionsEl = document.getElementById('sessions-wrapper');
//     sessions.forEach((session) => {

//         const newCol = document.createElement("div");
//         newCol.classList.add('col');
//         newCol.innerHTML += `<div class="card">
//                                 <div class="row g-0">
//                                     <div class="col-3 col-md-12">
//                                         <img src="/events/mpb2b24/images/thumbnails/${session.imgLink}" class="w-100 rounded-start" alt="...">
//                                     </div>
//                                     <div class="col-9 col-md-12">
//                                         <div class="card-body">
//                                             <p class="prehead">${session.sessionTopic}</p>
//                                             <h4 class="card-title">${session.sessionTitle}</h4>
//                                             <p class="card-text">${session.speakerName}</p>
//                                             <small>
//                                                 <a href="${session.slideLink}" class="card-link">Download Slides</a>
//                                             </small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>`


//         sessionsEl.appendChild(newCol);
//         counter++;
//     });
// });

function buildSessions() {
    let counter = 0;
    const sessionsEl = document.getElementById('sessions-wrapper');
    sessions.forEach((session) => {

        const newCol = document.createElement("div");
        newCol.classList.add('col');
        newCol.innerHTML += `<div class="card">
                                <div class="row g-0">
                                    <div class="col-3 col-md-12">
                                        <img src="/events/mpb2b24/images/thumbnails/${session.imgLink}" class="w-100 rounded-start" alt="...">
                                    </div>
                                    <div class="col-9 col-md-12">
                                        <div class="card-body">
                                            <p class="prehead">${session.sessionTopic}</p>
                                            <h4 class="card-title">${session.sessionTitle}</h4>
                                            <p class="card-text">${session.speakerName}</p>
                                            <small>
                                                <a href="${session.slideLink}" class="card-link">Download Slides</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        sessionsEl.appendChild(newCol);
        counter++;
    });
};