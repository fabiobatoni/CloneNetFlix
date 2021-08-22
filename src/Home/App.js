import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from '../config/Tmdb';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/Featured';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../view/images/profile.jpg'



export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [profile, setProfile] = useState(0);

  function handleList(){
    setProfile(1);
  }

  useEffect(() => {

    const loadAll = async () => {
      //Pegar lista de filmes
      let list = await Tmdb.getHomeList();
      setTimeout(() => {
        setMovieList(list);
      }, 5000);

      //Pegar Filme em destaque (featured)
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  //Controlando Scroll da pagina

  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    } 

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  return(
    
    <div className="page">
      
      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      
      <Footer/>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="carregando" />
        </div>
      }

      { profile === 0 &&
        <div className="profile">
          <div className="profile--image">
            <div className="Profile--h1"><center><h4>Who's watching ?</h4></center> </div>
            <button onClick={handleList}><img className="profile-logo" src={logo} alt="profile" /></button>
          </div>
        </div>
      }

    </div>
  )
}
