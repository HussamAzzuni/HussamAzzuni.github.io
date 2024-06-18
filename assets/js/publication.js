const publications = [
    { date: "May 2024", description: "Paper published in IEEE Consumer Electronics Magazine (Smartphone Video-based Monocular 3D Reconstruction)" },
    { date: "Jan 2024", description: "Paper published in IEEE ICCE 2024 (uTalk: Bridging the Gap Between Humans and AI)" },
    { date: "Jan 2023", description: "Graduated with an MSc in Computer Vision from MBZUAI" },
    { date: "Mar 2022", description: "Paper published in IEEE ISBIC 2022 (Color space-based hover-net for nuclei instance segmentation and classification)" }
];

function generateNewsHTML() {
    let html = '<article id="LatestNews">\n';
    html += '<div class="headline">Latest News</div>\n';

    publications.forEach(publication => {
        html += '<div class="news-item">\n';
        html += `\t<div class="news-date">${publication.date}</div>\n`;
        html += `\t<div class="news-item">${publication.description}</div>\n`;
        html += '</div>\n';
    });

    html += '</article>';

    document.getElementById('container').innerHTML = html;
}

// Call the function to generate the HTML on page load or at an appropriate time
generateNewsHTML();
