<template>
  <div>
    <AppNavBar />
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<style>
.error {
  color: red;
}

.button-container {
  display: flex;
  justify-content: end;
}
</style>
