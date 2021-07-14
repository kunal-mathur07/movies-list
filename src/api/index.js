import {apiUrls} from "./constants";


export function getMovies(params){
    let movies = [];
    try{
         let resp = await fetch(`${apiUrls.getMovies}${params}`)  
         let searchResults = await resp.json();
         movies = searchResults.Search; 
    }catch(ex){
       return movies;     
    }
}

export function getMovieDetails(params){
    let moviDetails;
    try{
         let resp = await fetch(`${apiUrls.getMovieDetails}${params}`)  
         let details = await resp.json();
         moviDetails = details; 
    }catch(ex){
       return movies;     
    }
}