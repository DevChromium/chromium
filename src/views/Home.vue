<template>
  <div>
     <section class="hero container-fluid text-center mt-5">
      <h1 style="font-size: 1.3em">Hello there!</h1>
       <p style="font-size: 1.4em" id="intro">My name is <span class="name">Lucas</span> also known as<span class="name"> Chromium</span>.</p>
       <p id="intro">And I am a <vue-typer :text='["UI/UX Designer", "Graphical Artist", "Web developer", "Gamer"]' :repeat="Infinity" initial-action="typing" erase-style="backspace" :erase-delay="70" caret-animation="phase" id="typer"/>!</p>
       <button class="btn" type="submit" style="background-color: var(--fPink)"><router-link to="/projects" exact style="color: white;">Go to my projects</router-link></button>
     </section>
     <section class="transition">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="z-index:1"><path fill="#1a1a1d" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
     </section>
    <section class="about-me container-fluid pb-2">
      <div class="card container shadow p-3 mb-5 rounded">
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-address-card"></i> About me</h5>
          <p class="card-text">Hello, I am <strong>Lucas</strong> also known as <strong>Chromium</strong>. I am currently 18 years old and live in the beautiful country Belgium. For the last 6 years of my life I have been studying Economics and have taught myself how to code in HTML, Javascript, CSS and a little bit of Java.</p>
          <hr>
          <h6 class="card-subtitle mt-2 mb-2">You can contact me on:</h6>
          <ul class="pl-0">
            <li><i class="fab fa-github"></i> <a href="https://github.com/DevChromium">DevChromium</a></li>
            <li><i class="fab fa-twitter"></i> <a href="https://twitter.com/chromium__">Chromium</a></li>
            <li style='color: var(--rPink)'><i class="fab fa-discord" style="color: white;"></i> Chromium#6584</li>
            <li style='color: var(--rPink)'><i class="fas fa-envelope" style="color: white;"></i> chromiumdevservices@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="skills container-fluid pb-2">
      <div class="card container shadow p-3 mb-5 rounded">
          <div class="card-body">
            <h5 class="card-title"><i class="fas fa-laptop-code"></i> Mastered skills</h5>
            <p class="card-text">These are the languages I have taught myself</p>
            <ul class="pl-0">
              <li><i class="fab fa-html5"></i> <strong>HTML5</strong></li>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%; background-color: var(--rPink)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
              <li><i class="fab fa-css3-alt"></i> <strong>CSS3</strong></li>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%; background-color: var(--rPink)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
              <li><i class="fab fa-js"></i> <strong>JavaScript/TypeScript</strong></li>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 90%; background-color: var(--rPink)" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              <li><i class="fab fa-java"></i> <strong>Java</strong></li>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%; background-color: var(--rPink)" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
              </div>
              <li><i class="fab fa-node-js"></i> <strong>Node.JS</strong></li>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 90%; background-color: var(--rPink)" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              <li><i class="fab fa-vuejs"></i> <strong>Vue.JS</strong></li>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%; background-color: var(--rPink)" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </ul>
          </div>
        </div>
    </section>

    <section class="languages container-fluid pb-2">
      <div class="card container shadow p-3 mb-5 rounded">
          <div class="card-body">
            <h5 class="card-title"><i class="fas fa-language"></i> Spoken languages</h5>
            <ul class="pl-0">
              <li>English</li>
              <li>Dutch</li>
              <li>German</li>
              <li>French</li>
            </ul>
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
    name: 'Home'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin-bottom: 1em
  }
  
  p#intro {
    color: white !important;
    line-height: 1em;
  }

  .name  {
    color: var(--rPink);
    font-weight: bold;
  }
  

   .left::after,
   .vue-typer,
   span.vue-typer /deep/.custom.char.typed
   {
    display: inline-block;
    font-weight:bold;
    user-select: none;
    color: white !important;
  }
    .skills,
    .languages,
    .about-me {
      background-color: var(--lGray);
      z-index:0;
    }


    .card {
      background-color: var(--dGray);
    }

  .transition {
    background-color: var(--lGray);
  }

  ul {
    list-style-type: none;
  }

  a {
    color: var(--rPink);
  }

  a:hover {
    color: var(--fPink);
  }
  .skills li {
    padding-top: 10px;
  }


  #footertransition path {
  transform: rotate(180deg);
  transform-origin: 50% 50%;
}
</style>
