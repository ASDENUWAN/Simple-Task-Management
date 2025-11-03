import Task from "../models/Task.js";

export const createTask = (data) => Task.create(data);
export const getTasks = () => Task.find().sort({ createdAt: -1 });
export const getTaskById = (id) => Task.findById(id);
export const deleteTaskById = (id) => Task.findByIdAndDelete(id);
