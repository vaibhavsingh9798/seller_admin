const Sequlelize = require('sequelize')

const sequlize = new Sequlelize('projects','root','Vaibhav@123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequlize ; 