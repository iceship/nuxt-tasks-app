import { createError, readBody } from "h3";
import { createTask } from "../../../utils/task-store";

type PostBody = {
  title?: string;
  description?: string;
};

export default defineEventHandler(async (event) => {
  const body = (await readBody<PostBody>(event)) || {};
  const title = body.title?.trim();

  if (!title) {
    throw createError({
      statusCode: 400,
      statusMessage: "title is required",
    });
  }

  return createTask({
    title,
    description: body.description,
  });
});
