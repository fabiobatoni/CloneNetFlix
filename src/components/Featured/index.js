import React from 'react';
import './FeaturedMovie.css';


export default ({item}) => {

    //Data por ano
    let firstDate = new Date(item.first_air_date);

    //Pegar Generos
    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 400){
        description = description.substring(0, 400) + '...';
    }

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`https://www.youtube.com/results?search_query=trailer+${item.original_name}`} target="_blank" className="featured--watchbutton">▶ Assistir Trailer</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured-genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
            
        </section>
    )
}