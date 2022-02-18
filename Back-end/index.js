const connectToMongo = require('./db');
var cors = require('cors')
const express = require('express');
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
// to enable to sent json file
app.use(express.json())

// require routes pass from here
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port,()=>{
    console.log(`Vsit at : http:\\localhost:${port}`)
})
