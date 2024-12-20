  Monarch Upload Script body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.6; background-color: #f9f9f9; color: #333; } h1, h2, h3 { color: #2c3e50; } code, pre { background-color: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace; display: block; margin-bottom: 1em; overflow-x: auto; } a { color: #3498db; text-decoration: none; } a:hover { text-decoration: underline; } ul { list-style-type: square; margin-left: 20px; }

Monarch Upload Script
=====================

A lightweight Python script for uploading images, GIFs, and videos to Monarch Upload API.

Table of Contents
-----------------

*   [Features](#features)
*   [Usage](#usage)
*   [Dependencies](#dependencies)
*   [Example](#example)

Features
--------

*   Supports chunked uploads for large files.
*   Works with various file types: `.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.webp`, `.tiff`, `.mp4`, `.mkv`, `.avi`, `.mov`, `.flv`, `.wmv`, `.mp3`, `.wav`, `.ogg`, `.webm`.
*   Handles multi-part form data for API communication.

Usage
-----

Run the script from your terminal:

    python3 monarch_upload.py <file_path>

Replace `<file_path>` with the path to the file you want to upload.

Dependencies
------------

Ensure you have the following Python modules installed:

    pip install requests

Example
-------

To upload a file named `video.mp4`, run:

    python3 monarch_upload.py video.mp4

Upon success, the script will print the uploaded file's URL:

    https://api.monarchupload.cc/v3/file/url

© 2024 Monarch Upload Project. All rights reserved.# html-to-markdown
