const blog = [
    {
        title: "How I built this website from scratch",
        description: "This is the story of how I have designed and coded this website.",
        date: "18/07/26",
        link: "blogs/blog1.html",
        image: "blog-cover/cover1.png",
    }
]

const blogsGrid = document.getElementById('blogs-grid');

blog.forEach(function(blog) {
    blogsGrid.innerHTML += `
        <div class="blog-card">
            <img src="${blog.image}" class="blog-thumb"/>
            <div class="blog-info">
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-desc">${blog.description}</p>
                <p class="blog-date">${blog.date}</p>
                <a href="${blog.link}" class="blog-btn">Read the Blog →</a>
            </div>
        </div>
    `;
});