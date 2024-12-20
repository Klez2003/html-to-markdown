const fs = require('fs');
const TurndownService = require('turndown');

// Initialize Turndown Service
const turndownService = new TurndownService();

// Read the HTML file
const htmlFilePath = './index.html'; // Replace with your HTML file path
const markdownFilePath = './README.md'; // Desired Markdown output file

fs.readFile(htmlFilePath, 'utf8', (err, html) => {
    if (err) {
        console.error('Error reading the HTML file:', err);
        return;
    }

    // Convert HTML to Markdown
    const markdown = turndownService.turndown(html);

    // Save the Markdown to a file
    fs.writeFile(markdownFilePath, markdown, (err) => {
        if (err) {
            console.error('Error writing the Markdown file:', err);
            return;
        }
        console.log('Markdown file has been created:', markdownFilePath);
    });
});
