const express = require ('express');
const mongoose= require ('mongoose');
const bodyParser = require ('body-parser');
require('dotenv').config();

const user = require ('./backend/routes/api/user')

const slot = require ('./backend/routes/api/slot')
const appointment = require ('./backend/routes/api/appointments')

const service = require ('./backend/routes/api/service')
const category = require ('./backend/routes/api/service')


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

app.use('/api/users', user);
app.use('/api/slots', slot);
app.use('/api/appointments', appointment );
app.use('/api/service', service );
app.use('/api/categories', category)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
