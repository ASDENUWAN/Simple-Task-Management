import {
  createTask,
  getTasks,
  getTaskById,
  deleteTaskById,
} from "../services/task.service.js";

// POST /api/tasks
export const addTask = async (req, res, next) => {
  try {
    const task = await createTask(req.body);
    return res.status(201).json({ message: "Task created", task });
  } catch (err) {
    next(err);
  }
};

// GET /api/tasks
export const listTasks = async (_req, res, next) => {
  try {
    const tasks = await getTasks();
    return res.status(200).json({ count: tasks.length, tasks });
  } catch (err) {
    next(err);
  }
};

// GET /api/tasks/:id
export const getTask = async (req, res, next) => {
  try {
    const task = await getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ task });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req, res, next) => {
  try {
    const deleted = await deleteTaskById(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};

export default { addTask, listTasks, getTask, deleteTask };
