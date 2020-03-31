const argv=require('yargs').command('crear','Crea elemento por hacer',{
    desription:{
        demand:true,
        alias:'d',
        desc:'Descripcion de una tarea'
    }
}).command('actualizar','actualiza una tarea a completado',{
    desription:{
        demand:true,
        alias:'d',
        desc:'Descripcion de una tarea'
    },completado:{
        default:true,
        alias:'c',
        desc:'marca como completada o pendiente una tarea'

    }

}).command('borrar','borra una tarea',{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de una tarea'
    }
})
.help()
  .argv;

module.exports={
    argv
}