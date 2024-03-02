import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
import { LiaInfoCircleSolid } from "react-icons/lia";

import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai"


const apiKey = "1c5e078851ec4228cb4b57ecd95ddcd2";
const url = 'https://api.themoviedb.org/3';
const upcoming = "upcoming"; 
const nowPlaying = "now_playing"; 
const popular = "popular"; 
const topRated = "top_rated"; 
const imgUrl = 'https://image.tmdb.org/t/p/original';



const Card = ({img}) => {
  return(
  <img className='card' src={img} alt="cover" />
  );
}

const Row = ({title, arr=[]}) => {
  return(
  <div className='row'> 
    <h2>{title}</h2>
    
    <div className="rowItems">

      {
        arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))  
      }

    </div>
  
  </div>
  );
}

const Home = () => {

  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=2`);
      setupcomingMovies(results);
    };

    const fetchPopular = async () => {
      const {data: {results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=3`);
      setPopularMovies(results);
    };

    const fetchNowPlaying = async () => {
      const {data: {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };

    const fetchTopRated = async () => {
      const {data: {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    fetchUpcoming();
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
  }, [])

  return (
    <section className='home'>
      <div className="banner" style={{
        backgroundImage: popularMovies[0] ? `url(${imgUrl}/${upcomingMovies[2].poster_path})`: "rgb(16,16,16)",
      }}>

        {upcomingMovies[2] && <h1>{upcomingMovies[2].original_title}</h1>}
        {upcomingMovies[2] && <p>{upcomingMovies[2].overview}</p>}

        <div className="btns">
          <button className='play'><FaPlay /> Play</button>
          <button className='info'><LiaInfoCircleSolid /> More info </button>
        </div>
        
      </div>

      <Row title={"Upcoming movies"} arr={upcomingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
  
    </section>
  )
}

export default Home