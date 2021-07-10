
  var api = 'b7ef181bb0f3b3da54eb8b618c7ae544';
    var api2 = 'bfe692d5d322ff7c2eaec64cac9b705a';
    var api3 = 'ab6390b400dc18ff693a1b964ac3630a';
    
    loadHome();
  // var load = document.getElementsByClassName("loading");
  // load.show();

  function loadHome(){
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Hot news</h2>`
  fetch('https://gnews.io/api/v4/top-headlines?token='+ api + '&lang=en')
  .then(function(response){
     
    return response.json();
    
  }).then(function(pram){
    var str = pram.articles.map(function(data){
      return `<div class="col-md-3">
      <div class="card" style="width: 18rem;">
       <a href="${data.url}"> <img class="card-img-top" src="${data.image}" alt="Card image cap"> </a>
        <div class="card-body">
          <p class="card-text">${data.description}</p>
        </div>
      </div>
    </div>`
    });
    var htmlStr = str.join('');
    document.getElementById('pl').innerHTML = htmlStr;
  }).then(function(){
    document.getElementById("load").style.display = "none";
  })
  }

  function loadNew(topic){
    document.getElementById('pl').innerHTML="";
    document.getElementById("load").style.display = "block";
    fetch('https://gnews.io/api/v4/top-headlines?topic=' + topic + '&token=' + api2 + '&lang=en')
    .then(function(repost){
      return repost.json();
    }).then(function(param){
      var str = param.articles.map(function(data){
        return `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
         <a href="${data.url}"> <img class="card-img-top" src="${data.image}" alt="Card image cap"> </a>
          <div class="card-body">
            <p class="card-text">${data.description}</p>
          </div>
        </div>
      </div>`
      });
      var htmlStr = str.join('');
      document.getElementById('pl').innerHTML = htmlStr;
    }).then(function(){
      document.getElementById("load").style.display = "none";
    })
  }
  function business(){
    
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Business</h2>`
    loadNew('business');
  }
  function sprot(){
    
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Sports</h2>`
    loadNew('sports');
  }
  function technology(){
    
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Technology</h2>`
    loadNew('technology');
  }
  function science(){
    
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Science</h2>`
    loadNew('science');
  }
  function healthy(){
    
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Health</h2>`
    loadNew('health');
  }
  function entertainment(){
    
    document.getElementById("new").innerHTML = `<h2 class="text-danger">Entertainment</h2>`
    loadNew('entertainment');
  }
  
  function find(){
    var keys = document.getElementById("key");
    var key = keys.value;
    document.getElementById('pl').innerHTML="";
    document.getElementById("new").innerHTML = `<h2 class="text-danger">${key}</h2>`
    document.getElementById("load").style.display = "block";
    
    fetch('https://gnews.io/api/v4/search?q=' + key + '&token='+ api3 +'&lang=en')
    .then(function(repost){
      return repost.json();
    }).then(function(param){
      var str = param.articles.map(function(data){
        return `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
         <a href="${data.url}"> <img class="card-img-top" src="${data.image}" alt="Card image cap"> </a>
          <div class="card-body">
            <p class="card-text">${data.description}</p>
          </div>
        </div>
      </div>`
      });
      var htmlStr = str.join('');
      document.getElementById('pl').innerHTML = htmlStr;
    }).then(function(){
      document.getElementById("load").style.display = "none";
    })
  }
