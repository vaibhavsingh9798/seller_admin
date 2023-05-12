const Sequlelize = require('sequelize')

const sequlize = new Sequlelize('test','root','Vaibhav@123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequlize ; 