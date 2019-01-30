//theater logic

function Theater() {
  this.movies = [];
  this.id = 0;
}

Theater.prototype.addMovie = function(movie){
  this.assignId(movie);
  this.movies.push(movie);
}

Theater.prototype.assignId = function(movie){
  this.id += 1;
  movie.id = this.id;
}

Theater.prototype.findMovie = function(movieName){
  this.movies.forEach(function(movie){
    if(movieName === movie.name) {
      return movie
    }
  })
}

Theater.prototype.findMovie = function(movieName) {
  for (var i=0; i<this.movies.length; i++) {
    if (movieName === this.movies[i].title) {
      return this.movies[i];
    }
  }
}


//ticket logic

function Movies(title,showtimes,basePrice,rating) {
  this.title = title;
  this.showtimes = showtimes;
  this.basePrice = basePrice;
  this.rating = rating;
}

Movies.prototype.getTicketPrice = function(basePrice, age, showtime) {
  var ticketPrice = basePrice;
  if(showtime < 1500) {
    ticketPrice = 6;
  } else if (age === 'Senior' || age === 'Child') {
    ticketPrice = ticketPrice * .8;
  }
  return ticketPrice;
}

Movies.prototype.displayTimes = function() {
  var htmlOutput = "";
  this.showtimes.forEach(function(showtime){
    htmlOutput += "<option value='" + showtime + "'>" + showtime + "</option>";
  });
  $(".timeSelector").html(htmlOutput);
}

//function timeCovert(time){ convert time to pleasing format later
// }

//var newMovie = new Movie()
Movies.prototype.showTicketInfo = function(showtime, age){
  $(".title").html(this.title)
  $(".showtime").html(showtime)
  $(".rating").html(this.rating)
  $(".ticketPrice").html(this.getTicketPrice(this.basePrice, age, showtime));

}

//ui logic
var myTheater = new Theater();
var spider = new Movies("Spiderman", [1000,1200,1500,1900], 8, "PG-13")
var rhap = new Movies("Bohemian Rhapsody", [1200,1500,2100], 8, "R")
var dune = new Movies("Dune",[1200,2300],8, "R")
var dog = new Movies("A Dogs Way Home", [1000,1300,1800], 8, "PG")
myTheater.addMovie(spider);
myTheater.addMovie(rhap);
myTheater.addMovie(dune);
myTheater.addMovie(dog);

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputMovie = $(".movieSelector option:selected").val();
    var inputAge = $(".ageSelector option:selected").val();
    var inputTime = $(".timeSelector option:selected").val();
    var selectedMovie = myTheater.findMovie(inputMovie);
    selectedMovie.showTicketInfo(inputTime, inputAge);
  });

  $(".movieSelector").change(function(){
    var movieName = $(".movieSelector option:selected").val();
    var movie = myTheater.findMovie(movieName);
    movie.displayTimes();
  });


})
