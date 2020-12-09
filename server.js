const express = require ('express');
const mongoose= require ('mongoose');
const bodyParser = require ('body-parser');
require('dotenv').config();

const userRoute = require ('./backend/routes/api/userRoute')

const db = require('./backend/config/key').mongo_URL;

mongoose.connect(db,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB Connected...'))
.catch(error => console.log(error.reason));



const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoute);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
