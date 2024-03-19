const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const log = require('./middleware/log');

// sends console log of request methods and url's
app.use(log) 

//setting up server
///// parse incoming requests to json
app.use(express.json());
///// allows complex data types to pass through requests which mimic json data structures
app.use(express.urlencoded({extended:true}));
///// servers static files in public folder 
app.use(express.static('public'));
///// middleware that sends requests to routes folder
app.use(routes);

// opens server to listen to port
app.listen(PORT, ()=>{
    console.log(`LISTENING ON PORT ${PORT}`);
});

