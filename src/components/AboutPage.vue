<template>
  <div class="about">
    <h2>...</h2>
    <div>
      <p>
        <span>Galentine's Day</span> is a nonofficial holiday that is celebrated on <span>February
        13th</span>.
      </p>
      <p>
        The tradition was started by Leslie Knope, a character from the TV show
        Parks and Recreation.
      </p>
      <p>It's all about female friendship. <span>Ladies celebrating ladies</span>.</p>
      <p>Find out more in the video below!</p>
    </div>

    <div class="videogals">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZgAOcNNMPKI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #de2a42;
  font-family: "Dr Sugiyama", cursive;
  font-size: 60px;
  font-weight: normal;
  margin: 0 0 20px 0;
}

p {
  font-size: 25px;
  font-family: "Marck Script", cursive;
  font-weight: normal;
  color: #de2a42;
  text-align: center;
  margin: 10px;
}

iframe {
  width: 336px;
  height: 189px;
}

.videogals {
  margin: 40px 0;
}

span {
  font-weight: bold;
}

@media (min-width: 600px) {
  p {
    font-size: 27px;
  }
  h2 {
    font-size: 80px;
    word-spacing: 20px;
  }
  iframe {
    width: 560px;
    height: 315px;
  }
  .about {
    margin: 0 0 80px 0;
  }
}
</style>
