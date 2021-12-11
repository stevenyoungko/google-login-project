const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


mongoose
  .connect(
    "mongodb+srv://778899:778899password@cluster0.ihne3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  ).then(() => {
    console.log('Connect to mongodb atlas.')
  }).catch(err => {
    console.log(err)
  })

// middleware
app.set('view engine', 'ejs')
app.use(express.json()) // 解析 json
app.use(express.urlencoded({ extended: true })) // 解析 urlencoded格式的請求

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(8080, () => {
  console.log('Server running on port 8080.')
})