<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4"> Contact</h2>
            <div class="row d-block d-flex p-3">
                <!-- <div class="col">
                    <img class="myimage img-fluid img-thumbnails w-50 border-2 rounded-5" src="https://i.ibb.co/WsQ54g2/LC2.jpg h" alt="My-Image" loading="lazy" >
                </div> -->
                <div class="col text-align-center justify-content-center">
                    <form action="https://formspree.io/f/mnqenpjw" method="post">
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Name" required ></textarea>
                        </div>
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Surname" required></textarea>
                        </div>
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Email" required></textarea>
                        </div>
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Message" required></textarea>
                        </div>
                        <button class="btn m-2 text-white"> Submit </button>
                    </form>
                    <h2 class="display-5"></h2>
                </div>
            </div>
               
        </div>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
 .container{
    justify-content: center;
    margin:0px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    align-items: center;
    
 }

img [alt="My-Image"]{
    width: 25rem;
    height: 20rem;
}
.btn{
    background-color: black;
}
</style>