var title = ['WW84', 'To All the Boys I\'ve Loved Before', 'Soul', 'Beauty and the Beast', 'Five Feet Apart', 'Pride and Prejudice']
var movies = ['https://images-na.ssl-images-amazon.com/images/I/611Xx97wVNL._AC_SL1008_.jpg', 'https://gmhslasso.org/wp-content/uploads/2018/10/Photo-1-Actress-Lana-Condor-pictured-in-movie-poster-as-character-Lara-Jean.-Photo-courtesy-of-Showtimes.com_-642x900.jpg', 'https://www.joblo.com/assets/images/joblo/posters/2020/03/76AA8E0F-AF7A-4FC2-A7DF-C194DBC85900.jpeg', 'https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg', 'https://m.media-amazon.com/images/I/61ssPI1O3XL._AC_SL1481_.jpg', 'https://i.pinimg.com/originals/8e/1c/c8/8e1cc8ac9f28d7aeaf68e0335f90bb9b.jpg']

document.querySelector(".title1").innerHTML = title[0]
document.querySelector(".movie1").innerHTML += `<img class="imagestyle" src="${movies[0]}">,`

document.querySelector(".title2").innerHTML = title[1]
document.querySelector(".movie2").innerHTML += `<img class="imagestyle" src="${movies[1]}">`

document.querySelector(".title3").innerHTML = title[2]
document.querySelector(".movie3").innerHTML += `<img class="imagestyle" src="${movies[2]}">`

document.querySelector(".title4").innerHTML = title[3]
document.querySelector(".movie4").innerHTML += `<img class="imagestyle" src="${movies[3]}">`

document.querySelector(".title5").innerHTML = title[4]
document.querySelector(".movie5").innerHTML += `<img class="imagestyle" src="${movies[4]}">`

document.querySelector(".title6 ").innerHTML = title[5]
document.querySelector(".movie6").innerHTML += `<img class="imagestyle" src="${movies[5]}">`

function changeMovie() {
    let newMovieTitle = document.getElementById("movietitle").value
    let newMovieLink = document.getElementById("picturelink").value

    title.pop()
    movies.pop()

    title.unshift(newMovieTitle)
    movies.unshift(newMovieLink)

    document.querySelector(".title1").innerHTML = title[0]
    document.querySelector(".movie1").innerHTML = `<img class="imagestyle" src="${movies[0]}">,`

    document.querySelector(".title2").innerHTML = title[1]
    document.querySelector(".movie2").innerHTML = `<img class="imagestyle" src="${movies[1]}">`

    document.querySelector(".title3").innerHTML = title[2]
    document.querySelector(".movie3").innerHTML = `<img class="imagestyle" src="${movies[2]}">`

    document.querySelector(".title4").innerHTML = title[3]
    document.querySelector(".movie4").innerHTML = `<img class="imagestyle" src="${movies[3]}">`

    document.querySelector(".title5").innerHTML = title[4]
    document.querySelector(".movie5").innerHTML = `<img class="imagestyle" src="${movies[4]}">`

    document.querySelector(".title6 ").innerHTML = title[5]
    document.querySelector(".movie6").innerHTML = `<img class="imagestyle" src="${movies[5]}">`
}

// 1. grdab input values and store in variable
// 2. Add variables to title and link  array
// 3. Pop off the last array elements
// 4. Rerun the code to show the updated movie elements