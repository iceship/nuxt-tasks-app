<template>
  <nav class="container">
    <ul>
      <li>
        <NuxtLink to="/">
          <strong>Tasks App</strong>
        </NuxtLink>
      </li>
    </ul>
    <ul>
      <li>
        <NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
