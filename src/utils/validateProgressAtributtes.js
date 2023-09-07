const getObjectAtributtes = require("./getObjectAtributtes");

module.exports=(data,Atributtes,type,select)=>{
  const AtributeinNewData=getObjectAtributtes(data)//convertimos el objeto (que es la info a cambiar); en array , [[key,value],[key,value]]
  if(AtributeinNewData[0]==='Pdf_Viewed'&&!data[AtributeinNewData[0]]){
    throw new Error(`El valor que se quiere asignar en ${AtributeinNewData[0]} no es valido`)
    
  }
  if(type==='videosAtributtes'){
      
      for (let i = 0; i < Atributtes.length; i++) {
        if(!Atributtes.includes(AtributeinNewData[i])){//si algun atributo  no coincide o no existe nativamente, tiramos un error.
          throw new Error(`${AtributeinNewData[i]}, es un atributo incorrecto,para ${select}.`)
        }
      }
       return
    }

    if(!Atributtes.includes(AtributeinNewData[0])) {
         throw new Error(`${AtributeinNewData[0]} no es un atributo correcto.`)
    }
    return true
    
}