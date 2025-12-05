import { createError } from "h3";
import { findTask } from "../../../../utils/task-store";

export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "id is required" });
  }

  const task = findTask(id);
  if (!task) {
    throw createError({ statusCode: 404, statusMessage: "Task not found" });
  }

  return task;
});
