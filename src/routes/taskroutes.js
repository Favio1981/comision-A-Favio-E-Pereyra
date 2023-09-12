import {Router} from "express";

import {ctrlGetTasks} from "../controllers/taskcontrollers.js";
import { ctrlCreateTask, ctrlDeleteTask, ctrlUpdateTask } from "../controllers/taskcontrollers.js";



const taskRouter = Router();

//endpoint para traer todas las tareas

taskRouter.get('/api/tasks',ctrlGetTasks)

//endpoint para crear una tareas

taskRouter.post('/api/tasks',ctrlCreateTask)

//endpoint para modificar una tareas

taskRouter.put('/api/:id',ctrlUpdateTask)

//endpoint para eliminar una tarea

taskRouter.delete('/api/:id',ctrlDeleteTask)

export{taskRouter}