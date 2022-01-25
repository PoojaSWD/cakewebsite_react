import React from 'react';
import './Search.css';


const Search = () =>{
    return(
            <>

                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                           
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol>

                          
                            <div className="carousel-inner">
                                <div className="item active">
                                <img src="https://i.ibb.co/rphJZt6/5.jpg" alt="cake1"/>
                                </div>

                                <div className="item">
                                <img src="https://i.ibb.co/mFJsFWC/banner-3-5c412985-5b79-4b8d-9606-f04e37b23787-2000x.jpg" alt="Cake2"/>
                                </div>

                                <div className="item">
                                <img src="https://i.ibb.co/RbSRtpq/2.jpg" alt="cake3"/>
                                </div>

                                <div className="item">
                                <img src="https://i.ibb.co/0FN2sRq/banner-1-72e32be3-3151-4f48-a948-04281d71b208-2000x.jpg" alt="cake4"/>
                                </div>
                            </div>

                            
                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                 
            </>



    )
}

export default Search