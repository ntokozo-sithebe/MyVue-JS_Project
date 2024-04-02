<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4 text-black"> Contact </h2>
                <div class="col-md-6 justify-content-center">
                    <form action="https://formspree.io/f/mnqenpjw" method="post">
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Name" required rows="2"></textarea>
                        </div>
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Surname" required rows="2"></textarea>
                        </div>
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Email" required rows="2"></textarea>
                        </div>
                        <div class="input m-2">
                            <textarea input type="text" class="form-control" placeholder="Message" required rows="5"></textarea>
                        </div>
                        <button class="btn m-3 bg-success-subtle">Submit</button>
                    </form>
                </div>
                
                
            </div>
               
       


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*,
*, ::before
*, ::after{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.container{
    font-family: Georgia, 'Times New Roman', Times, serif;
}

#contact{
    height: 50vh;
    width: 50%;
}


</style>