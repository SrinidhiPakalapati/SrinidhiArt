const blog = [
    {
        title: "This is my first blog!!",
        description: "Nothing :| ",
        date: "15/01/26",
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
                <p class="blog-date">Published on: ${blog.date}</p>
                <a href="${blog.link}" class="blog-btn">Read the Blog →</a>
            </div>
        </div>
    `;
});