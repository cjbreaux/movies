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

Movies.prototype.getTicketPrice(basePrice, age, showtime) {
  var ticketPrice = 0;
  if(showtime < 1500) {
    ticketPrice = 6;
  } else if (age > 65 || age < 10) {
    ticketPrice = basePrice * .8;
  }
  return ticketPrice;
}

var newMovie = new Movie()
