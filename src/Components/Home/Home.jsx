import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { Link } from 'react-router-dom';



const apikey="addad396ac8043f81d37fcd91a427d9e";
const url="https://api.themoviedb.org/3";
const upcoming="upcoming";
const imgurl="https://image.tmdb.org/t/p/original"
const nowplaying="now_playing";
const popular="popular";
const toprated="top_rated";

const Card=({img})=>{
    return(
      <img className="card" src={img} alt="avenger" />
    )
}

const Row=({title,arr=[]})=>{
    return(
   
    <div className="row">
        <h2>{title}</h2>

       <div>
        {
     arr.map((item,index)=>(
        <Card key={index} img={`${imgurl}/${item.poster_path}`} />

     ))
    }
       </div>

    </div>
    )
}




const Home = () => {

   const [upComingmovies,setupComingmovies]=useState([])
   const [nowplayingmovie,setnowplayingmovie]=useState([])
   const [popularmovies,setpopularmovies]=useState([])
   const [topratedmovies,settopratedmovies]=useState([])
   const [genre,setGenre]=useState([])
   
useEffect(()=>{

    const fetchupcoming=async()=>{
       const {data:{results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
       setupComingmovies(results)
     // console.log(upComingmovies);
    }
  
    const fetchnowplaying=async()=>{
        const {data:{results}}= await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`);
        setnowplayingmovie(results)
       // console.log(upComingmovies);
     }
     const fetchpopular=async()=>{
        const {data:{results}}= await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
        setpopularmovies(results)
        //console.log(upComingmovies);
     }
     const fetchtoprated=async()=>{
        const {data:{results}}= await axios.get(`${url}/movie/${toprated}?api_key=${apikey}`);
        settopratedmovies(results)
       // console.log(upComingmovies);
     }
     const getallGenre=async()=>{
        const {data:{genres}}= await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
        setGenre(genres)
       // console.log(upComingmovies);
     }



    fetchupcoming();
    fetchnowplaying();
    fetchpopular();
    fetchtoprated();
    getallGenre();

})






  return (
  <div>
  <section className="home">
    <div className="banner" style={{
        backgroundImage: popularmovies[0] ? `url(${`${imgurl}/${popularmovies[0].poster_path}`})`:'none'
    }} >
       
       {popularmovies[4]&&<h1>{popularmovies[4].original_title}</h1>}
       {popularmovies[4]&&<p>{popularmovies[4].overview}</p>}

        
         </div>

    <Row  title={"Upcoming  "} arr={upComingmovies} />
    <Row  title={"Now Playing "} arr={nowplayingmovie} />
    <Row  title={"Popular "}  arr={popularmovies}/>
    <Row  title={"Top Rated"} arr={topratedmovies} />
   
   <div className="genreBox">
      {genre.map((item)=>{
        
      return  <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
      })}

   </div>
 

  </section>


  </div>
  )
}

export default Home
