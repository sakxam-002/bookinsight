const express = require('express')
const cors = require('express')
const ConnectDb = require('./01-database/connectDb')
const app = express()
const port = 8000
const adminUserRoutes = require('./04-routes/01-adminUserRoutes')


ConnectDb()
app.use(cors())
app.use(express.json())

app.use("/", adminUserRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})