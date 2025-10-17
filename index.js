// require('dotenv').config()
// console.log("upload aur meri struggle");
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/loveleto', (req, res) => {
//   res.send('<h2> please login <h2>')
// })
// app.get('/twitter',(req, res) => {
//   res.send('hiteshdotcom')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files like .cur and .png
app.use(express.static(__dirname));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Route to serve your HTML form
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <head>
    <style>
      html, body, h2, form, label, input, button {
        cursor: url('white rose.cur'), auto;
      }
      body {
        background-image: url("custom light backgro.png");
        height: 800px; width: 800px;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: url('white rose.cur'), auto;
      }
      .file-upload {
        display: none;
      }
      .custom-label {
        display: inline-table;
        padding: 10px 10px;
        background: linear-gradient(to right, #ff6f61, #ff9a8d, #f2d7d5);
        color: #116a97;
        border-radius: 50px;
        font-family: 'Great Vibes', cursive;
      }
      button {
        background: linear-gradient(to right, #E0E0E0, #333333);
        color: #5c0637;
        border-radius: 60px;
        transition: all 0.3s ease;
        cursor: url("[Angel heart (red ver.)] link select.cur"), auto;
      }
      .custom-label:hover {
        background: linear-gradient(to right, #8a0028, #be8fbe, #ff6f61);
        cursor: url("[Angel heart (red ver.)] link select.cur"), auto;
      }
      button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(161, 46, 95, 0.4);
        background: linear-gradient(to right, #A12E5F, #d43115);
      }
    </style>
    </head>
    <body>
      <h2>Upload your beauty</h2>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="image" class="custom-label">Select your true colors </label>
        <input type="file" id="image" name="image" class="file-upload" accept="image/*" required>
        <button type="submit">Reveal</button>
      </form>
    </body>
    </html>
  `);
});

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('We couldnt find your beauty');
  }
  console.log('File uploaded:', req.file); 
  res.send(`<h2>You have sucessfullyt uploaded your beauty</h2><p>File name: ${req.file.filename}</p>`);
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
