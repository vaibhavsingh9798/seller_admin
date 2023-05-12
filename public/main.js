

let myForm = document.getElementById('myform')
myForm.addEventListener('submit',onsubmit)
let ul1 = document.getElementById('shoeElectronic')
let ul2 = document.getElementById('showFood')
let ul3 =  document.getElementById('showSkin')
ul1.addEventListener('click',deleteItem)
ul2.addEventListener('click',deleteItem)
ul3.addEventListener('click',deleteItem)
function onsubmit(e){
   e.preventDefault()
   let sprice = document.getElementById('sprice').value
   let pname = document.getElementById('pname').value
   let ptype = document.getElementById('ptype').value
    let product = {sprice,ptype,pname}
    postProduct(product)
    document.getElementById('sprice').value=""
     document.getElementById('pname').value=""
     document.getElementById('ptype').value=""
}


function print(item){
   let li = document.createElement('li')
   li.appendChild(document.createTextNode(`${item.sprice} - ${item.ptype} - ${item.pname}`))
   let delBtn = document.createElement('button')
   delBtn.appendChild(document.createTextNode('Delete'))
   delBtn.setAttribute('id',item.id)
   delBtn.setAttribute('class','del float-right m-1')
   li.appendChild(delBtn)
   if(item.ptype == 'Electronic'){
    ul1.appendChild(li)
   }
   else if(item.ptype == 'Food'){
    ul2.appendChild(li)
   }
   else if(item.ptype == 'Skincare'){
    ul3.appendChild(li)
   }
}

let getProducts = async ()=>{
    ul1.innerHTML=''
    ul2.innerHTML=''
    ul3.innerHTML=''
    try{
    //let response = await axios.get(`https://crudcrud.com/api/6a570b7ebf4345b9a6960f997dcedd9e/products`)
    let response = await axios.get(`http://localhost:3001/products/all`)
    console.log('resp',response)
     response.data.map((item) => print(item) ) 
    }catch(e){
      console.log('err',e)
    }
}

document.addEventListener('DOMContentLoaded',getProducts)

let postProduct = async (product)=>{
    console.log('post prod',product)
    try{
    let response = await axios.post(`http://localhost:3001/products/product`,product)
    getProducts()
    }catch(e){
      console.log('err',e)
    }
}

let deleteProduct = async (id)=>{

    try{
    let response = await axios.delete(`http://localhost:3001/products/product/${id}`)
    getProducts()
    }catch(e){
      console.log('err',e)
    }
}

function deleteItem(e){
    if(e.target.getAttribute('class') == 'del float-right m-1'){
        let id = e.target.getAttribute('id')
       // console.log('id',id)
        deleteProduct(id)

    }
}



