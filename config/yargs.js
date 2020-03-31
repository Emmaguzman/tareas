const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de una tarea"
};
const completado = {
  default: true,
  alias: "c",
  desc: "marca como completada o pendiente una tarea"
};

const argv = require("yargs")
  .command("crear", "Crea elemento por hacer", {
    descripcion
  })
  .command("actualizar", "actualiza una tarea a completado", {
    descripcion,
    completado
  })
  .command("borrar", "borra una tarea", {
    descripcion
  })
  .help().argv;

module.exports = {
  argv
};
