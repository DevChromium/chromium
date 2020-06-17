<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: var(--dGray) !important;">
        <a class="navbar-brand" href="#"><strong>Chromium</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link" exact><i class="fas fa-home"></i> Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects" class="nav-link" exact><i class="fas fa-folder"></i> Projects</router-link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    computed:{
        currentPage() {
            return this.$route.path;
        }
    },
    data() {
        return {
            activeClass: 'active',
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.nav-item:hover,
.router-link-active {
    color: var(--fPink) !important;
    font-weight: 600;
}

</style>
