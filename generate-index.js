const fs = require('fs');
const path = require('path');

// Define the directory containing your content
const presentationsDir = './public';
const outputIndexFile = path.join(presentationsDir, 'index.html');

// Read the contents of the public directory
fs.readdir(presentationsDir, { withFileTypes: true }, (err, items) => {
  if (err) throw err;

  // Filter directories that contain an `index.html` file
  const folders = items
    .filter(item => item.isDirectory())
    .filter(folder => {
      const folderPath = path.join(presentationsDir, folder.name);
      return fs.existsSync(path.join(folderPath, 'index.html'));
    })
    .map(folder => folder.name);

  // Generate HTML links for each directory
  const links = folders
    .map(folder => `<li><a href="${folder}/index.html">${folder.replace(/-/g, ' ')}</a></li>`)
    .join('\n');

  // Generate the index.html content
  const indexContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Presentations</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <!-- Header with Menu -->
      <header>
          <div class="container">
              <!-- Logo/Name -->
              <div class="logo">
                  <img src="https://pradeepl.com/logo.png" alt="Pradeep Loganathan" class="logo-img">
                  <span>Pradeep Loganathan</span>
              </div>

              <!-- Navigation Menu -->
              <nav class="main-nav">
                  <ul>
                      <li><a href="https://pradeepl.com">Home</a></li>
                      <li><a href="https://pradeepl.com/blog">Blog</a></li>
                      <li><a href="https://slides.pradeepl.com">Slides</a></li>
                      <li><a href="https://pradeepl.com/podcast">Podcasts</a></li>
                      <li><a href="https://pradeepl.com/about">About Me</a></li>
                  </ul>
              </nav>

              <!-- Search Icon -->
              <div class="search-icon">
                  <a href="https://pradeepl.com/search">
                      <img src="https://pradeepl.com/icons/search.svg" alt="Search">
                  </a>
              </div>
          </div>
      </header>

      <!-- Main Content -->
      <main>
          <ul>
              ${links} <!-- Dynamically generated links -->
          </ul>
      </main>

      <!-- Footer -->
      <footer>
          <p>&copy; 2024 Pradeep Loganathan</p>
      </footer>
  </body>
  </html>
  `;

  // Write the index.html file
  fs.writeFile(outputIndexFile, indexContent, (err) => {
    if (err) throw err;
    console.log('Index file with dynamic links and menu generated successfully!');
  });
});
