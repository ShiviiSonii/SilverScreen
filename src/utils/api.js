import axios from "axios";

 const BASE_URL="https://api.themoviedb.org/3";
 const TMDB_TOKEN=import.meta.env.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGU1YzIyNmQzMTA3ZGNmMjc5MjcxNjBiNmRjZjQxNSIsInN1YiI6IjY0ZWM4MDNlYzYxM2NlMDBhYzQyYzQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPy1ypmhIUUHWb-yTu_mh9irx3mny6j-W2qViz8KU_Y;
 
 const headers={
    Authorization :"bearer "+TMDB_TOKEN,
 };

 export const fetchDataFromApi=async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{
            headers, params,
        });
            return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
 };