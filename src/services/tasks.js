const TaskRepository = require("../repository/tasks")

class taskService {

    constructor(){
        this.taskRepository = new TaskRepository();
    }

    async create(data) {
        try {
            console.log(data)
            const response=await this.taskRepository.createTask(data);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getAll() {
        try {
            const response=await this.taskRepository.getAllTask();
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async update(data,taskId) {
        try {
            const response=await this.taskRepository.updateTask(data,taskId);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async delete(taskId) {
        try {
            const response=await this.taskRepository.deleteTask(taskId);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
   
}


module.exports=taskService;