let sequelize = require('../util/database')
let Sequelize = require('sequelize')

const Products = sequelize.define('product',{
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
      }, 
      sprice:{
        type : Sequelize.STRING,
        allowNull: false
      },
      ptype : {
        type : Sequelize.STRING,
        allowNull : false
      },
      pname : {
        type : Sequelize.STRING,
        allowNull : false
      }
    });
    
    module.exports = Products;