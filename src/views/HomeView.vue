<template>
  <div class="container">
	<div class="row">
		<div class="col">
			<h2>Ntokozo Sithebe</h2>
			<h2>Aspiring Developer</h2>
		</div>
		<div class="col">
			<img class="overlay_image" src="https://i.ibb.co/WsQ54g2/LC2.jpg" alt="" loading="lazy">

		</div>
		<div class="col">
			

		</div>
	</div>
    
  

  </div>
</template>

<script>

export default {}
</script>
<style scoped>
.overlay_image{
	height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 12px 30px; */
  /* color: black; */
  border: none;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;

}
.overlay_image:hover{
  /* background-color: black; */
  color: white;
}



/* .container{
	overflow: hidden;
  scroll-behavior: none;
}

@keyframes slide{
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(300px)
  }
}
.myName{
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
    transform:translateX(-300px)

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
  scroll-behavior: none;

}
.Homeimg{
  border: 5px white;
  border-radius: 35%;
  margin: 5px;
  justify-content: center
} */
</style>
