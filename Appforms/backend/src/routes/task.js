import { Router } from "express";
import {
  deleteTask,
  getTasks,
  saveTask,
  getTask,
  updateTask,
  getTasksCount,
} from "../controllers/task";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", getTasksCount);

router.post("/tasks", saveTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
