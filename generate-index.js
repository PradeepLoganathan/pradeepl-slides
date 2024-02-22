const fs = require('fs');
const path = require('path');

const presentationsDir = './public';
const outputIndexFile = path.join(presentationsDir, 'index.html');

fs.readdir(presentationsDir, (err, folders) => {
  if (err) throw err;

  const links = folders.map(folder => `<li><a href="${folder}/index.html">${folder}</a></li>`).join('\n');

  const indexContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Presentations</title>
    </head>
    <body>
        <h1>Available Presentations</h1>
        <ul>
            ${links}
        </ul>
    </body>
    </html>
  `;

  fs.writeFile(outputIndexFile, indexContent, (err) => {
    if (err) throw err;
    console.log('Index file generated!');
  });
});
