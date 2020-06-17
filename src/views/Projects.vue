<template>
  <div>
    <section class="hero container-fluid text-center mt-5">
      <h1 style="font-size: 1.35em; font-weight: bold;">My projects!</h1>
       <p style="font-size: 1.4em" id="intro">On this page you will find all my current and finished projects.</p>
     </section>
     <section class="transition">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="z-index:1"><path fill="#1a1a1d" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
     </section>

      <section class="projects container-fluid pb-2 justify-content-center">
        <div class="row">
          <div class="col-sm-6">
            <div class="card container shadow p-3 mb-5 rounded">
              <div class="card-body">
                 <div class="row">
                   <div class="col-md-2">
                    <img src="../assets/wynntils.png" alt="Wynntils logo" class="card-img">
                  </div>
                  <div class="col-md-6">
                    <h4 class="card-title">Wynntils <span class="badge" style="background-color: var(--fPink)">WEBSITE</span></h4>
                    <p class="card-text">I am the current Web developer for the Wynntils mod. This mod is a utilities modification for the Minecraft server known as <a href="wynncraft.com">Wynncraft</a></p>
                    <button class="btn" type="submit" style="background-color: var(--fPink)"><a href="wynntils.com">Their website</a></button>
                  </div>
                 </div>
              </div>
            </div>
          </div>
           <div class="col-sm-6">
            <div class="card container shadow p-3 mb-5 rounded">
              <div class="card-body">
                 <div class="row">
                   <div class="col-md-3 flex-grow-1">
                    <img src="../assets/andromedalogo.png" alt="Andromeda logo" class="card-img">
                  </div>
                  <div class="col-md-6">
                    <h4 class="card-title">Andromeda <span class="badge" style="background-color: var(--fPink)">BOT</span></h4>
                    <p class="card-text">Andromeda is my multi-purpose Discord bot that is aiming to be the best bot around. Currently this project is a work in progress.</p>
                    <button class="btn" type="submit" style="background-color: var(--fPink); margin-right: 10px;" disabled><a href="">Andromeda website</a></button>
                    <button class="btn" type="submit" style="background-color: var(--fPink); marginD-right: 10px;" disabled><a href="">Invite</a></button>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </section>    


     <section class="transition" id="footertransition">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="z-index:1"><path fill="#1a1a1d" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
     </section>

  </div>
</template>

<script>
  export default {
    name: 'Projects'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  a {
    color: white;
  }

  .card {
      background-color: var(--dGray);
      max-width: 95%;
  }

.projects {
  background: var(--lGray);
  z-index: 0;
}
.transition {
  background: var(--lGray);
}

  #footertransition path {
  transform: rotate(180deg);
  transform-origin: 50% 50%;
}
</style>
