<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- Navbar Full Width -->
    <nav class="bg-gray-800 p-4">
      <div class="flex justify-between items-center max-w-7xl mx-auto">
        <!-- Logo or Brand -->
        <div class="text-white text-xl font-bold">
          <RouterLink to="/" class="hover:text-gray-300">
            Laravel Vue
          </RouterLink>
        </div>
        <!-- Navigation Links -->
        <div class="space-x-4">
          <RouterLink to="/" class="text-white hover:text-gray-300">
            Home
          </RouterLink>
          <RouterLink to="/skills" class="text-white hover:text-gray-300">
            Skills
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen p-4">
    <!-- Dynamic Content -->
    <RouterView />
  </main>
</template>
