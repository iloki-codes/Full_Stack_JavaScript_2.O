import React from "react";

function Movieinfo( {input} ){

    return(

        <div className="list">

            {
                input ?
                    input.map( (Input) => (

                        
                        <div className="imdb" key={Input.imdbID}>
                            
                        
                            {/* <div className="grid_">{}</div>
                            <div className="grid_">{}</div> */}

                            <div className="grid_">{Input.Title}</div>
                            <div className="grid_">{Input.Year}</div>
                            <div className="grid_"><img src={Input.Poster}/></div>
                        
                        </div>
                     ) )
                 :
                    <p className="no">No Such Movies Found, please try with a different movie name ! Thankyou !</p>
            }
        
        </div>
    )
}

export default Movieinfo;