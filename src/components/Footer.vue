<template>
    <footer class="footer">
        <div class="container text-center">
            <p>&copy; <b style="color: var(--rPink);">Chromium</b> 2020</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .footer {
        position: relative;
        bottom: 0px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: var(--dGray);
    }

</style>
