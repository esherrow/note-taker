const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
// const { notes } = require('./db/db');

// app.get('/api/notes', (req, res)=>{
//     res.json(notes);
// });

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

app.listen(3001,()=>{
    console.log(`API server now on port ${PORT}`);
});