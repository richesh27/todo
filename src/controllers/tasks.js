const  TaskService = require('../services/tasks');

const taskService = new TaskService();


const createTask=async(req,res)=>{
    try {
        const response = await taskService.create(req.body);
        return res.status(201).json({
            success : true,
            data : response,
            message: " task created successfully",
        });
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error
        })
    }
}

// GET -> /tasks
const getAllTasks=async(req,res)=>{
    try {
        const response = await taskService.getAll();
        return res.status(200).json({
            success : true,
            message : 'Tasks fetched successfully',
            data : response,
        });
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error
        })
    }
}


//Patch-> /tasks/:id
const updateTask=async(req,res)=>{
    try {
        const response = await taskService.update(req.body,req.params.id);
        return res.status(200).json({
            success : true,
            data : response,
            message : 'task updated successfully',
        });
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error
        })
    }
}


const deleteTask=async(req,res)=>{
    try {
        const response = await taskService.delete(req.params.id);
        return res.status(200).json({
            success : true,
            message : "task deleted successfully" ,
        });
    } 
    catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error
        })
    }
}

module.exports={
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
}