import React from "react";
import './App.css';

function Movieinfo( {apiData} ){

    return(

        <>

            {                    
                        <div className="list">

                            <div className="grid" ><strong>{apiData.Title}</strong></div>                        
                            <div className="grid" >Release Date : {apiData.Released}</div>
                            <div className="grid" >Genre : {apiData.Genre}</div>
                            <div className="grid" >Language : {apiData.Language}</div>
                            <div className="grid" >Duration : {apiData.Runtime}</div>
                            <div className="grid" >Year : {apiData.Year}</div>
                            <div className="grid" >Rated : {apiData.Rated}</div>
                            <div className="grid" >Director : {apiData.Director}</div>
                            <div className="grid" >Cast : {apiData.Actors}</div>
                            <div className="grid" > Plot :<br/>{apiData.Plot}</div>
                            <div className="grid" >Rating : {apiData.imdbRating}</div>
                            <div className="grid" ><img className="banner" src={apiData.Poster}/></div>
                        
                        </div>
            }
        
        </>
    )
}

export default Movieinfo;