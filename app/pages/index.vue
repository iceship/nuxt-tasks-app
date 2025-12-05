<script lang="ts" setup>
const { data: tasks, error, status } = await useFetch('/api/tasks', { lazy: true });
</script>

<template>
  <h1>Hello World!</h1>
  <article v-for="task in tasks" :key="task.id">
    <h3>{{ task.title }}</h3>
    <p>Completed: {{ task.completed }}</p>
  </article>
</template>
