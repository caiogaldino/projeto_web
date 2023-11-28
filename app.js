const express = require('express')
const cors = require('cors')
const app = express()
const userRoute = require('./routes/userRoute'); 
const reservaRoute = require('./routes/reservaRoute');
const motoRoute = require('./routes/motoRoute'); 
const aluguelRoute = require('./routes/aluguelRoute'); 

app.use(express.json())
app.use(cors());

//db conn
const conn = require("./db/conn.js");
conn();

// routes
app.use(userRoute);
app.use(reservaRoute); 
app.use(motoRoute); 
app.use(aluguelRoute); 

//porta
app.listen(3000, function() {
    console.log("Servidor Conectado/Online!")
})
