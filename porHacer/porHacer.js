const fs = require("fs");

let listado = [];
let guardarBD = () => {
  let data = JSON.stringify(listado);
  fs.writeFile("BD/data.json", data, err => {
    if (err) throw new Error(err);
  });
};
const cargarBD = () => {
try{
    listado = require("../BD/data.json");
}catch(err){
    listado=[]
}
};
const crearTarea = descripcion => {
  cargarBD();
  let porHacer = {
    descripcion,
    completado: false
  };
  listado.push(porHacer);
  guardarBD();
  return porHacer;
};

const getListado=()=>{
    console.log('en getListado');
    cargarBD();
    return listado;
}

const actualizar=(descripcion,completado=true)=>{
    cargarBD();
    let index=listado.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index>=0){
        listado[index].completado=completado;
        guardarBD();
        return true;
    }
    else{
        return false;
    }
}

const borrar=(descripcion)=>{
    cargarBD();
    console.log(descripcion);
    let listadoNuevo=listado.filter(tarea=>tarea.descripcion!==descripcion);
    console.log(listado.filter(tarea=>tarea.descripcion!==descripcion));
    if(listadoNuevo.length===listado.length){
        return false;
    }else{
        listado=listadoNuevo;
        guardarBD();
        return true;
    }


}

module.exports = {
  crearTarea,
  getListado,
  actualizar,
  borrar


};
