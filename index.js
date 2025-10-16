require('dotenv').config()
console.log("upload aur meri struggle");
const express = require('express')
const app = express()
const port = 3000

app.get('/loveleto', (req, res) => {
  res.send('<h2> please login <h2>')
})
app.get('/twitter',(req, res) => {
  res.send('hiteshdotcom')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
