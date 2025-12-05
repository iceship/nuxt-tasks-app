import { createError, readBody } from "h3";
import { updateTask } from "../../../utils/task-store";

type PutBody = {
  title?: string;
  description?: string | null;
  completed?: boolean;
};

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "id is required" });
  }

  const body = (await readBody<PutBody>(event)) || {};
  const hasUpdates =
    typeof body.title === "string" ||
    typeof body.description !== "undefined" ||
    typeof body.completed === "boolean";

  if (!hasUpdates) {
    throw createError({
      statusCode: 400,
      statusMessage: "Provide at least one updatable field",
    });
  }

  const updated = updateTask(id, {
    title: body.title?.trim(),
    description: body.description ?? undefined,
    completed: body.completed,
  });

  if (!updated) {
    throw createError({ statusCode: 404, statusMessage: "Task not found" });
  }

  return updated;
});
