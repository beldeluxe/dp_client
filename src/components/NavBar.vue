<template>
    <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="assets/img/icono-naranja.png" alt="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon pr-md-3"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link disabled" aria-disabled="true" href="#">{{$parent.product.name}}</a>
            </div>
          </div>
        </div>
    </nav>   
    </div>

</template>

<script>
export default {
  name: 'NavBar',
}
</script>