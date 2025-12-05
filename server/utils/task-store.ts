export type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

let nextId = 3;

const tasks: Task[] = [
  {
    id: "1",
    title: "Ship Nuxt tasks MVP",
    description: "Rough cut of the UI plus a working API.",
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Write docs",
    description: "Capture API contract and usage notes.",
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const listTasks = (): Task[] => clone(tasks);

export const findTask = (id: string): Task | undefined =>
  tasks.find((task) => task.id === id);

export const createTask = (payload: {
  title: string;
  description?: string;
}): Task => {
  const now = new Date().toISOString();
  const task: Task = {
    id: String(nextId++),
    title: payload.title,
    description: payload.description?.trim() || undefined,
    completed: false,
    createdAt: now,
    updatedAt: now,
  };

  tasks.unshift(task);
  return clone(task);
};

export const updateTask = (
  id: string,
  payload: Partial<Pick<Task, "title" | "description" | "completed">>
): Task | undefined => {
  const target = findTask(id);
  if (!target) {
    return undefined;
  }

  if (typeof payload.title === "string") {
    target.title = payload.title;
  }

  if (typeof payload.description !== "undefined") {
    target.description = payload.description?.trim() || undefined;
  }

  if (typeof payload.completed === "boolean") {
    target.completed = payload.completed;
  }

  target.updatedAt = new Date().toISOString();
  return clone(target);
};

export const deleteTask = (id: string): Task | undefined => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return undefined;
  }

  const [removed] = tasks.splice(index, 1);
  return clone(removed);
};
