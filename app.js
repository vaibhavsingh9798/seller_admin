const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const sequelize = require('./util/database')
const productRoute = require('./route/products')
const app = express();

app.use(cors())
//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/products',productRoute)
app.get('/',(req,res) =>{
    res.send('HOME PAGE')
})

sequelize.sync()
.then(() =>{
    app.listen(3001,()=>{
        console.log('server is runing on port 3001')
    })
})
.catch(err => console.log(err))
