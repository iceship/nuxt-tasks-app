import { createError } from "h3";
import { deleteTask } from "../../../../utils/task-store";

export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "id is required" });
  }

  const removed = deleteTask(id);
  if (!removed) {
    throw createError({ statusCode: 404, statusMessage: "Task not found" });
  }

  return removed;
});
