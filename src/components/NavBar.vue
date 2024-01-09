<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link to="/">
    <img class="img-fluid w-25 m-auto" src="https://drive.google.com/uc?id=1e43iD__7QC_i4AfK9auyqgjuLeivQK4q" alt="logo" loading="lazy">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 me-5 mx-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link active">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/resume" class="nav-link active">
            Resume
          </router-link>
        </li>
        <li>
          <router-link to="/Projects" class="nav-link active">
           Projects
          </router-link>
        </li>
        <li>
          <router-link to="/Testimonials" class="nav-link active">
            Testimonials
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link active">
            Contact
          </router-link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        components:{ }
        
    }
</script>

<style scoped>

</style>