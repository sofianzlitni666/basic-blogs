// importation
const express = require("express") ;
const app = express();


// dotenv
require("dotenv").config();
const PORT = process.env.PORT

// middleware
app.use(express.json())


// routes
app.use('/api/user' , require ('./routes/user'))
app.use('/api/post', require('./routes/post'))



// database
const connectDB = require ('./config/connectDB');
connectDB();

// testing
app.get('/', (req, res) => {
    res.send('Hello from Node.js!')
})



// error catching
app.listen(PORT , error =>{
    
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
}) 
