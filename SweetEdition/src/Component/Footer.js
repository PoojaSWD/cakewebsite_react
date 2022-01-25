import React from 'react';
import './Footer.css';


const Footer = () => {
    return(
    
        <>
               <center>
                   <div className="foot">
                        <div className="icons">
                                <a href="www.facebook.com/">
                                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="facebook" className="socialicon"/>
                                </a>
                                <a href="www.instagram.com/">
                                    <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="instagram" className="socialicon"/>
                                </a>
                                <a href="www.twitter.com/">
                                        <img src="https://i.ibb.co/RggmxtS/twitter-PNG3.png" alt="facebook" className="socialicon"/>
                                </a>
                        </div>

                   <h2>&copy;PSDeveloper</h2>
                   </div>
                   
               </center>
                    
    </>                     
    
    )
}

export default Footer;