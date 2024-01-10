<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4 text-dark"> Home</h2>
    </div>
    <div class="row">
      <h5 class="myname text-dark text-bold"> Ntokozo Sithebe</h5>
    </div>
    <div>
      <img class="Homeimg" src="https://drive.google.com/uc?id=1jllZnOfng33AE1y3o0bsofBCnoziGl8D" alt="myimage">
    </div>
    <div class="row">
      <h5 class="developer text-dark text-bold">Aspiring Software Developer</h5>
    </div>

  

  </div>
</template>

<script>

export default {}
</script>
<style scoped>

@keyframes slide{
  from{
    transform: translateX(-700px);
  }
  to{
    transform: translateX(700px)
  }
}
.myname{
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-direction: reverse;
  animation-fill-mode: none;
}
@keyframes sliding{
  from{
    transform: translateX(0);

  }
  to{
    transform:translateX(-700px)

  }
}

.developer{
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-direction: normal;
  animation-fill-mode: none;

}
.Homeimg{
  border: 5px white;
  border-radius: 35%;
  margin: 5px;
}
</style>
