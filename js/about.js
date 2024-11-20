// About page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Load recent posts
    const recentPosts = posts.slice(0, 3);
    const recentPostsGrid = document.querySelector('.recent-posts-grid');

    recentPosts.forEach(post => {
        recentPostsGrid.innerHTML += `
            <article class="blog-card">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-content">
                    <h2>${post.title}</h2>
                    <p class="date">${post.date}</p>
                    <p class="excerpt">${post.excerpt}</p>
                    <a href="post.html?id=${post.id}" class="read-more">Read More</a>
                </div>
            </article>
        `;
    });

    // Handle "View More" button
    const viewMoreBtn = document.getElementById('view-more');
    let currentlyShown = 3;

    viewMoreBtn.addEventListener('click', () => {
        const nextPosts = posts.slice(currentlyShown, currentlyShown + 3);

        if (nextPosts.length > 0) {
            nextPosts.forEach(post => {
                recentPostsGrid.innerHTML += `
                    <article class="blog-card">
                        <img src="${post.image}" alt="${post.title}">
                        <div class="blog-content">
                            <h2>${post.title}</h2>
                            <p class="date">${post.date}</p>
                            <p class="excerpt">${post.excerpt}</p>
                            <a href="post.html?id=${post.id}" class="read-more">Read More</a>
                        </div>
                    </article>
                `;
            });
            currentlyShown += 3;

            if (currentlyShown >= posts.length) {
                viewMoreBtn.style.display = 'none';
            }
        }
    });
});