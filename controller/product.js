const Products = require('../model/products')

exports.getProducts = async (req,res) =>{
    console.log('get...')
    try{
   let data = await Products.findAll()
    res.json(data)
    }catch(e){
        console.log(e)
    }
}

exports.postProduct = async (req,res) =>{
    console.log('post...')
    console.log('post prod')
    try{
      let {sprice,ptype,pname} = req.body;
     let data = await Products.create({sprice,ptype,pname})
     res.json(data)
    }catch(e){
        console.log(e)
    }
}

exports.deleteProduct = async (req,res) =>{
    let uid = req.params.id;
    try{
     let data = await Products.destroy({where:{id:uid}})
     res.json(data)
    }catch(e){
        console.log(e)
    }
}