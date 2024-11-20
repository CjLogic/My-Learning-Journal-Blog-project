// Blog posts data
const posts = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        date: "April 20, 2024",
        image: "https://picsum.photos/seed/1/800/500",
        excerpt: "Learn the fundamentals of web development and start your journey as a developer...",
        content: `
            <h1>Getting Started with Web Development</h1>
            <p class="date">April 20, 2024</p>
            <img src="https://picsum.photos/seed/1/800/500" alt="Blog 1">
            <p>Web development is an exciting field that combines creativity with technical skills. In this post, we'll explore the basic concepts and tools you need to get started.</p>
            <h2>The Three Core Technologies</h2>
            <p>At the heart of web development are three fundamental technologies:</p>
            <ul>
                <li>HTML for structure</li>
                <li>CSS for styling</li>
                <li>JavaScript for interactivity</li>
            </ul>
            <p>Understanding these technologies is crucial for becoming a successful web developer. Each plays a vital role in creating modern web applications.</p>
            <h2>Getting Started</h2>
            <p>To begin your journey in web development, follow these steps:</p>
            <ol>
                <li>Learn HTML basics and document structure</li>
                <li>Style your pages with CSS</li>
                <li>Add interactivity with JavaScript</li>
                <li>Practice building simple projects</li>
                <li>Learn about responsive design</li>
            </ol>
            <p>Remember, the key to success is consistent practice and building real projects.</p>
        `
    },
    {
        id: 2,
        title: "CSS Best Practices",
        date: "April 19, 2024",
        image: "https://picsum.photos/seed/2/800/500",
        excerpt: "Discover the best practices for writing maintainable and scalable CSS...",
        content: `
            <h1>CSS Best Practices</h1>
            <p class="date">April 19, 2024</p>
            <img src="https://picsum.photos/seed/2/800/500" alt="Blog 2">
            <p>Writing good CSS is about more than just making things look pretty. It's about creating maintainable, scalable stylesheets that can grow with your project.</p>
            <h2>Key Principles</h2>
            <p>Here are some key principles to follow when writing CSS:</p>
            <ul>
                <li>Use meaningful class names</li>
                <li>Keep specificity low</li>
                <li>Organize your code well</li>
                <li>Use CSS custom properties</li>
                <li>Implement responsive design patterns</li>
            </ul>
            <p>Following these practices will help you write better CSS that's easier to maintain and scale.</p>
            <h2>Advanced Techniques</h2>
            <p>Once you've mastered the basics, explore these advanced concepts:</p>
            <ul>
                <li>CSS Grid and Flexbox</li>
                <li>CSS Animations and Transitions</li>
                <li>CSS Custom Properties</li>
                <li>CSS Modules and Architecture</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "JavaScript Tips and Tricks",
        date: "April 18, 2024",
        image: "https://picsum.photos/seed/3/800/500",
        excerpt: "Enhance your JavaScript skills with these essential tips and tricks...",
        content: `
            <h1>JavaScript Tips and Tricks</h1>
            <p class="date">April 18, 2024</p>
            <img src="https://picsum.photos/seed/3/800/500" alt="Blog 3">
            <p>Master JavaScript with these essential tips and tricks that every developer should know.</p>
            <h2>Modern JavaScript Features</h2>
            <ul>
                <li>Arrow Functions</li>
                <li>Destructuring</li>
                <li>Spread Operator</li>
                <li>Async/Await</li>
            </ul>
            <p>Understanding these features will make your code more efficient and readable.</p>
        `
    },
    {
        id: 4,
        title: "Responsive Design Guide",
        date: "April 17, 2024",
        image: "https://picsum.photos/seed/4/800/500",
        excerpt: "Master the art of creating responsive websites that work on all devices...",
        content: `
            <h1>Responsive Design Guide</h1>
            <p class="date">April 17, 2024</p>
            <img src="https://picsum.photos/seed/4/800/500" alt="Blog 4">
            <p>Learn how to create websites that look great on any device.</p>
            <h2>Core Concepts</h2>
            <ul>
                <li>Flexible Grids</li>
                <li>Media Queries</li>
                <li>Responsive Images</li>
                <li>Mobile-First Design</li>
            </ul>
            <p>These principles form the foundation of modern responsive web design.</p>
        `
    },
    {
        id: 5,
        title: "Web Performance Optimization",
        date: "April 16, 2024",
        image: "https://picsum.photos/seed/5/800/500",
        excerpt: "Learn how to optimize your website for better performance and user experience...",
        content: `
            <h1>Web Performance Optimization</h1>
            <p class="date">April 16, 2024</p>
            <img src="https://picsum.photos/seed/5/800/500" alt="Blog 5">
            <p>Optimize your website for the best possible user experience.</p>
            <h2>Performance Metrics</h2>
            <ul>
                <li>Loading Speed</li>
                <li>Time to Interactive</li>
                <li>First Contentful Paint</li>
                <li>Core Web Vitals</li>
            </ul>
            <p>Understanding these metrics is crucial for building fast websites.</p>
        `
    },
    {
        id: 6,
        title: "Modern Web APIs",
        date: "April 15, 2024",
        image: "https://picsum.photos/seed/6/800/500",
        excerpt: "Explore the latest web APIs and how to use them in your projects...",
        content: `
            <h1>Modern Web APIs</h1>
            <p class="date">April 15, 2024</p>
            <img src="https://picsum.photos/seed/6/800/500" alt="Blog 6">
            <p>Discover the power of modern web APIs and how they can enhance your applications.</p>
            <h2>Popular Web APIs</h2>
            <ul>
                <li>Fetch API</li>
                <li>Intersection Observer</li>
                <li>Web Storage</li>
                <li>Service Workers</li>
            </ul>
            <p>These APIs provide powerful features for modern web applications.</p>
        `
    }
];