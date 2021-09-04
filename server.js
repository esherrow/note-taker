const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoutes);
app.use('/', htmlRoutes)

app.listen(3001,()=>{
    console.log(`API server now on port ${PORT}`);
});