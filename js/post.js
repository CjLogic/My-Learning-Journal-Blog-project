// Single post page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    // Find the post
    const post = posts.find(p => p.id === postId);

    if (post) {
        // Display the post
        document.getElementById('post-content').innerHTML = post.content;
        document.title = `${post.title} - My Blog`;

        // Load recent posts (excluding current post)
        const recentPosts = posts
            .filter(p => p.id !== postId)
            .slice(0, 3);

        const recentPostsGrid = document.querySelector('.recent-posts-grid');
        recentPostsGrid.innerHTML = ''; // Clear existing content

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
            const remainingPosts = posts
                .filter(p => p.id !== postId)
                .slice(currentlyShown);

            remainingPosts.forEach(post => {
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

            // Hide the button after showing all posts
            viewMoreBtn.style.display = 'none';
        });
    } else {
        window.location.href = 'index.html';
    }
});