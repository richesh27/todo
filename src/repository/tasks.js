const {Task} = require('../models/index');

class TaskRepository{

    async createTask(data){
        try{
            const task=await Task.create(data);
            return task;
        }
        catch(error){
            console.log("Something wrong in the repository layer");    
            throw{error};
        }
    }

    async getAllTask(){
        try {
            const tasks=await Task.findAll();
            return tasks;
        } 
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateTask(data,taskId){
        try {
            const task=await Task.findByPk(taskId);
            task.completed=data.completed;
            await task.save();
            return task;

        } 
        catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async deleteTask(taskId){
        try {
            await Task.destroy({
                where:{
                    id:taskId
                }
            });
            return true;
        } 
        catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports=TaskRepository;