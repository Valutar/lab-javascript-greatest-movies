// Iteration 1: All directors? - Get the array of all directors.
const movies = require("./data");

function getAllDirectors(movies) {
  const directors = movies.map(function(movie){
    return movie.director;
  })
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filtered = movies.filter(function(movie){
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      return true
    }
  })
  return filtered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const avgRate = movies.reduce(function (sum,movie){
    return sum + movie.score
  },0) / movies.length;
  return Number(avgRate.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter(function(movie){
    return movie.genre.indexOf('Drama' !== -1)
  })
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = JSON.parse(JSON,stringify(movies)).sort(function(a,b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(function(movie){
    return movie.title
  })
  const sorted = titles.sort(function(a,b){
    return a.localeCompare(b);
  })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
