const argv = require('./config/yargs').argv;
const porHacer=require('./porHacer/porHacer')
const colors=require('colors')

let comando = argv._[0];
console.log(comando);

switch (comando) {
  case "lista":
      console.log('en lista');
        let listado=porHacer.getListado();
        console.log(listado);
        for(let tarea of listado){
            console.log('====POR HACER===='.green);
            console.log(tarea.descripcion); 
            console.log('Estado:',tarea.completado);
            console.log('=============='.green);
        }
    break;
  case "crear":
        porHacer.crearTarea(argv.desription)
    break;
  case "actualizar":
        let actualizado=porHacer.actualizar(argv.desription,argv.completado)
    break;
  case "borrar":
      let borrado=porHacer.borrar(argv.descripcion)
      console.log(borrado);
      break;  
    default: console.log('No se reconoce ese comando');
}
