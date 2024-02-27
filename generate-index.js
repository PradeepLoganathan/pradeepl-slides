const fs = require('fs');
const path = require('path');

const presentationsDir = './public';
const outputIndexFile = path.join(presentationsDir, 'index.html');

fs.readdir(presentationsDir, (err, folders) => {
  if (err) throw err;

  const links = folders.map(folder => `<li><a href="${folder}/index.html">${folder}</a></li>`).join('\n');

  const indexContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Blog</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <h1>My Blog</h1>
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
      </header>
  
      <main>
          <section class="blog-posts">
              <article>
                  <h2>Blog Post Title 1</h2>
                  <p class="meta">Posted on January 1, 2024 by Author Name</p>
                  <p>Short excerpt of the blog post goes here... </p>
                  <a href="#" class="read-more">Read More</a>
              </article>
              </section>
      </main>
  
      <footer>
          <p>&copy; 2024 Your Name</p>
      </footer>
  
      <script src="script.js"></script> 
  </body>
  </html>
  
  `;

  fs.writeFile(outputIndexFile, indexContent, (err) => {
    if (err) throw err;
    console.log('Index file generated!');
  });
});
