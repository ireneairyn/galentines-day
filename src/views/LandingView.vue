<template>
  <div class="landing">
    <h2>Thanks for visiting the website and...</h2>
    <h1>Happy Galentine's Day</h1>

    <h3>Save the date: 13th February</h3>
    <h4>Ladies celebrating ladies.</h4>
     
  </div>
</template>

<script></script>

<style>

h1 {
  color: #de2a42;
  font-family: 'Dr Sugiyama', cursive;
  font-size: 65px;
  word-spacing: 20px;
  font-weight: normal;
  margin: 30px 0;
}
h2 {
  color: #de2a42;
   font-family: 'Permanent Marker', cursive;
  font-size: 20px;
  word-spacing: 20px;
  font-weight: normal;
  margin: 30px 0;
}

h3, h4 {
  font-family: 'Permanent Marker', cursive;
  font-weight: normal;
  color: #de2a42;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 20px;
  margin: 40px;
}

.landing{
  margin: 50px;
}

@media (min-width: 768px) {
    .question-set {
        flex-direction: row;
    }
    .landing {
      margin: 190px 0;
    }
    h1 {
       font-size: 85px;
    }
    h2, h3 {
       font-size: 25px;
    }
    h4 {
       font-size: 20px;
    }
}

</style>
