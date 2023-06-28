import Task from "../models/task.model"

function getTask(){
    return {}
}

function getAllTask(){
    return []
}

function createTask(){
    return ({msg: 'success'})
}

function deleteTask(){
    return ({msg: 'success'})
}

function updateTask(){
    return ({msg: 'success'})
}

function getTaskStatus(){
    return ({status: ''})
}

function getDependencies(){
    return ([])
}

export {
    getTask,
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
    getTaskStatus,
    getDependencies,
}