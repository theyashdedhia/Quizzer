import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

import connect from './database/connection.js';

const app = express();


// MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
config();

// PORT
const PORT = process.env.PORT || 8080;

// ROUTES
app.use('/api', router)

app.get('/', (req, res) =>{
    try{
        res.json('Get Request')        
    }catch(error){
        res.json(error)
    }
})


// Start server only if we have valid connection
connect().then(()=>{
    try{
        app.listen(PORT, ()=>{
            console.log(`Server running on http://localhost:${PORT}`)
        })
    }catch(error){
        console.log('Cannot connect to db')
    }
}).catch(error => {
    config.log('Datbase invalid connection')
})
