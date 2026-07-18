const blog = [
    {
        title: "Title",
        description: "Description-zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
        date: "xx/yy/zz",
        link: "blogs/",
        image: "blog-cover/",
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