let apikey=" 3c3533e9";
let searchresultcontainer=document.getElementBYID("search-result-container");
let timerID;
let timeout=null;
function debounce (callbackfunction,delayINMS){
    if(timerID){
        clearTimeout(timerID);
    }
    timerID=setTimeout(function()
    {
        callbackfunction();
    },delayINMS);
}

async function main()
{
    try{
     let searchterm=document.getElementById("search-input").value;
     let res=await fetch
     (
        "http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}"
     );
     let data=await res.json();
     displayData(data?.search);
    }
    catch(error){
        console.log(error);
    }
}
function displayData(moviesList){
    searchresultcontainer.innerHTML="";
    if(!moviesList || moviesList.length==0)
    {
        searchresultcontainer.innerHTML=" <p>No movie found</p>";
    }
    moviesList.forEach((movie)=>{
        let movieCard =document.createElement("div");
        movieCard.classname="movie-card";
        let posterElement=document.createElement("img");
        posterElement.src=movie.Poster;
        let seriesElement=document.createElement("p");
        titleElement.src=movie.Series;
        let episodeElement=document.createElement("p");
        episodeElement.src=movie.Episode;

        movieCard.append(posterElement,titleElement);
        searchresultcontainer.append(movieCard);
    });

}