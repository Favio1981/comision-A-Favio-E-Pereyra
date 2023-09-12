import { Sequelize } from "sequelize";


const sequelize = new Sequelize('db_task', 'root', '', {
    host: 'localhost',
    dialect:  'mysql' 
  })

export const startDb = async () =>{
    try {
    await sequelize.authenticate();
    await sequelize.sync()
    console.log('conexion establecida correctamente');

    }catch (error){
      console.log('conexion no establecida:', error);

    }
}
    


    
  