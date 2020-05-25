//estudiantesController.js (CONTROL DE LOS MODELOS DE LA BASE DE DATOS)
// let {Estudiante} = require ('../models/database/db');
const estudiantesModel=require('../models/estudiantesModel');

//exporta las funciones
exports.getAllEstudiante = getAllEstudiante;
exports.getEstudianteId = getEstudianteId;
// exports.getEstudianteMatricula = getEstudianteMatricula;
exports.deleteEstudianteId = deleteEstudianteId;
// exports.deleteEstudianteMatricula = deleteEstudianteMatricula;

//muestra estudiantes
function getAllEstudiante(req,res){
     estudiantesModel.findAll().then((estudiantes)=>{
          res.status(200).json(estudiantes);
     }).catch(err=>{
          res.status(400).json(err);
     });
}
//muestra estudiante por ID
function getEstudianteId (req, res){
     console.log("Entro");//para ver si entra al código
     console.log(req.params.id);//para ver la peticion
     estudiantesModel.findById(req.params.id).then((estudiante) => {
          res.status(200).json(estudiante);
     }).catch(err => {
          res.status(500).json({error: "No encontrado"});
     });
}
// //muestra estudiante por MATRICULA
// function getEstudianteMatricula(req, res){
//      console.log("Entro");//para ver si entra al código
//      console.log(req.params.matricula);//para ver la peticion
//      estudiantesModel.findByMatricula(req.params.matricula).then((estudiante) => {
//           res.status(200).json(estudiante);
//      }).catch(err => {
//           res.status(500).json({error: "No encontrado"});
//      });
// }
//borra estudiante por ID
function deleteEstudianteId(req,res) {
     if(estudiantesModel.eraseId(req.params.id)){
          res.status(200).json({msg:`matricula: ${req.params.id} deleted succesfully`})
     } else {
          res.status(500). json({error:`could not delete id: ${req.params.id}`})
     }
}
// //borra estudiante por MATRICULA
// function deleteEstudianteMatricula(req,res) {
//      if(estudiantesModel.erase(req.params.matricula)){
//           res.status(200).json({msg:`matricula: ${req.params.matricula} deleted succesfully`})
//      } else {
//           res.status(500). json({error:`could not delete matricula: ${req.params.matricula}`})
//      }
// };

//Muestra estudiante por MATRICULA GET
// jobControl.getEstudiante = async (req , res) =>{
//     // const { matricula } = req.params.matricula; // diferencia entre req.params y req.body
//
//      await db.Estudiante.findOne( {
//           where: {
//                matricula // en vez de id puede ser matricula
//           }
//      } ).then( (Estudiante) => {
//           console.log(Estudiante); // a manera de test
//           res.json({ // en caso de encontrar retornara el estudiante con ese id
//                data: Estudiante
//           })
//      }).catch( (err) => {
//           console.log(err);
//      });
// };
//
// //muestra estudiante por MATRICULA GET
// jobControl.getEstudianteMatricula = async(req, res)=>{
//      console.log("Entro");//para ver si entra al código
//      console.log(req.params.matricula);//para ver la peticion
//      await Estudiante.findOne(req.params.matricula).then((estudiante) => {
//           res.status(200).json(estudiante);
//      }).catch(err => {
//           res.status(500).json({error: "No encontrado"});
//      });
// }
// //crea estudiante POST
// jobControl.createEstudiante = async (req, res)=> {
//      console.log("Entro");//para ver si entra al código
//      console.log(req.body);//para ver cuerpo de la petición
//      let r = Estudiante.add(req.body);
//      if (r) {
//           res.send(200).json(r, {message: 'Se agrego estudiante'});
//      } else {
//           res.status(500).json({error: "No se pudo crear"});
//      }
// }
// //actualiza estudiante PATCH
// jobControl.updateEstudiante = async (req, res)=>{
//      console.log("Entro");//para ver si entra al código
//      let r = await Estudiante.save(req.params.id, req.body);
//      if(r){
//           res.status(200).json(r);
//      }else{
//           res.status(500).json({error: "No existe"});
//      }
// }
// //borra estudiante DELETE
// jobControl.deleteEstudiante = function(req, res){
//      console.log("Entro");//para ver si entra al código
//      if(Estudiante.findByPk(req.params.id)){
//           res.status(200).json({msg: `id: ${req.params.id} deleted succesfully`})
//      }else{
//           res.status(500).json({error: `could not delete id: ${req.params.deleteEstudiante}`});
//      }
// }

// module.exports = jobControl;//exporta todos


