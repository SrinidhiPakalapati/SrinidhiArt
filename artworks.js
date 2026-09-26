const artworks = [
    { img: "artworks/waliart.jpeg", date: "26/09/2026"},
    { img: "artworks/venkateshwara.jpeg", date: "23/09/2026"},
    { img: "artworks/pfp.jpeg", date: "29/06/2026"},
    { img: "artworks/elephant.jpeg", date: "27/06/2026" },
    { img: "artworks/mirrors.jpeg", date: "23/06/2025" },
    { img: "artworks/ship.jpeg", date: "14/05/2025" },
    { img: "artworks/rose.jpeg", date: "11/05/2025"}
]
const gallery = document.getElementById('gallery');

artworks.forEach(function(artwork) {
    gallery.innerHTML += `
    <div class="art-card">
        <img src="${artwork.img}"/>
        <div class="card-info">
            <p class="art-date">Made: ${artwork.date}</p>
        </div>
    </div>
    `;
});