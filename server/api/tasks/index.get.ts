import { listTasks } from "../../utils/task-store";

export default defineEventHandler(() => {
  return listTasks();
});
