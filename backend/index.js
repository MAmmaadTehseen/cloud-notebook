const connectToMongo = require('./db');
const express = require('express')
connectToMongo()

const app = express()
const port = 5000
app.use(express.json())

//avalable end points
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Cloud Note book listening on port ${port}`)
})
