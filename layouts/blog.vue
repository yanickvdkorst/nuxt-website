<!-- layouts/blog.vue -->
 <!--Dit is gewoon om uit te testen ;)-->
<template>
  <div class="blog-layout">
    <header class="header">
      <h1>Mijn Blog</h1>
      <!-- Voeg eventueel navigatie toe -->
    </header>
😉
    <main class="main-content">
      <aside class="sidebar">
        <h2>Categorieën</h2>
        <ul>
          <li><NuxtLink to="/blog/category/tech">Tech</NuxtLink></li>
          <li><NuxtLink to="/blog/category/design">Design</NuxtLink></li>
          <li><NuxtLink to="/blog/category/lifestyle">Lifestyle</NuxtLink></li>
        </ul>
      </aside>

      <section class="content">
        <NuxtPage />
      </section>
    </main>

    <footer class="footer">
      &copy; 2025 Mijn Blog - Alle rechten voorbehouden
    </footer>
  </div>
</template>

<style scoped>
.blog-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background: #333;
  color: white;
  padding: 1rem;
}

.main-content {
  display: flex;
  flex: 1;
  padding: 1rem;
}

.sidebar {
  width: 250px;
  padding-right: 1rem;
  border-right: 1px solid #ddd;
}

.content {
  flex: 1;
  padding-left: 1rem;
}

.footer {
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>
